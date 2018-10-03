import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/'
import VueCarousel from 'vue-carousel'
import Carousel3d from 'vue-carousel-3d'

Vue.config.productionTip = false

Vue.use(VueCarousel)
Vue.use(Carousel3d)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
