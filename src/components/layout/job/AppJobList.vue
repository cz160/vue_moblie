<template>
  <div class="job-content-parent">
    <div class="wrapper">
      <div class="content">
        <ul class="list-box">
          <app-job-item v-for="item in jobs" :key="item.id" :job="item"></app-job-item>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import AppJobItem from './AppJobItem'
  import { Indicator } from 'mint-ui';
  export default {
    props: ['searchWords','show'],
    components: {
      AppJobItem
    },
    data() {
      return {
        jobs: [],
        search: 1,
        scroll: '',
      }
    },
    created() {
        //加载数据前
            Indicator.open({
                text: '加载中...',
                spinnerType: 'triple-bounce'
          });
        this.$http({
          url: `/app/jobs/search?p=1`,
        }).then(res => {
          this.jobs = res;
           Indicator.close();
          let wrapper = document.querySelector('.wrapper')
          this.scroll = new BScroll(wrapper, {
            click: true,
            scrollY: true,
            pullUpLoad: {
              threshold: -200
            }
          })
          this.scroll.on('pullingUp', () => {
            this.search += 1
          })
        })
    },
    watch: {
      search: function () {
        //加载数据前
            Indicator.open({
                text: '加载中...',
                spinnerType: 'triple-bounce'
          });
        this.$http({
          url: `/app/jobs/search?p=${this.search}&k=${this.searchWords}`,
        }).then((res) => {
              Indicator.close();
              this.jobs = this.jobs.concat(res);
              this.scroll.refresh()
              this.scroll.finishPullUp();
          if(this.jobs.length === 0){
            this.$emit('update:show', 3)
          }
        })
      },
      searchWords: function () {
        this.search = 1
        this.$http({
          url: `/app/jobs/search?p=${this.search}&k=${this.searchWords}`,
        }).then((res) => {
          this.jobs = res;
          if(this.jobs.length === 0){
            this.$emit('update:show', 3)
          }
        })
      }
    },
    methods: {}
  };
</script>
<style lang="scss">
  .job-content-parent {
    position: relative;
    top: 1.333333rem;
    width: 100%;
    height: 15.2rem;
    overflow: hidden;
    .wrapper {
      width: 100%;
      height: 100%;
      .content {
        background: #fff;
        .list-box {
          padding: 0.186667rem 0.466667rem 0;
          li {
            &:not(:last-child) {
              border-bottom: 1px solid #ebeff2;
            }
            a {
              padding: 0.386667rem 0 0.44rem;
              width: 100%;
              display: flex;
              .left {
                display: flex;
                img {
                  width: 1.6rem;
                  height: 1.6rem;
                }
                .middle {
                  margin-left: 0.266667rem;
                  p {
                    font-size: .333333rem;
                    color: #bdc9da;
                  }
                  p:first-child {
                    font-size: .426667rem;
                    color: #5a647a;
                    margin-bottom: .533333rem;
                  }
                  p:last-child {
                    font-size: .346667rem !important;
                  }
                }
              }
              .right {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                align-items: flex-end;
                .time {
                  margin-top: .16rem;
                  font-size: .32rem;
                  color: #d2dbef;
                  text-align: right;
                }
                .price {
                  margin-top: .573333rem;
                  font-size: .373333rem;
                  color: #f96969;
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }

  }
</style>


