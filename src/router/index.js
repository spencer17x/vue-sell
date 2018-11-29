import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/Home'
import Find from '../pages/find/Find'
import Order from '../pages/order/Order'
import Mine from '../pages/mine/Mine'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/find', component: Find},
    {path: '/order', component: Order},
    {path: '/mine', component: Mine}
  ]
})