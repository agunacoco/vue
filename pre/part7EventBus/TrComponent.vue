<template>
  <tr>
    <td-component
      v-for="(cellData, i) in rowData"
      :key="i"
      :cellData="cellData"
      :cellIndex="i"
      :rowIndex="rowIndex"
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
};
</script>