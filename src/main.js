//项目入口文件
import Vue from 'vue'
import App from './App.vue'
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload)
//flexible 移动端适配
import '@libs/flexible'
//引入swiper并将axios(ajax请求工具)挂载到vue的原型上
import './libs'
//router路由
import router from './router'
//引入store并注入到根实例
import store from './store'
//阻止vue的提示
Vue.config.productionTip = false

//根实例
new Vue({
  router,// 从此任何组件都可以使用到$router （路由工具） ,$route (路由属性)
  store,
  render: h => h(App)
}).$mount('#app')
//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG
