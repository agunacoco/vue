<template>
  <table>
    <tr-component
      v-for="(rowData, i) in tableData"
      :key="i"
      :row-data="rowData"
      :row-index="i"
    />
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
  methods: {},
};
</script>
<style>
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>