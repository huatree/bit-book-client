import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/book-store'
    },
    {
      path: '/book-store',
      component: resolve => require(['@/views/store/index.vue'], resolve),
      redirect: '/book-store/home',
      children: [
        {
          path: '/book-store/home',
          component: resolve => require(['@/views/store/BookHome.vue'], resolve),
          meta: { key: 3 }
        }
      ]
    }
  ]
})
