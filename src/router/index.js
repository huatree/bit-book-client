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
      path: '/ebook',
      component: resolve => require(['@/views/ebook/index.vue'], resolve),
      children: [
        {
          path: ':fileName',
          component: resolve =>
            require(['@/components/ebook/EbookReader.vue'], resolve)
        }
      ]
    },
    {
      path: '/book-store',
      component: resolve => require(['@/views/store/index.vue'], resolve),
      redirect: '/book-store/shelf',
      children: [
        {
          path: '/book-store/shelf',
          component: resolve =>
            require(['@/views/store/BookShelf.vue'], resolve),
          meta: { key: 1 }
        },
        {
          path: '/book-store/category',
          component: resolve =>
            require(['@/views/store/BookCategory.vue'], resolve),
          meta: { key: 2 }
        },
        {
          path: '/book-store/home',
          component: resolve =>
            require(['@/views/store/BookHome.vue'], resolve),
          meta: { key: 3 }
        },
        {
          path: '/book-store/list',
          component: resolve =>
            require(['@/views/store/BookList.vue'], resolve),
          meta: { key: 4 }
        },
        {
          path: '/book-store/detail',
          component: resolve =>
            require(['@/views/store/BookDetail.vue'], resolve),
          meta: { key: 5 }
        },
        {
          path: '/book-store/book-speaking',
          component: resolve =>
            require(['@/views/store/BookSpeaking.vue'], resolve),
          meta: { key: 6 }
        }
      ]
    }
  ]
})
