<template>
  <tr>
    <td-component
      v-for="(cellData, i) in rowData"
      :key="i"
      :cell-data="cellData"
      :cell-index="i"
      :row-index="rowIndex"
    ></td-component>
  </tr>
</template>
<script>
import TdComponent from "./TdComponent.vue";
export default {
  props: {
    rowData: Array,
    rowIndex: Number,
  },
  components: {
    TdComponent,
  },
  data() {
    return {
      ex: "내가 니 애비다",
    };
  },
};
</script>