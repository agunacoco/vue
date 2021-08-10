// main.js 파일을 자바스크립트라고 생각하기. 
import Vue from "vue";

// NumberBaseBall.vue에 있는 export default에 담긴 객체들을 main.js에서 import해서 가져온다.
//import NumberBaseBall from './NumberBaseball.vue'; //NumberBaseball.vue가 main.js에 연결된다.
import NumberBaseball from './NumberBaseball.vue';

new Vue(NumberBaseball).$mount('#root');  // 뷰 인스턴스를 만든 것. div 태그에 id를 가져오는 el 역할. 

