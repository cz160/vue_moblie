<template>
        <div class="job-content-parent">
            <div class="content">
                <ul class="list-box">
                    <app-job-item v-for="item in jobs" :key="item.id" :job="item"></app-job-item>
                </ul>
                <div class="more-list">正在加载...</div>
            </div>
        </div>
</template>
<script>
import AppJobItem from './AppJobItem'
import { Indicator } from 'mint-ui';
export default {
    components:{
      AppJobItem
    },
    data(){
       return {
           jobs:[],
       } 
    },
    created(){
        Indicator.open('加载中...');
        this.$http({
            url:`/app/jobs/search?p=1`,
        }).then(res=>{
            this.jobs=res;
            Indicator.close();
        })
    }
};
</script>
<style lang="scss">
.job-content-parent {
  position: relative;
  top: 1.333333rem;
  bottom: 1.333333rem;
  width: 100%;
  overflow: auto;
  .content {
    height: 100%;  
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
                margin-bottom: .533333rem;
              }
              p:last-child{
                font-size: .346667rem!important;
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


