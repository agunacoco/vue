// 모든화면에 공통적으로 쓰이는 데이터를 저장

// 컴포넌트 관계에서 자식 컴포넌트는 부모 컴포넌트의 state를 직접 변경할 수 없다.
// 만약 자식에서 부모의 state를 변경하려면 일단 이벤트 리스너를 자식컴포넌트에게 전달해준 후, $emit를 통해서 부모 컴보넌트의 함수를 실행 시켜 변경해주어야한다.
// 하지만 이러한 구조는 인자를 계속 넘겨주고 불필요한 코드가 반복적으로 생긴다.
// 이러한 부분을 state가 해결.
// state는 어플리케이션의 기본적인 data
// mutations는 상태의 동기적 변이를 담당, vuex 저장소에서 state를 변경할 수 있는 유일한 방법.
// actions은 비동기적 작업이 포함되어 있으며, 변이에 대해 mutations에 commit을 한다.
// action은 mutations에 commit을 통해 state를 변경.

import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: { // vuex에는 state라는 하나의 데이터 저장소. 하나의 object형태로 관리.
        // 컴포넌트에서 사용할때는 computed를 통해 가져오면 된다. 
        userId: 'agunacoco',
        reviews: []
    },
    mutations: { // 단순 변경되는 값은 mutations에 저장, state 자체를 변경하는 메소드.
        // mutations의 함수는 동기적이다.(특정코드를 완료한 이후 아래줄의 코드 수행)
        //mutations은 직접 호출X, commit을 이용해 변경. 
        // 함수의 첫번째 인자는 state, 두번째 인자는 commit으로 전달받는 값.
        // methods에 등록.
        updateUserId(state, newId) {
            state.userId = newId;
        },
        updateReviews(state, reviews) {
            state.review = reviews
        }
    },
    actions: {
        // 비동기적 로직을 정의.
        // dispatch로 호출.
        getReviews({ commit }) {
            axios.get('/api/comments')
                .then(response => {
                    commit('updateReviews', response.data)

                })
                .catch(err => {
                    console.log(err)
                })
        }

    },
    getters: { // state를 computed와 같이 이용할 수 있게 도움주는 함수.
        // 여러 곳에서 반복해서 사용해야한다면 코드를 한곳으로 모을 필요성이 있을 때 이 메소드를 이용하면 좋다.
        // state는 root state에 접근이 가능.
        reviewCount(state, /*getters*/) {
            return state.reviews.length
        }
    }
});