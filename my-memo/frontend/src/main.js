import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  // beforeCreate는 가장 처음으로 사용할 수 있는 함수.
  // localStorage에 저장되어 있는 정보를 새로고침이나 페이지를 나가더라도 ₩페이지 시작할 때 가져온다.
  beforeCreate() {
    this.$store.commit('getAccessToken')
  },
  render: h => h(App)
}).$mount('#app')

