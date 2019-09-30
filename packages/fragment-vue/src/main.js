import Vue from 'vue'
import App from './App.vue'
import getRouter from './router';

Vue.config.productionTip = false

// new Vue({
//   router: getRouter(),
//   render: h => h(App),
// }).$mount('#app')


console.log('fragmet-vue:', window)


window.instance = null;
export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(contain, baseUrl) {
  console.log('props from main framework', contain, baseUrl);
  const div = document.createElement('div');
  contain.appendChild(div);
  window.instance = new Vue({
    router: getRouter(baseUrl),
    render: h => h(App),
  }).$mount(div);
}

export async function unmount() {
  console.log('============================================================')
  console.log(window.instance)
  window.instance.$destroy();
  window.instance.$el.parentNode.removeChild(window.instance.$el);
  // instance.$remove()
  window.instance = null;
}