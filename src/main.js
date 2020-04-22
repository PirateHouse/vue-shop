import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import toast from'common/toast'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(toast)

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
