// 모든화면에 공통적으로 쓰이는 데이터를 저장

import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: { // 실제 데이터
        userId: 'agunacoco',
        reviews: []
    },
    mutations: { // 단순 변경되는 값은 mutations에 저장
        updateUserId(state, newId) {
            state.userId = newId;
        },
        updateReviews(state, reviews) {
            state.reviews = reviews
        }
    },
    actions: {
        getReviews({ commit }) {
            axios.get('/api/comments')
                .then(response => {
                    commit('updateReviews', response.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    getters: {
        reviewCount(state /* , getters */) {
            return state.reviews.length
        }
    }
});