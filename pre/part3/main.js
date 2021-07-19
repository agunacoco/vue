// main.js 파일을 자바스크립트라고 생각하기. 
import Vue from "vue";
import NumberBaseBall from './NumberBaseball.vue'; //NumberBaseball.vue가 main.js에 연결된다.

new Vue(NumberBaseBall).$mount('#root');  // 뷰 인스턴스를 만든 것. div 태그에 id를 가져오는 el 역할. 

