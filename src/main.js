import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
require('../public/js/promise.js')
require('../public/js/fetch.js')
require('../public/js/idb.js')
require('../public/js/utility.js')
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false











new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
