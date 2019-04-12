import Vue from 'vue'
import App from './App'
import Router from './router/index.js'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router: Router,
})
