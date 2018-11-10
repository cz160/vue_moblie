<template>
    <section class="wrap">
         <!--头部轮播图-->
        <app-banner :billboards="billboards"></app-banner>
        <!--主体内容-->
        <router-link  :to="{name:'job'}" class="search">
            <img src="https://xbimg.xiaobaishixi.com/static/wap/img/search.png?v=539644f3ada4ea6768af4bd326e5b35f">
        </router-link>
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
import AppFoot from '@c/base/AppFoot'
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
            ],
            "billboards": [
                {
                id: 1,
                image:"https://xbimg.xiaobaishixi.com/3F/9B/3FA3996788CBB627B2914D05D705D19B.png"
                },
                {
                id: 2,
                image:"https://xbimg.xiaobaishixi.com/A6/BF/A6F06C4B50E434A64F4F948E6608A8BF.jpg"
                },
                {
                id: 3,
                image:"https://xbimg.xiaobaishixi.com/B8/4F/B8DCDAE82A5156706C8D071727288C4F.png"
                },
                {
                id: 4,
                image:
                    "https://xbimg.xiaobaishixi.com/0F/7F/0F6EB131D886A526B7D5189E43950E7F.png"
                },
                {
                id: 5,
                image:"https://xbimg.xiaobaishixi.com/63/8F/6303AA183545C4BB3E0F253933D84B8F.jpg"
                },
                {
                id: 6,
                image:"https://xbimg.xiaobaishixi.com/17/50/17A6A5392BDAA552D3695F1655DA4450.jpg"
                }
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
    .search{
        position: absolute;
        display: inline-block;
        position: absolute;
        top: 20px;
        left: 10%;
        width: 80%;
        z-index: 10;
    }
</style>


