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
      <!-- v-show는 if와 같이 true면 실행, false면 실행하지 않는다.  -->
      <!-- 그렇다면 if와 다른 점은 v-show는 태그를 display해서 보이지 않게 한거고 if는 그냥 태그자체를 보이지 않게 했다 -->
      <div v-show="result.length">
        <!-- result 배열에 저장된 값을 다 더할때는 reduce를 사용한다. 평균 시간 구하기 -->
        평균 시간: {{ average }}ms
        <button @click="onReset">리셋</button>
      </div>
    </div>
  </div>
</template>

<script>
let startTime = 0; // 화면이 보여진 시간
let endTime = 0; // 바뀐 화면을 클릭한 시간
let timeout = null;

// export default에 담긴 객체들을 main.js에서 import해서 가져온다.
export default {
  data() {
    return {
      result: [], // 반응 속도가 들어간다.
      state: "waiting",
      message: "클릭해서 시작하세요.",
    };
  },
  methods: {
    onReset() {
      this.message = "클릭해서 시작하세요.";
      this.result = [];
      this.state = "waiting";
    },
    onClickScreen() {
      if (this.state === "waiting") {
        this.state = "ready";
        this.message = "초록색이 되면 클릭하세요.";
        // setTimeout(함수, 시간) 함수는 일정 시간 후 함수를 실행한다.
        timeout = setTimeout(() => {
          this.state = "now";
          this.message = "지금 클릭하세요";
          startTime = new Date(); // 화면이 바뀐 시작 시간.
        }, Math.floor(Math.random() * 1000) + 2000); // 2~3초
      } else if (this.state === "ready") {
        // 화면이 빨간색인데 눌렀을 때
        clearTimeout(timeout); // 성급하게 눌렀을 때는 기존의 timeout 값을 삭제해준다.
        this.state = "waiting";
        this.message = "너무 성급하시군요! 초록색이 된 후에 클릭하세요.";
      } else if (this.state === "now") {
        endTime = new Date(); // 초록색 버튼을 누른 현재 시간.
        this.state = "waiting";
        this.message = "클릭해서 시작하세요";
        this.result.push(endTime - startTime); // 반응 속도
      }
    },
  },
  computed: {
    // 데이터를 계산해야하는 부분이 있다면 computed에 넣는 것이 좋다.
    // 캐싱이 된다.
    // 일반 데이터를 가공해서 쓸 때 computed를 쓴다.
    average() {
      // reduce의 (a, c)는 accumulator 누산기이고 currentValue로 처리할 현재 요소다.
      // 누산기는 c 현재 값을 누적한다.
      // 그리고 두번째 인자 0은 그냥 더할 숫자다.
      return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
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