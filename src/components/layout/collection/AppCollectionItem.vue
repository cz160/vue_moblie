
<template>
    <div class="ccc">
        <template  v-if="collect.position_info.length>0 && type=='position'">
            <router-link tag="div" :to="{name:'detail',params:{id:item.id},query:{
                log_url:item.log_url,
                name:item.name,
                company_name:item.company_name,
                city:item.city,
                pub_time:item.pub_time,
                maxsalary:item.maxsalary,
                minsalary:item.minsalary
            }}"  class="introduce" v-for="item in collect.position_info" :key="item.id">
                <p>{{item.name}}</p>
                <span class="left">{{item.company_name}}</span>
                <span class="right">{{item.minsalary}}-{{item.maxsalary}}</span>
            </router-link>
        </template>
        <!--没有职位信息显示空空如也-->
        <div v-else>
            <img src="https://xbimg.xiaobaishixi.com/static/wap/img/no-data2.png?v=ea8197c81de2507c5e3e60b75d1ac788" alt="">
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props:['type'],
    computed:{
        ...mapState(['collect'])
    }
}
</script>

<style lang="scss">
.ccc{
    position: absolute;
    width: 100%;
    top: 82px;
    bottom: 0;
    overflow: auto;
    background-color: #FFF;
    img{
        text-align: center;
        vertical-align: middle;
        width: 100%;
    }
}
.introduce{
    position: relative;
    padding: .4rem .453333rem;
    height: 1.44rem;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
    p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .4rem;
        color: #666;
    }
    .left{
        position: absolute;
        bottom: .24rem;
        left:.453333rem;
        color: #999;
        display: block;
        font-size: .373333rem;
    }
    .right{
        position: absolute;
        bottom: .24rem;
        right: .453333rem;
        display: block;
        font-size: .373333rem;
        color: #ff2b00;
    }
}
</style>
