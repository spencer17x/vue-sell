import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/Home'
import Find from '../pages/find/Find'
import Order from '../pages/order/Order'
import Mine from '../pages/mine/Mine'
import Login from '../pages/login/Login'
import Menu from '../common/Menu.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/', 
      component: Menu,
      children: [
        {path: '', component: Home},
        {path: 'find', component: Find},
        {path: 'order', component: Order},
        {path: 'mine', component: Mine},
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})