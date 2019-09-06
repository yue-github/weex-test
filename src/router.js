/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
 
 
Vue.use(stream);
Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/UpDown',
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
