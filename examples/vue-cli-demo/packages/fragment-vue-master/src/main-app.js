import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Config from '../config/application.json'
import { globalEvent } from 'chaoxi'

globalEvent.on('global-test-event', function(e){
  alert( 'global-test-event:' + e)
})

  Vue.config.productionTip = false
  let instance = null;


  export default {
    app: yyapp,
    bootstrap: async function bootstrap() {
      console.log('react app bootstraped');
    },
    mount: async function mount(contain, baseUrl) {
      console.log('props from main framework', contain, baseUrl);
      const div = document.createElement('div');
      contain.appendChild(div);
      instance = new Vue({
        router: Router(baseUrl),
        render: h => h(App),
      }).$mount(div);
    },
    unmount: async function unmount() {
      console.log('============================================================')
      instance.$destroy();
      instance.$el.parentNode.removeChild(instance.$el);
      instance = null;
    }
  }

