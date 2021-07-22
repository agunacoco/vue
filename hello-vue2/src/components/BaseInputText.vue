<template>
  <!-- input 태그의 value 속성은 입력 필드의 초깃값을 정의한다. -->
  <!-- v-model 대신 v-on을 사용한 이유 -->
  <!-- v-model은 폼 입력 바인딩 방식 중 하나로 input 태그와 textarea태그 등에서 사용 가능. 양방향 데이터 바인딩으로 내용이 작성하면 해당 내용이 선언한 데이터 값에 바로 적용. -->
  <!-- v-model을 영문 이외에 사용하는 경우 양방향바인딩이 한 박자 늦게 반응하여 마지막 글자가 떨어져나가는 현상이 발생. -->
  <!-- v-on:input으로 한글 입력 오류 해결하기 -->
  <!-- 데이터에 input태그로 받을 값을 선언한 후 v-bind를 이용하여 해당 선언변수를 value 값으로 연결하는 것. 연결된 value값은 event.target.value를 통해 받아올 수 있다. -->
  <!-- v-bind를 사용했을 경우에 $event.target.value를 사용해 값을 가져와 데이터 값을 변경해준다. -->
  <!-- HTML 태그 속성 값을 데이터바이딩하고 싶을 때 v-bind를 사용한다. 사용 법: v-bind:태그 속성="바인딩할데이터명" -->
  <input type="text" class="input" :value="value" v-on="listeners" />
</template>
<script>
export default {
  props: {
    // 부모는 props를 통해 자식에게 데이터를 전달한다.
    // value명은 그대로 사용해야한다. 변경하면 안된다.
    value: { type: String, default: "" },
  },
  computed: {
    listeners() {
      return {
        // ...?
        ...this.$listeners,
        // 자식은 events를 통해 부모에게 메세지를 보낸다.
        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #32485f;
}
</style>
 
