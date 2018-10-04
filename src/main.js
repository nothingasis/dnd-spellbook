import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/'
import VueStroll from 'vue-stroll'

Vue.config.productionTip = false

Vue.use(VueStroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
