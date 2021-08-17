import Vue from 'vue';
import Vuex from 'vuex';
// mutation 함수의 이름을 변수로 설정할 수 있다.
// 앞에 export가 붙으면 모듈이 되는데 다른 파일에서도 사용가능하다.
export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

export default new Vuex.Store({
    state: {  // vue의 data와 비슷
        tableData: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ],
        turn: 'O',
        winner: ''
    },
    mutations: { //  state를 수정할 때 사용. state를 바꿀 때는 mutation을 이용해서 바꾼다. 동기적.
        // mutation이라는 함수를 사용해서 state의 값을 바꾼다.

        // 변수로 설정한 함수이름을 가져올 때는 []대괄호 안에 변수 이름을 넣는다.
        [SET_WINNER](state, winner) {
            state.winner = winner;
        },
        [CLICK_CELL](state, { row, cell }) {
            // vuex에서도 값만 바뀌고 화면은 그대로이기때문에 vue.set을 해주어야한다.
            // vuex에서는 this.$set은 없기 때문에 Vue.set으로 해준다. 
            // Vue.set(object, key, value)
            Vue.set(state.tableData[row], cell, state.turn);
        },
        [CHANGE_TURN](state) {
            state.turn = state.turn === 'O' ? 'X' : 'O'
        },
        [RESET_GAME](state) {
            state.turn = 'O';
            state.tableData = [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
            ]
        },
        [NO_WINNER](state) {
            state.winner = ''
        }
    },
    getters: {//  vue의 computed와 비슷.

    },
    actions: { // 비동기를 사용. 여러 mutation을 연달아 실행할 때.

    }
})