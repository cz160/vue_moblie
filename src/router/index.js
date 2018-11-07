import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//页面路由配置
import AppHome from '@pages/home/AppHome'
import AppMine from '@pages/mine/AppMine'
import AppCenter from '@pages/center/AppCenter'


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

    },
    {
        path:'/center',
        name:'center',
        component:AppCenter,
        //alias: '/'

    },
]
//路由工具
const router = new VueRouter({
    mode:'history',
    routes
})

export default router