
<template>
    <div class="ccc">
        <router-link tag="div" :to="{name:'detail'}"  v-if="messages && type=='position'">
            <div  class="introduce" v-for="item in messages" :key="item.id">
                <p>{{item.name}}</p>
                <span class="left">{{item.company_name}}</span>
                <span class="right">{{item.minsalary}}-{{item.maxsalary}}</span>
                <!-- <span class="right">薪资面议</span> -->
            </div>
        </router-link>
        
        <div v-else>
            <img src="https://xbimg.xiaobaishixi.com/static/wap/img/no-data2.png?v=ea8197c81de2507c5e3e60b75d1ac788" alt="">
        </div>
    </div>
</template>

<script>
//import AppDetailFooter from '@c/layout/detail/AppDetailFooter'
export default {
    props:['type'],
    data(){
        return {
          //  time:'/天',
            messages : null
            // messages:[
            //     {id:1,name:'设计师'},
            //     {id:2,company_name:'原理动画'},
            //     {id:3,minsalary:30},
            //     {id:4,maxsalary:60}
            // ]
            // name:'设计师',
            // company_name:'原理动画',
            // minsalary:30,
            // maxsalary:60
        }
    },
    created(){
        
        var d=localStorage.getItem("data");      
        this.messages = JSON.parse(d)


        // this.messages.name=message.name
        // this.messages.company_name=message.company_name
        // this.messages.minsalary=message.minsalary
        // this.messages.maxsalary=message.maxsalary
       // console.log(this.messages)
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
