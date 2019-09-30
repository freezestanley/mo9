import Vue from 'vue'
import App from './App.vue'
import Router from './router'

Vue.config.productionTip = false
console.log('NODE_ENV=' + JSON.stringify(process.env))

if (process.env.NODE_ENV === 'development') {
  new Vue({
    router: Router('child'),
    render: h => h(App),
  }).$mount('#app')
} else {
  console.log('production')
}

