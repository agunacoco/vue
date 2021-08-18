<template>
  <div>
    <div>{{ this.$store.state.turn }}님의 턴입니다.</div>
    <table-component :table-data="tableData"></table-component>
    <div v-if="winner">{{ this.$store.state.winner }}님의 승리!</div>
  </div>
</template>
<script>
import store from "./store";
import TableComponent from "./TableComponent.vue";

export default {
  store,
  components: {
    TableComponent,
  },
  data() {
    return {
      tableData: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      turn: "O",
      winner: "",
    };
  },
  methods: {
    onClickTd(rowIndex, cellIndex) {
      // 최상위 파일의 tableData의 현재 몇번째 줄의 몇번째 칸에 접근해서 현재 턴을 넣은다.
      // 배열이나 객체의 값을 인덱스를 사용해서 값을 바꾸면 실제로 값을 바뀌지만 보여주는 화면상은 바뀌지 않는다.
      // 배열에서 인덱스를 사용할 때는 반드시 Vue.set을 사용해준다.
    },
  },
};
</script>