<template>
  <div>
    <!-- class랑 style은 객체형식으로 사용 가능. -->
    <div id="computer" :style="{}"></div>
    <div>
      <!-- methods에 인자를 전달할 수 있다. -->
      <button @click="onClick('가위')">가위</button>
      <button @click="onClick('바위')">바위</button>
      <button @click="onClick('보')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>현재 {{ score }}점</div>
  </div>
</template>
<script>
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};
export default {
  data() {
    return {
      score: 0,
      result: "",
      imageCode: rspCoords.바위,
    };
  },
  methods: {
    onClick(choice) {},
  },
  computed: {
    computedStyle() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imageCode} 0 0`,
      };
    },
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