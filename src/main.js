import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import Router from './router/index.js'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router: Router,
})
