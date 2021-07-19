
<template>
  <!-- 확장자는 Vue이지만 자바스크립트라고 생각하면 된다. -->
  <!-- component를 만든 것. -->
  <div>
    <h1>{{ result }}</h1>
    <!-- v-on:submit는 <form>이 제출될 때 실행.  -->
    <form v-on:submit="onSubButton">
      <!-- maxlength은 입력할 수 있는 수를 말한다. -->
      <input v-model="value" maxlength="4" />
      <!-- submit은 서버로 폼의 내용을 전송한다. -->
      <button type="submit">입력</button>
    </form>
    <div>시도: {{}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tries: [], // 시도 숫자
      value: "", // 입력 값
      result: "", // 결과
    };
  },
  methods: {
    onSubButton(e) {
      e.preventDefault(); // 이벤트가 해야하는 작업을 방지. 원래 form에서 submit가 발생하면 페이지를 다시 불러오게 된다. 그렇게 되면 현재 지니고 있는 상태를 다 잃어버리기 때문에 방지해줌.
      this.tries.push(e.target.value); // tries 배열 안에 push해준다. 배열 끝에 아이템을 추가.
      this.value = "";
    },
  },
};
</script>
<style>
</style>