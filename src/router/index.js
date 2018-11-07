import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//页面路由配置
import AppHome from '@pages/home/AppHome'
import AppMine from '@pages/mine/AppMine'
<<<<<<< HEAD
import AppXbs from '@pages/xbs/AppXbs'
=======
import AppCenter from '@pages/center/AppCenter'

>>>>>>> 02beefc0c2c3f58a0e4b0ec360df0ccd4f8aa18b

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