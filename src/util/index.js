//轮播图工具
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//请求工具
import ajax from 'axios'
Vue.prototype.$http = ajax;
Vue.use(VueAwesomeSwiper)