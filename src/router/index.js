import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppHome from '@pages/home/AppHome'
import AppCenter from '@pages/center/AppCenter'
import AppXbs from '@pages/xbs/AppXbs'
import AppJob from '@pages/job/AppJob'
import AppLogin from '@pages/login/AppLogin'

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
            console.log(to,from)
            let info =JSON.parse(localStorage.getItem('userInfo'))||{}
            next(info=={}?true:{name:'login'})
        }
    },
    {
        path:'/login',
        name:'login',
        component:AppLogin
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