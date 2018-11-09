import Vue from 'vue'
import VueRouter from 'vue-router'
import vuescroll from 'vuescroll/dist/vuescroll-slide';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);

Vue.use(VueRouter)

import AppHome from '@pages/home/AppHome'
import AppCenter from '@pages/center/AppCenter'
import AppDetail from '@pages/details/AppDetail'
import AppCenterText from '@pages/center/AppCenterText'
import AppXbs from '@pages/xbs/AppXbs'
import AppJob from '@pages/job/AppJob'
import AppSearch from '@pages/search/AppSearch'
import AppLogin from '@pages/login/AppLogin'
import AppRegister from '@pages/register/AppRegister'
import AppCollection from '@pages/collection/AppCollection'

//路由表
const routes = [
    {
        path:'/home',
        name:'home',
        component:AppHome,
        alias: '/'  //设置别名，当访问/相当于访问/home

    },
    {
        path:'/center',
        name:'center',
        component:AppCenter,
         //组件内的守卫
         beforeEnter:(to,from,next)=>{
            let info =JSON.parse(localStorage.getItem('info')) 
            next(info?true:{name:'login'})
        }
    },
    {
        path:'/detail/:id',
        name:'detail',
        component:AppDetail,
        props: true
    },
    {
        path:'/center/text',
        name:'text',
        component:AppCenterText,
    },
    {
        path:'/login',
        name:'login',
        component:AppLogin
    },
    {
        path:'/register',
        name:'register',
        component:AppRegister
    },
    {
        path:'/xbs',
        name:'xbs',
        component:AppXbs

    },
    {
        path:'/job',
        name:'job',
        component:AppJob

    },
    {
        path:'/search',
        name:'search',
        component:AppSearch

    },
    {
        path:'/collection',
        name:'collection',
        component:AppCollection,
    }
]
//路由工具
const router = new VueRouter({
    mode:'history',
    routes
})

export default router

