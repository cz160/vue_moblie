import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//页面路由配置
import AppHome from '@pages/home/AppHome'
import AppMine from '@pages/mine/AppMine'
import AppCenter from '@pages/center/AppCenter'
import AppDetail from '@pages/details/AppDetail'
import AppCenterText from '@pages/center/AppCenterText'

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
        path:'/center',
        name:'center',
        component:AppCenter
    },
    {
        path:'/detail/:id',
        name:'detail',
        component:AppDetail
    },
    {
        path:'/center/text',
        name:'text',
        component:AppCenterText
    }
]
//路由工具
const router = new VueRouter({
    mode:'history',
    routes
})

export default router