// import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Item from '@/components/Item'
import Shop from '@/components/Shop'

// Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/item',
      name: 'item',
      component: Item
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    }
  ]
})
