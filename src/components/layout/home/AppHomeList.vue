<template>
        <div class="content-parent">
            <div class="content">
                <ul class="list-box">
                    <app-home-item v-for="item in jobs" :key="item.id" :job="item"></app-home-item>
                </ul>
                <a class="more-list">前往职位列表，查看更多职位&gt;&gt;</a>
            </div>
        </div>
</template>
<script>
import AppHomeItem from './AppHomeItem'
export default {
    components:{
        AppHomeItem
    },
    data(){
       return {
           jobs:[],
       } 
    },
    created(){
        this.$http({
            url:`/app/jobs/search?p=1`,
        }).then(res=>{
            this.jobs=res;
        })
    }
};
</script>
<style lang="scss">
.content-parent {
  position: absolute;
  top: 6.4rem;
  bottom: 1.333333rem;
  width: 100%;
  overflow: auto;
  .content {
    margin-top: 0.266667rem;
    background: #fff;
    .list-box {
      padding: 0.186667rem 0.466667rem 0;
      li {
         &:not(:last-child){
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
              p{
                font-size: .333333rem;
                color: #bdc9da;
              }
              p:first-child{
                  font-size: .426667rem;
                  color: #5a647a;
              }
            }
          }
          .right{
              display: flex;
              flex-direction: column;
              flex-grow: 1;
              align-items: flex-end;
              .time{
                  margin-top: .16rem;
                  font-size: .32rem;
                  color: #d2dbef;
                  text-align: right;
              }
              .price{
                    margin-top: .573333rem;
                    font-size: .373333rem;
                    color: #f96969;
                    font-weight: bold;
              }
          }
        }
      }
    }
    .more-list{
        display: inline-block;
        margin-top: .533333rem;
        width: 100%;
        background-color: #fff;
        line-height: .933333rem;
        text-align: center;
        color: #bbbebd;
        margin-bottom: 2.666667rem;
    }
  }
}
</style>


