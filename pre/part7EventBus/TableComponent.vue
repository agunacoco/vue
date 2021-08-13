<template>
  <table>
    <tr-component
      v-for="(rowData, i) in tableData"
      :key="i"
      :row-data="rowData"
      :row-index="i"
    ></tr-component>
  </table>
</template>
<script>
import TrComponent from "./TrComponent.vue";
export default {
  props: {
    tableData: Array,
  },
  components: {
    TrComponent,
  },
};
</script>
<style>
table {
  border-collapse: collapse;
}
td {
  border: 2px solid black;
  width: 70px;
  height: 70px;
  text-align: center;
}
</style>