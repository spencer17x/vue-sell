import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './style/reset.styl'
import './style/iconfont.styl'
import 'lib-flexible/flexible.js'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.prototype.axios = axios
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
