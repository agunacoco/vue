<template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>
<script>
import EventBus from "./EventBus";
export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
  methods: {
    onClickTd() {
      // 이미 값이 있는 칸을 한번더 누르면 return해서 함수 중단해버리기.
      if (this.cellData) return;
      // $emit으로 현재 파일의 데이터 넘기기.
      EventBus.$emit("clickTd", this.rowIndex, this.cellIndex);
    },
  },
};
</script>