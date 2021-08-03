<template>
  <div id="app">
    <h1>Reviews</h1>
    <ul>
      <li v-for="c in comments" :key="c.id">
        <p>{{ c.body }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
// axios는 브라우저, node.js를 위한 HTTP비동기 통신 라이브러리다.
// 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 사용
import axios from "axios";

export default {
  name: "Reviews",
  data() {
    return { comments: [] };
  },
  mounted() {
    axios
      // get: 입력한 url에 존재하는 자원에 요청을 한다.
      // /api/comments에서 데이터를 불러온다.
      // /api/comments은 vue.config.js에서 설정한 proxy이다.
      .get("/api/comments")
      // 응답(성공)
      // 불러온 데이터는 .then()의 res에 담아서 처리하는 방식이다.
      .then((res) => {
        console.log(res);
        this.comments = res.data;
      })
      // 응답(실패)
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>