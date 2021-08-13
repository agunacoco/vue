<template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>
<script>
export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
  methods: {
    onClickTd() {
      let rootData = this.$root.$data;
      // 최상위 파일의 tableData의 현재 몇번째 줄의 몇번째 칸에 접근해서 현재 턴을 넣은다.
      // 배열이나 객체의 값을 인덱스를 사용해서 값을 바꾸면 실제로 값을 바뀌지만 보여주는 화면상은 바뀌지 않는다.
      // 배열에서 인덱스를 사용할 때는 반드시 Vue.set을 사용해준다.
      this.$set(
        rootData.tableData[this.rowIndex],
        this.cellIndex,
        this.$root.$data.turn
      );
      let win = false;
      if (
        rootData.tableData[this.rowIndex][0] === rootData.turn &&
        rootData.tableData[this.rowIndex][1] === rootData.turn &&
        rootData.tableData[this.rowIndex][2] === rootData.turn
      ) {
        win = true;
      }
      if (
        rootData.tableData[0][this.cellData] === rootData.turn &&
        rootData.tableData[1][this.cellData] === rootData.turn &&
        rootData.tableData[2][this.cellData] === rootData.turn
      ) {
        win = true;
      }
      if (
        rootData.tableData[0][0] === rootData.turn &&
        rootData.tableData[1][1] === rootData.turn &&
        rootData.tableData[2][2] === rootData.turn
      ) {
        win = true;
      }
      if (
        rootData.tableData[0][2] === rootData.turn &&
        rootData.tableData[1][1] === rootData.turn &&
        rootData.tableData[2][0] === rootData.turn
      ) {
        win = true;
      }
      if (win) {
        // 이긴 경우
        rootData.winner = rootData.turn;
        rootData.turn = "O";
        rootData.tableData = [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ];
      } else {
        let all = true; // all이 true면 무승부라는 뜻
        rootData.tableData.forEach((row) => {
          // 무승부 검사: 칸이 모두 채워져 있으면
          row.forEach((cell) => {
            if (!cell) {
              all = false;
            }
          });
        });
        if (all) {
          // 무승부
          rootData.winner = "";
          rootData.turn = "O";
          rootData.tableData = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ];
        } else {
          // this.$root.$data는 최상위 파일의 데이터에 접근할 수 있다.
          // 부모의 데이터로 접근하려면 this.$parent.$data
          rootData.turn = this.$root.$data.turn === "O" ? "X" : "O";
        }
      }
    },
  },
};
</script>