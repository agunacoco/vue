<template>
  <div>
    <!-- class랑 style은 객체형식으로 사용 가능. -->
    <div id="computer" :style="computedStyle"></div>
    <div>
      <!-- methods에 인자를 전달할 수 있다. -->
      <button @click="onClick('바위')">바위</button>
      <button @click="onClick('가위')">가위</button>
      <button @click="onClick('보')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>현재 {{ score }}점</div>
    <!-- vue 인스턴스는 크게 생성(create)되고, dom에 부착(mount)되고, 업데이트(update)되며, 없어지는(destroyk) 4가지 과정을 거친다. -->
    <lifecycle-example v-if="true" />
  </div>
</template>
<script>
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};
const scores = {
  // 객체는 배열처럼 여러 개의 값을 가지고 있다.
  가위: 1,
  바위: 0,
  보: -1,
};
const computerChoice = (imageCode) => {
  // Object.entries()를 하면 객체가 가지고 있는 모든 프로퍼티를 키와 값 쌍으로 배열 형태로 반환하여 준다.
  // find는 함수의 조건을 만족하는 첫번째 요소 값을 반환
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imageCode;
  })[0];
};
let interval = 0;

export default {
  data() {
    return {
      score: 0,
      result: "",
      imageCode: rspCoords.바위,
    };
  },
  methods: {
    // 중복되는 것을 메소드로 만들기도 한다.

    changeHandle() {
      // interval이 중복이 되서 methods를 만들어준다.
      interval = setInterval(() => {
        if (this.imageCode === rspCoords.바위) {
          this.imageCode = rspCoords.가위;
        } else if (this.imageCode === rspCoords.가위) {
          this.imageCode = rspCoords.보;
        } else if (this.imageCode === rspCoords.보) {
          this.imageCode = rspCoords.바위;
        }
      }, 80);
    },
    onClick(choice) {
      // 클릭했을때 interval을 멈춘다.
      clearInterval(interval);
      const myScore = scores[choice];
      // 현재 멈춘 imageCoord의 이미지를 computerChoice로 보낸다.
      const cpuScore = scores[computerChoice(this.imageCode)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        this.result = "비겼습니다.";
      } else if ([-1, 2].includes(diff)) {
        // includes()는 배열이 특정 요소를 포함하고 있는지를 판별.
        // 배열 [-1, 2]에서 diff가 포함되어있으면 true.
        this.result = "이겼습니다.";
        this.score += 1;
      } else {
        this.result = "졌습니다.";
        this.score -= 1;
      }
      setTimeout(() => {
        this.changeHandle();
      }, 1000);
    },
  },
  computed: {
    computedStyle() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imageCode} 0`,
      };
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    // 처음 컴포넌트가 보여지게 될 때. 화면에 나타나기 전.
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    // 화면에 나타난 후. 화면 작업을 할 때는 mounted에서.
    console.log("mounted");
    // setTimeout은 일정 시간이 지난 후에 함수를 실행.
    // setInterval은 일정 시간 간격을 두고 함수를 실행하는 방법.
    // clearInterval(), clearTimeout() 함수를 사용해 중지할 수 있다. 실행중인 작업을 중지시키는 것이 아니라 지정된 작업을 모두 끝낸 다음에 중지되는 것이다.
    this.changeHandle();
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    // 데이터의 값이 바껴서 화면이 다시 그려질 때 바뀔 때
    console.log("updated");
  },
  beforeDestroy() {
    // 컴포넌트가 화면에서 사라졌는데도 interval이 계속 돌아가고 있으면 메모리 낭비기때문에 destroy에서 처리해준다.
    console.log("beforeDestroy");
    clearInterval(interval);
  },
  destroyed() {
    console.log("destroted");
  },
};
</script>
<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>