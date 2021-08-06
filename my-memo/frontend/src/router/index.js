import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/AddMemo.vue'
import Read from '../views/ReadMemo.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const auth = (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem('accessToken') == null) {
      alert('Signin please')
      next('/signin')
    }
  }
  next()
}

const routes = [
  // 각 경로객체(?)를 레코드라고 한다.
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requireAuth: true }
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
    // meta 정보에 authRequired라는 boolean값 추가
    // 인증이 필요하다. 로그인이 필요하다.
    meta: { requireAuth: true }
  },
  {
    path: '/memos/:memoId',
    name: 'Read',
    component: Read,
    meta: { requireAuth: true }
    // // 라우트 가드
    // // 라우트 설정 객체에 직접 정의
    // // 이동하려는 라우트에 진입하기 전 호출되는 훅.
    // // beforeEach와의 차이점은 라우트마다 각각 다르게 가드를 지정할 수 있다.
    // beforeEnter: (to, from, next) => {
    //   alert('Signin please')
    //   next("/signin")
    // }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },

]

// 전역 가드
// 네비게이션 가드란 뷰 라우터로 특정 url에 접근할 때 해당 url의 접근을 막는 방법.
// 예를 들면, 사용자의 인증정보가 없으면 특정 페이지에 접근하지 못하게 할 때 사용한다.
// 네비게이션 가드의 종류
// 애플리케이션 전역에서 동작하는 전역 가드
// 특정 url에서만 동작하는 라우터 가드
// 라우터 컴포넌트 안에 정의하는 컴포넌트 가드

// 전역 가드는 라우터 인스턴스를 참조하는 객체로 설정할 수 있다.
// 전역 가드 설정을 위해 아래와 같이 라우터 인스턴스를 생성.
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(auth);
// // 기존의 컴포넌트가 제거된 후 새로운 네비게이션이 시작될때 이 훅을 호출.
// // router.beforeEach()를 호출하고 나면 모든 라우팅이 대기 상태가 된다. 
// // 원래 url이 변경되고 나면 해당 url에 따라 화면이 자연스럽게 전환되어야 하는데 전역 가드를 설정했기 때문에 화면이 전환되지 않는다.
// // 해당 url로 라우팅하기 위해서는 next를 호출 next()가 호출되지 전까지 화면이 전환되지 않는다.
// // 라우팅은 어떤 네트워크 안에서 통신 데이터를 보낼 때 최적의 경로를 선택하는 과정.
// router.beforeEach((to, from, next) => {
//   // to: 이동할 url
//   // from: 현재 url
//   // next: to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수

//   // 콜백함수에 사용자 인증 여부를 체크하는 로직을 추가
//   // to: 이동할 url에 해당하는 라우팅 객체
//   // to.matched.some((recode)가 각 레코드를 검사한다. 검사해서 meta.requireAuth가 있는지 확인한다. 
//   // 인증 값이 필요한 페이지는 라우팅을 막는다.
//   // .some()은 자바스크립트 내장 API다. 지정된 배열의 모든 요소를 검사해 조건을 만족시키면 true를 반환 아니면 false를 반환.
//   if (to.matched.some((recode) => recode.meta.requireAuth)) {
//     // 이 라우트는 인증이 필요하며 로그인 한 경우 확인.
//     // 로그인 페이지로 리디렉션한다.
//     alert("Signin please")
//     next("/signin");
//   } else {
//     next(); // 페이지 전환
//   }
// })

export default router
