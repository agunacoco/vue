<template>
  <div>
    <div>당첨 숫자</div>
    <div id="결과창">
      <lotto-ball
        v-for="(ball, i) in winBalls"
        :key="i"
        :number="ball"
      ></lotto-ball>
    </div>
    <div>보너스!</div>
    <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
    <button v-if="redo" @click="onClick">한번 더!</button>
  </div>
</template>
<script>
// LottoGenerator에서 숫자를 뽑고 그 숫자들을 LottoBall로 props를 이용해서 전달.
import LottoBall from "./LottoBall.vue";

function getWinNumbers() {
  console.log("getWinNumbers");
  // Array() 함수를 이용해 배열 45개를 만든다.
  // fill은 배열의 시작 인덱스부터 끝 인덱스까지 하나의 값으로 채워주는 메서드다. 원본 배열을 직접 변경, 리턴 값은 변형된 배열이다.
  // 반복을 하며 데이터를 가공해 작업을 수행해야할 때 for문 foreach문도 있지만 map()도 있다.
  // map()은 시작 인덱스부터 마지막 인덱스까지 순회하며 배열 내의 모든 요소 각각에 대해서 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환.
  // map()함수는 모든 배열의 값에 function를 실행한다.
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);

  const shuffle = [];
  // for문은 자신이 정확하게 몇번을 반복해야하는지 알 때. while문은 잘모를때, 기준 값이 계속 바뀔때.
  while (candidate.length > 0) {
    shuffle.push(
      // random()은 0부터 1사이의 값이 소숫점이 붙어서 무작위로 출력된다.
      // 그래서 뒤에 candidate.length만큼의 수를 뽑고 소수점을 제거하기 위해서 floor()를 사용.
      // 0~44가 나온다.
      // floor는 2.5면 2를 반환. -2.5면 -3을 반환한다.
      // splice(시작점, 제거할 요수의 수)를 하면 반환값으로 제거한 요소를 담은 배열이 반환된다.
      // splice는 랜덤의 숫자에서 하나를 뽑는다.
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bounsNumber = shuffle[shuffle.length - 1];
  // slice는 배열을 자르는 것. 0번째 자리부터 6번째 자리까지. 근데 6번째 자리는 포함안됨. 6개
  // sort는 정렬하는 것이다. sort의 (p,c)는 현재 위치에 있는 값이다.
  // 예를 들면 [11, 23, 33, 2, 4]이면 11, 23을 비교하는데 p인 11에서 c인 23을 뺀다.
  // 그러면 -12가 되는데 이때 0보다 작기 때문에 두숫자의 위치를 바꾸지 않는다. 만약 0보다 크면 두숫자의 위치를 바꾼다. 이런식으로 오름차순으로 정렬한다.
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  // ...전개 연산자는 배열 또는 객체를 하나하나 넘기는 용도로 사용한다.
  // winNumbers 배열에 담긴 숫자를 하나하나 넘겨서
  // 예를 들면 winNumbers = [12, 34, 45, 3, 4]이라면 ...winNumbers를 하면
  // return [ 12, 34, 45, 3, 4, bonusNumber]처럼 된다.
  return [...winNumbers, bounsNumber];
}
const timeouts = [];
export default {
  components: {
    "lotto-ball": LottoBall,
  },
  data() {
    return {
      winNumbers: getWinNumbers(), // 뽑은 숫자.
      redo: false,
      winBalls: [], // 뽑은 숫자를 하나하나 볼에 띄우기.
      bonus: null,
    };
  },
  methods: {
    onClick() {
      this.winNumbers = getWinNumbers();
      this.winBalls = [];
      this.bonus = null;
      this.redo = false;
    },
    showBall() {
      for (let i = 0; i < this.winNumbers.length - 1; i++) {
        timeouts[i] = setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 1000);
      }
      timeouts[6] = setTimeout(() => {
        this.bonus = this.winNumbers[6];
        this.redo = true;
      }, 7000);
    },
  },
  mounted() {
    this.showBall();
  },
  beforeDestroy() {
    timeouts.forEach((t) => {
      clearTimeout(t);
    });
  },
  watch: {
    // 어떤 값이 바꼈는지 감시하는 것.
    // val: 현재 값, oldval: 이전 값
    winBalls(val, oldval) {
      if (val.length === 0) {
        this.showBall();
      }
    },
  },
};
</script>