import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/components/Cart'
import Home from '@/components/Home'
import Start from '@/components/Start'
import Order from '@/components/Order'
import Pcontent from '@/components/Pcontent'
import Search from '@/components/Search'
import Hot from '@/components/Hot'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/start',
      name: 'start',
      component: Start
    }, {
      path: '*',
      redirect: '/start'
    }, {
      path: '/order',
      name: 'order',
      component: Order
    }, {
      path: '/pcontent',
      name: 'pcontent',
      component: Pcontent
    }, {
      path: '/search',
      name: 'search',
      component: Search
    }, {
      path: '/hot',
      name: 'hot',
      component: Hot
    }
  ]
})
