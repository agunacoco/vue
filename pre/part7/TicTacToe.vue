<template>
  <div>
    <table-component :table-data="tableData"></table-component>
    <div>{{ turn }}님의 턴입니다.</div>
    <div v-if="winner">{{ winner }}님의 승리를 축하합니다</div>
  </div>
</template>
<script>
import Vue from "vue";
import TableComponent from "./TableComponent.vue";

export default {
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
    onChangeData() {
      // this.tableData[1][0] = 'X';은 실행되지 않는다.
      this.$set(this.tableData[1], 0, "X"); // Vue.set()과 동일
    },
  },
};
</script>