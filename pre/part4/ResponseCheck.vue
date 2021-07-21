<template>
  <div>
    <!-- 색 띄우는 화면, 클릭하는 화면 -->

    <!-- state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다. -->
    <!-- 클래스형 컴포넌트에서 사용. -->
    <div id="screen" v-bind:class="state" @click="onClickScreen">
      {{ message }}
    </div>
    <div>
      <!-- 평균 시간, 리셋 버튼 -->
      <div>평균 시간: {{}}</div>
      <button @click="onReset">리셋</button>
    </div>
  </div>
</template>

<script>
// export default에 담긴 객체들을 main.js에서 import해서 가져온다.
export default {
  data() {
    return {
      result: [],
      state: "waiting",
      message: "클릭해서 시작하세요.",
    };
  },
  methods: {
    onReset() {},
    onClickScreen() {
      if (this.state === "waiting") {
        this.state = "ready";
      } else if (this.state === "ready") {
        this.state = "now";
      } else if (this.state === "now") {
        this.state = "waiting";
      }
    },
  },
};
</script>


<style scoped>
/* css의 특성이 한번 정의한 것을 공유한다. */
/* 다른 컴포넌트에서도 id="screen"하면 공유가 가능하다. */
/* 이 컴포넌트 안에서만 유효하길 원한다면 scoped를 적으면 된다. 이 컴포넌트 안에서만 유효하다. */

#screen {
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
}
#screen.waiting {
  background-color: aqua;
}
#screen.ready {
  background-color: red;
  color: white;
}
#screen.now {
  background-color: greenyellow;
}
</style>