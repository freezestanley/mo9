import Vue from 'vue'
import App from './App.vue'
import Router from './router'

Vue.config.productionTip = false
console.log('NODE_ENV=' + JSON.stringify(process.env))

new Vue({
  router: Router('child'),
  render: h => h(App),
}).$mount('#app')

// if (process.env.NODE_ENV === 'development') {
  
// } else {
//   console.log('production')
// }

