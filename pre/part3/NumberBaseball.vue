<template>
  <!-- 확장자는 Vue이지만 자바스크립트라고 생각하면 된다. -->
  <!-- component를 만든 것. -->
  <div>
    <h1>{{ result }}</h1>
    <!-- v-on:submit는 <form>이 제출될 때 실행.  -->
    <!-- 이벤트가 해야하는 작업을 방지. 원래 form에서 submit가 발생하면 페이지를 다시 불러오게 된다. 그렇게 되면 현재 지니고 있는 상태를 다 잃어버리기 때문에 방지해줌. -->
    <form @submit.prevent="onSubButton">
      <!-- input에 입력하면 문자다. -->
      <!-- ref는 html 작성할 때 id를 입력하는 것처럼, dom에 이름을 다는 방법이다. -->
      <!-- maxlength은 입력할 수 있는 수를 말한다. -->
      <input ref="answer" v-model="value" maxlength="4" />
      <!-- submit은 서버로 폼의 내용을 전송한다. -->
      <button type="submit">입력</button>
    </form>
    <div>시도: {{ tries.length }}</div>
    <ul>
      <!-- v가 앞에 붙으면 vue가 통제하는 속성 -->
      <li v-for="(t, index) in tries" :key="index">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
// 랜덤으로 4개의 숫자를 뽑기.
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

// export default에 담긴 객체들을 main.js에서 import해서 가져온다.
export default {
  data() {
    return {
      answer: getNumbers(), // ex) [1,3,4,5]
      tries: [], // 시도 숫자
      value: "", // 입력 값
      result: "", // 결과
    };
  },
  methods: {
    // this는 생략하면 안된다. this라는게 각 객체를 말하기 때문에 data, methos에 접근하려면 this가 필요하다.
    onSubButton() {
      console.log(this.answer);
      // 내가 입력한 값과 랜덤의 값과 일치하다면
      // 문자열 join() 함수는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
      // input으로 입력받았기 때문에 문자열이고 answer은 배열이기때문에 answer을 문자열로 변경해줘야한다.
      if (this.value === this.answer.join("")) {
        this.tries.push({
          try: this.value,
          result: "홈런",
        });
        this.result = "홈런";
        this.value = "";
        this.answer = getNumbers();
        this.tries = [];
        this.$refs.answer.focus();
      } else {
        // 정답 틀렸을 때
        if (this.tries.length >= 9) {
          // 10번째 시도했을 때
          this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join(
            ","
          )} 었습니다`;
          alert("게임을 다시 시작합니다.");
          this.value = "";
          this.answer = getNumbers();
          this.tries = [];
          this.$refs.answer.focus();
        }
        // 언제 data로 쓰고 변수로 쓰는지 잘 모르겠다면 화면에 보여지는 것을 data로 넣고 계산식으로 쓰이고 화면과는 관련이 없다면 변수로 쓰인다.
        let strike = 0;
        let ball = 0;
        const answerArray = this.value.split("").map((v) => parseInt(v)); // 문자열을 숫자 배열로 바꾸는 코드.
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.answer[i]) {
            // 숫자 자릿수까지 모두 맞았을 때
            strike++;
          } else if (this.answer.includes(answerArray[i])) {
            // includes는 true/false로 있다, 없다를 직관적으로 리턴. 배열이 특정 요소를 포함하고 있는지 판별.
            // 숫자만 정답
            ball++;
          }
        }
        // tries 배열 안에 push해준다. 배열 끝에 아이템을 추가.
        this.tries.push({
          try: this.value,
          result: `${strike} 스트라이크, ${ball} 볼입니다.`,
        });
        this.value = "";
        this.$refs.answer.focus(); // 커서 위치를 ref 태그 네임인 answer로 옮겨주기.
      }
    },
  },
};
</script>
<style>
</style>