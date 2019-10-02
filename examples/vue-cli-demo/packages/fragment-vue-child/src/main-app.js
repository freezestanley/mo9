import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Config from '../config/application.json'
import chaoxi from 'chaoxi'

chaoxi.on('instance-test-event', e=>{
  alert('instance-test-event: ' + e)
})

Vue.config.productionTip = false

  window.instance = null;
  export async function bootstrap() {
    console.log('react app bootstraped');
  }

  export async function mount(contain, baseUrl) {
    console.log('props from main framework', contain, baseUrl);
    const div = document.createElement('div');
    contain.appendChild(div);
    window.instance = new Vue({
      router: Router(baseUrl),
      render: h => h(App),
    }).$mount(div);
  }

  export async function unmount() {
    console.log('============================================================')
    window.instance.$destroy();
    window.instance.$el.parentNode.removeChild(window.instance.$el);
    window.instance = null;
  }
