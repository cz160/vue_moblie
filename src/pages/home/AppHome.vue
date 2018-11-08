<template>
    <section class="wrap">
         <!--头部轮播图-->
        <app-banner></app-banner>
        <!--主体内容-->
        <main>
            <div class="tab-bar">
                <a v-for="item in tab_bar" :key="item.id">
                    <img :src="item.image">
                    <span>{{item.title}}</span>
                </a>
            </div>
            <app-home-list></app-home-list>
        </main>
        <app-foot></app-foot>
    </section>
</template>
<script>
import AppBanner from '@c/base/AppBanner'
import AppHomeList from '@c/layout/home/AppHomeList'
import AppFoot from '../../components/base/AppFoot'
export default {
    //注册组件
    components:{
        AppBanner,
        AppHomeList,
        AppFoot
    },
    data(){
        return {
            "tab_bar":[
                {id:0,image:'https://xbimg.xiaobaishixi.com/static/wap/img/bar-icon1.png?v=9618b6725ffa463525ae89f44704e64a',title:"短期实习"},
                {id:1,image:'https://xbimg.xiaobaishixi.com/static/wap/img/bar-icon2.png?v=6354d37060837460c64689828a2d3430',title:"一周三天"},
                {id:2,image:'https://xbimg.xiaobaishixi.com/static/wap/img/bar-icon3.png?v=662636cc15363c576ebc4bfdafc392ae',title:"转正机会"},
            ]
        }
    }
}
</script>
<style lang="scss">
    *{
        margin:0;
        padding:0
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    .wrap{
        .tab-bar{
            box-sizing: border-box;
            width: 100%;
            height: 1.6rem;
            display: flex;
            justify-content: space-between;
            background-color: #fff;
            a{
                width: 33%;
                text-align: center;
                font-size: .4rem;
                color: #5a647a;
                line-height: 1.6rem;
                img{
                    width: .466667rem;
                    margin-right: .133333rem;
                }
            }
        }
    }
</style>


