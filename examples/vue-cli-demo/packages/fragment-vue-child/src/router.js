import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello.vue';
import World from '@/components/World.vue';
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default function getRouter(base) {
  return new Router({
    mode: 'history',
    base,
    routes: [
      {
        path: '/hello',
        name: 'hello',
        component: Hello
      },
      {
        path: '/world',
        name: 'world',
        component: World
      }
    ]
  })
}