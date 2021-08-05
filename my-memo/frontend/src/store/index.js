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
            // 웹 storage 객체인 localStorage는 브라우저 내에 키-값 쌍을 저장할 수 있게 해준다.
            // 페이지를 새로 고침, 브라우저를 다시 실행해도 데이터가 사라지지 않고 남아있다.
            // setItem(key, value)로 accessToken이라는 키로 state.accessToken을 저장한다.
            localStorage.setItem('accessToken', state.accessToken)
        },
        signout(state) {
            // signout하면 토큰을 비운다.
            // 로컬 스토리지에서 accessToken을 지운다.
            // reload()는 현재 접속중인 페이지를 다시 불러오는 역할.
            state.accessToken = null
            localStorage.removeItem('accessToken')
            location.reload();
        },
        // ?
        getAccessToken(state) {
            state.accessToken = localStorage.getItem('accessToken')
        }
    },
    actions: {
        signin({ commit }, payload) {
            // payload로 받아온 userid, password를 data에 저장 후 commit으로 mutation으로 보내준다.
            const data = { userId: payload.userId, password: payload.password }
            return axios.post('/api/auth/login', data)
                .then(response => {
                    // http 200번은 요청이 성공했음을 나타내는 성공 응답 상태 코드.
                    if (response.status == 200) {
                        commit('signin', { accessToken: response.data.token })
                    }
                })
                // 에러발생하면 로그아웃
                .catch(() => {
                    commit('signout')
                })
        }
    }
})