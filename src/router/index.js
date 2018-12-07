import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/Home'
import Find from '../pages/find/Find'
import Order from '../pages/order/Order'
import Mine from '../pages/mine/Mine'
import Login from '../pages/login/Login'
import Menu from '../common/Menu.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/', 
      component: Menu,
      children: [
        {path: '', component: Home, meta: {keepAlive: true}},
        {path: 'find', component: Find, meta: {keepAlive: false}},
        {path: 'order', component: Order, meta: {keepAlive: true}},
        {path: 'mine', component: Mine, meta: {keepAlive: false}},
      ]
    },
    {
      path: '/login',
      component: Login,
      meta: {keepAlive: false}
    }
  ]
})

export default router;