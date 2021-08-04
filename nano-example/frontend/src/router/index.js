import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from '@/components/Books.vue'
import Book from '@/components/Book.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Books',
    component: Books
  },
  {
    path: '/books/:bookId',
    name: 'Book',
    component: Book
  }
]

const router = new VueRouter({
  // mode:"history"를 해준면 url에서 #표시가 제거된다.
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
