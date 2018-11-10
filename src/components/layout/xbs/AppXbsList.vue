<template>
    <div class="item-content">
        <div class="content-list">
            <app-xbs-item v-for="item in lists" :key="item.id" :list="item"></app-xbs-item>
        </div>
        <div class="load-more" v-if="more" @click="loadmore">查看更多文章列表</div>
        <div class="load-more" v-else>已加载全部</div>
    </div>
</template>
<script>
import AppXbsItem from '@c/layout/xbs/AppXbsItem'
import { Indicator } from 'mint-ui';
export default {
    props:['url'],
    components:{
        AppXbsItem
    },
    data(){
        return{
            more:false,
            p:1,
            lists:[],
            total:26,
        }
    },
    watch:{
        url:{
            immediate: true,
            handler(){
                this.lists=[]  //清空当前数据
                this.p=1  //重置页数
                this.more=true
                this.loadmore()  //执行数据请求
            }
        }
    },
    methods:{
        async loadmore(){
            Indicator.open({
                 text: '疯狂加载中...',
                 spinnerType: 'triple-bounce'
            });
            if(!this.more) return false;
            let result= await this.$http({
                //根据中间父组件传入的参数进行数据请求(请求地址只有this,url不同)
                url:`/app/article/station?category=${this.url}&p=${this.p}&__t=${Date.now()}`,
                method:'POST'
            })
            //加载完全部数据
            if(this.total-this.lists.length<=0){
                this.more=false
            }else{
                 this.p++;
            }
            this.lists=this.lists.concat(result);
             Indicator.close();
        }
    }
}
</script>
<style lang="scss">
    .item-content{
        position: relative;
        padding-bottom: 1.6rem;
        .content-list{
            position: relative;
            background-color: #f5f5f5;
            .item{
                padding: .4rem;
                padding-left:.6rem;
                margin-bottom: 0;
                padding-bottom: .266667rem;
                background-color: white;
                display: flex;
                img{
                    width: 3rem;
                    height: 1.586667rem;
                    flex-shrink:0;
                }
                .left{
                    margin-left: .266667rem;
                    overflow: hidden;
                    .til{
                        width: 100%;
                        height: .666667rem;
                        line-height: .48rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: .4rem;
                        color: #222222;
                    }
                    p{
                        font-size: .333333rem;
                        color: #979797;
                        max-height: .933333rem;
                        line-height: .466667rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .icons{
                        height: .4rem;
                        line-height: .4rem;
                        color: #979797;
                        font-size: .32rem;
                        padding-top: .133333rem;
                        display: flex;
                        span{
                            text-align: center;
                            cursor: pointer;
                        }
                        .time{
                            width: 2.22rem
                        }
                        .view{
                            width: 1.633333rem;
                            padding: 0 4px;
                            border-left: 1px solid #a4a4a4;
                            border-right: 1px solid #a4a4a4;
                        }
                        .like{
                            width: 1.5rem;
                        }
                    }
                }
            }
        }
    }
    .load-more{
        margin-top:.4rem ;
        height: .933333rem;
        font-size: .333333rem;
        display: inline-block;
        width: 100%;
        background-color: #fff;
        line-height: .933333rem;
        text-align: center;
        color: #bbbebd;
    }
</style>


