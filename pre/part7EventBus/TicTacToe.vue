<template>
  <div>
    <div>{{ turn }}님의 턴입니다.</div>
    <table-component :table-data="tableData"></table-component>
    <div v-if="winner">{{ winner }}님의 승리!</div>
  </div>
</template>
<script>
import TableComponent from "./TableComponent.vue";
import EventBus from "./EventBus";

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
    onClickTd(rowIndex, cellIndex) {
      // 최상위 파일의 tableData의 현재 몇번째 줄의 몇번째 칸에 접근해서 현재 턴을 넣은다.
      // 배열이나 객체의 값을 인덱스를 사용해서 값을 바꾸면 실제로 값을 바뀌지만 보여주는 화면상은 바뀌지 않는다.
      // 배열에서 인덱스를 사용할 때는 반드시 Vue.set을 사용해준다.
      this.$set(this.tableData[rowIndex], cellIndex, this.turn);
      let win = false;
      if (
        this.tableData[rowIndex][0] === this.turn &&
        this.tableData[rowIndex][1] === this.turn &&
        this.tableData[rowIndex][2] === this.turn
      ) {
        win = true;
      }
      if (
        this.tableData[0][cellIndex] === this.turn &&
        this.tableData[1][cellIndex] === this.turn &&
        this.tableData[2][cellIndex] === this.turn
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
  created() {
    // 장점은 자식 컴포넌트에서 부모의 데이터에 접근하려면 this.$root.$data를 해야하는데
    // 최상위 파일에서 이벤트버스를 이용해 클릭이벤트를 등록하면 바로 데이터들을 이용할 수 있다.
    // 이벤트만 가능.
    // 중앙통제가 되서 간단해서 찾기가 쉽지만, 중앙 코드가 너무 늘어난다.
    EventBus.$on("clickTd", this.onClickTd);
  },
};
</script>