import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppHome from '@pages/home/AppHome'
import AppCenter from '@pages/center/AppCenter'
import AppXbs from '@pages/xbs/AppXbs'
import AppJob from '@pages/job/AppJob'

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
        component:AppCenter
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

    }
]
//路由工具
const router = new VueRouter({
    mode:'history',
    routes
})

export default router