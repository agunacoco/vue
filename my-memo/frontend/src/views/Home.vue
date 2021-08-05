<template>
  <div>
    <p v-if="requiresAuth">
      <router-link :to="{ path: '/signin' }">Signin</router-link>
    </p>
  </div>
</template>

<script>
import memoApi from "../apis/memos";

export default {
  name: "Home",
  data() {
    return {
      memos: [],
      // requiresAuth: false,
    };
  },
  mounted() {
    memoApi
      .getMemos()
      .then((res) => {
        this.memos = res.data;
      })
      .catch(() => {});
  },

  // // 컴포넌트 가드
  // // 발생하는 함수 호출, 메시지, 이벤트 등을 중간에서 바꾸거나 가로채는 명령, 방법, 기술이나 행위를 의미한다.
  // // beforeRouteEnter, beforeRouteLeave 이런 것들을 훅이라고 한다.
  // // 새로운 컴포넌트를 만들기 전 호출되는 훅.
  // // 아직 컴포넌트를 만들기 전 이므로 컴포넌트를 this로 접근할 수 없다.
  // beforeRouteEnter(to, from, next) {
  //   // 이 컴포넌트를 렌더링하는 라우트 앞에 호출.
  //   // 로그인 컴포넌트가 화면에 표시되기 전에 수행될 로직.
  //   // 로그인 컴포넌트는 아직 생성되지 않은 시점.
  //   next((vm) => {
  //     vm.requiresAuth = true;
  //   });
  // },
  // // 기존에 존재하던 컴포넌트가 제거되기 전에 이 훅을 사용
  // // 반드시 next를 선언해야한다.
  // // 사용자에게 입력을 요구하는 페이지에서, 사용자의 실수로 인해(backspace, 잘 못 누름)등 작성 중인 페이지를 넘어갈 때가 있다.
  // // 이러한 상황을 막기 위해 beforeRouteLeave 이용하여 사용자에게 페이지를 넘어가기 전 확인을 요청받을 수 있다.
  // beforeRouteLeave(to, from, next) {
  //   // 로그인 컴포넌트를 화면에 표시한 url 값이 변경되지 직전의 로직
  //   // this로 로그인 컴포넌트를 접근할 수 있다.
  //   this.requiresAuth = false;
  //   next();
  // },
};
</script>
