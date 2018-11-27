import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick'
import './style/reset.styl'
import './style/iconfont.styl'
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
}).$mount('#app')
