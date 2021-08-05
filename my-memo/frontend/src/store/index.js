import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { response } from 'express'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accessToken: null
    },
    getters: {
        isAuth(state) {
            if (state.accessToken == null) return false;
            return true;
        }
    },
    mutations: {
        signin(state, payload) {
            state.accessToken = payload.accessToken
            localStorage.setItem('accessToken', state.accessToken)
        },
        signout(state) {
            state.accessToken = null
            localStorage.removeItem('accessToken')
            location.reload();
        },
        getAccessToken(state) {
            state.accessToken = localStorage.getItem('accessToken')
        }
    },
    actions: {
        signin({ commit }, payload) {
            const data = { userId: payload.userId, password: payload.password }
            return axios.post('/api/auth/login', data)
                .then(response => {
                    if (response.status == 200) {
                        commit('signin', { accessToken: response.data.token })
                    }
                })
                .catch(() => {
                    commit('signout')
                })
        }
    }
})