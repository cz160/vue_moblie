import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppHome from '@pages/home/AppHome'
import AppMine from '@pages/mine/AppMine'
import AppXbs from '@pages/xbs/AppXbs'

//路由表
const routes = [
    {
        path:'/home',
        name:'home',
        component:AppHome,
        alias: '/'

    },
    {
        path:'/mine',
        name:'mine',
        component:AppMine
    },
    {
        path:'/xbs',
        name:'xbs',
        component:AppXbs

    }
]
//路由工具
const router = new VueRouter({
    mode:'history',
    routes
})

export default router