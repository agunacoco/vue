<template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>
<script>
import { CLICK_CELL } from "./store";

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
      // mutation을 부를 때는 commit으로 부른다. mutation 이름이 CLICK_CELL인게 실행된다.
      this.$store.commit(CLICK_CELL);

      let win = false;
      if (
        this.tableData[this.rowIndex][0] === this.turn &&
        this.tableData[this.rowIndex][1] === this.turn &&
        this.tableData[this.rowIndex][2] === this.turn
      ) {
        win = true;
      }
      if (
        this.tableData[0][this.cellIndex] === this.turn &&
        this.tableData[1][this.cellIndex] === this.turn &&
        this.tableData[2][this.cellIndex] === this.turn
      ) {
        win = true;
      }
      if (
        this.tableData[0][0] === this.turn &&
        this.tableData[1][1] === this.turn &&
        this.tableData[2][2] === this.turn
      ) {
        win = true;
      }
      if (
        this.tableData[0][2] === this.turn &&
        this.tableData[1][1] === this.turn &&
        this.tableData[2][0] === this.turn
      ) {
        win = true;
      }
      if (win) {
        // 이긴 경우
        this.winner = this.turn;
        this.turn = "O";
        this.tableData = [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ];
      } else {
        let all = true; // all이 true면 무승부라는 뜻
        this.tableData.forEach((row) => {
          // 무승부 검사: 칸이 모두 채워져 있으면
          row.forEach((cell) => {
            if (!cell) {
              all = false;
            }
          });
        });
        if (all) {
          // 무승부
          this.winner = "";
          this.turn = "O";
          this.tableData = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ];
        } else {
          // this.$root.$data는 최상위 파일의 데이터에 접근할 수 있다.
          // 부모의 데이터로 접근하려면 this.$parent.$data
          this.turn = this.turn === "O" ? "X" : "O";
        }
      }
    },
  },
};
</script>