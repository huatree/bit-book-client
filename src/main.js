import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'
import lazyload from 'vue-lazyload'
import './mock'
import '@/assets/styles/global.scss'
import '@/assets/styles/icon.css'

Vue.config.productionTip = false

Vue.use(lazyload, {
  error: require('@/assets/images/loading2.png'),
  loading: require('@/assets/images/loading2.png')
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
