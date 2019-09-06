import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'UpDown',
      component: ()=>import('@/components/UpDown.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import('@/components/home.vue')
    }
     
  ]
})
