import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from "./store";

// import Vuex from "vuex";
import VueRouter from 'vue-router'

// Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
