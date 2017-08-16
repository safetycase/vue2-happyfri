import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Item from '@/components/pages/Item'

Vue.use(Router)

export default new Router({
  routes: [
    {
       path: '/',
       name: 'Home',
       component: Home
    },
    {
       path: '/item',
       name: 'Item',
       component: Item
    }
  ]
})
