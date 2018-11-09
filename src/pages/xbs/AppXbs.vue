<template>
    <div class="container">
        <app-banner :billboards="billboards"></app-banner>
        <div class="content">
            <div class="content-swiper">
                <swiper :options="swiperOption" ref="mySwiper">
                <div class="swiper-slide swiper" 
                v-for="(item,i) in lists" :key="item.id"
                :class="{active:i==num}"
                @click="change(i,item)"
                >{{item.title}}</div>
                </swiper>
            </div>
            
            <div>
                <app-xbs-list :url="url"></app-xbs-list>
            </div>
        </div>
        <app-foot></app-foot>
    </div>
</template>
<script>
import AppBanner from '@c/base/AppBanner'
import AppXbsList from '@c/layout/xbs/AppXbsList'
import AppFoot from '@c/base/AppFoot'
export default {
    components:{
        AppBanner,
        AppXbsList,
        AppFoot
    },
    data(){
        return {
            "billboards": [
                {
                id: 1,
                image:"https://xbimg.xiaobaishixi.com/09/59/090BFD1362D76554AE4469FFECD30E59.png"
                },
                {
                id: 2,
                image:"https://xbimg.xiaobaishixi.com/2A/44/2AD87CD8EA4D41FA5A98B7F1905D0C44.png"
                },
                {
                id: 3,
                image:"https://xbimg.xiaobaishixi.com/19/01/19CC7E681743AFBD79FDFF67E9137001.jpg"
                },
                {
                id: 4,
                image:"https://xbimg.xiaobaishixi.com/71/6E/71B861CB57CC4089A7EEE3FFA7C9676E.jpg"
                }
            ],
            num:0,
            lists:[
                {id:0,title:"最新资讯",type:'xbrm'},
                {id:1,title:"小白答疑",type:'xbdy'},
                {id:2,title:"热门",type:'xbrm'},
                {id:3,title:"面经",type:'xbmj'},
                {id:4,title:"新闻",type:'xbxw'},
                {id:5,title:"活动",type:'xbhd'},
                {id:6,title:"简历",type:'xbjl'}
            ],
            url:'xbrm',
            swiperOption:{
                //设置slider容器能够同时显示的slides数量(carousel模式)。
                slidesPerView : 'auto',
            }
        }
    },
    computed:{
        //实例化swiper
        swiper() {
            return this.$refs.mySwiper.swiper;
        }
    },
    methods:{
        change(val,item){
            this.num=val;
            //改变url参数
            this.url=item.type
            //导航栏运动到当前页
            this.$refs.mySwiper.swiper.slideTo(this.num)
        }
    } 
}
</script>
<style lang="scss">
    .content{
        background: #ffffff;
        .content-swiper{
            position: sticky; /*当为超过viewport时没作用，超过后按设置的定位*/
            top: 0;
            left: 0;
            z-index: 999;
            background: #ffffff;
            .swiper{
            display: inline-block;
            width: 2.4rem !important;
            height: 1.2rem;
            margin-right: .133333rem;
            // border-bottom: .053333rem #FECF00 solid;
            color: #333333;
            text-align: center;
            line-height: 1.2rem;
            background: #ffffff;
            font-size: .4rem;
        }
        }
        .active{
            border-bottom: 4px #FECF00 solid;
        }
    }
    
</style>

