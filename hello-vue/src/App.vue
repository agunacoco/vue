<template>
  <!-- HTML 태그 내용 -->
  <div id="app">
    <h1>My Todo App!</h1>
    <TodoList></TodoList>
  </div>
</template>

<script>
// 자바스크립트 내용

// import는 무언갈 가져오고 싶을 때 사용
// Product, Comment가 import된 ProductPage 컴포넌트를 import해서 가져온다.
import TodoList from "./components/TodoList.vue";

// 선언부 앞에 export를 붙이면 내보내기가 가능하다.
// export default를 사용하면 해당 모듈엔 개체가 하나만 있다라고 나타낸다.
export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
/* CSS 스타일 내용 */

@import "./assets/css/styles.css";
</style>
