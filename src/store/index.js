
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import collect from './collect'
const store = new Vuex.Store({
    modules:{
        collect 
    }
})
export default store