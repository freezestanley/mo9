import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
Vue.use(Router)
export default function getRouter(base) {
  return new Router({
    mode: 'history',
    base,
    routes: [
      {
        path: '/helloworld',
        name: 'start',
        component: HelloWorld
      }
    ]
  })
}