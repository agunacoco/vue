import Vue from 'vue'
import VueRouter from 'vue-router'

import Books from '@/components/Books.vue'
import Book from '@/components/Book.vue'

Vue.use(VueRouter)

export default new VueRouter({
    // mode:"history"를 해준면 url에서 #표시가 제거된다.
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Books
        },
        {
            path: '/books/:bookId',
            component: Book
        },
    ]
});