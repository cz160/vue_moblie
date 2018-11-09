<template>
  <div class="job-content-parent">

    <vue-scroll :ops="ops"
       @load-activate="handleActivate"
       @load-start="handleStart"
       @load-before-deactivate="handleBeforeDeactivate"
       @load-deactivate="handleDeactivate"
    >
      <div class="content">
        <ul class="list-box">
          <app-job-item v-for="item in jobs" :key="item.id" :job="item"></app-job-item>
        </ul>
      </div>
    </vue-scroll>
  </div>
</template>
<script>
<<<<<<< HEAD
  import AppJobItem from './AppJobItem'

  export default {
    components: {
=======
import AppJobItem from './AppJobItem'
import { Indicator } from 'mint-ui';
export default {
    components:{
>>>>>>> master
      AppJobItem
    },
    data() {
      return {
        jobs: [],
        search: 1,
        ops: {
          vuescroll: {
            pushLoad: {
              enable: true,
              tips: {
                deactive: '放手加载',
                active: '上拉加载',
                start: '加载中...',
                beforeDeactive: '加载成功'
              },
              auto: true,
              autoLoadDistance: 40
            },
            paging: false,
            zooming: true,
            snapping: {
              enable: false,
              width: 100,
              height: 100
            },
            scroller: {
              bouncing: true,
              locking: true,
              minZoom: 0.5,
              maxZoom: 3,
              speedMultiplier: 1,
              penetrationDeceleration: 0.03,
              penetrationAcceleration: 0.08,
              preventDefault: true,
              preventDefaultOnMove: true
            }
          },
          rail: {
            background: '#eee6ef',
            opacity: 0,
            size: '2px',
            specifyBorderRadius: false,
            gutterOfEnds: '2px',
            gutterOfSide: '2px',
            keepShow: false
          },
          bar: {
            showDelay: 500,
            onlyShowBarOnScroll: true,
            keepShow: false,
            background: '#80a0c1',
            opacity: 1,
            hoverStyle: false
          }
        },
        name: 'myScroll'
      }
    },
    created() {
      this.$http({
        url: `/app/jobs/search?p=${this.search}`,
      }).then(res => {
        this.jobs = res
        // this.jobs = this.jobs.concat(res);
      })
    },
    watch: {
      search: function(){
        this.$http({
          url: `/app/jobs/search?p=${this.search}`,
        }).then(res => {
            this.jobs = this.jobs.concat(res);
    created(){
        Indicator.open('加载中...');
        this.$http({
            url:`/app/jobs/search?p=1`,
        }).then(res=>{
            this.jobs=res;
            Indicator.close();
        })
      }
    },
    methods: {
      handleActivate(vm, refreshDom) {

      },
      handleStart(vm, refreshDom, done) {
        this.search += 1
        console.log(1);
      },
      handleBeforeDeactivate(vm, refreshDom, done) {
        done();
      },
      handleDeactivate(vm, refreshDom) {

      }
    }

  };
</script>
<style lang="scss">
  .job-content-parent {
    position: relative;
    top: 1.333333rem;
    width: 100%;
    height: 14.933333rem;
    overflow: hidden;
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
</style>


