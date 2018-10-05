import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCoffee,
  faMagic,
  faCrosshairs,
  faHourglassStart,
  faPuzzlePiece,
  faSitemap,
  faClock,
  faPlus,
  faFolderPlus,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store/'

library.add(
  faCoffee,
  faMagic,
  faCrosshairs,
  faHourglassStart,
  faPuzzlePiece,
  faSitemap,
  faPuzzlePiece,
  faClock,
  faPlus,
  faFolderPlus,
  faTimes
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
