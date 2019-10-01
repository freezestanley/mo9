import Vue from 'vue'
import App from './App.vue'
import yyapp from '@/tailor';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

let instance = null;
export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(contain, baseUrl) {
  console.log('props from main framework', contain, baseUrl);
  const div = document.createElement('div');
  contain.appendChild(div);
  instance = new Vue({
    // router: getRouter(baseUrl),
    render: h => h(App),
  }).$mount(div);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.parentNode.removeChild(instance.$el);
  // instance.$remove()
  instance = null;
  yyapp.sonApplication.forEach(item=>item.unmount())
}