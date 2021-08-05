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
  beforeCreate() {
    this.$store.commit('getAccessToken')
  },
  render: h => h(App)
}).$mount('#app')
