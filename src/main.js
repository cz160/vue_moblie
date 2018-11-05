//项目入口文件
import Vue from 'vue'
import App from './App.vue'

//阻止vue的提示
Vue.config.productionTip = false

//根实例
new Vue({
  render: h => h(App)
}).$mount('#app')
