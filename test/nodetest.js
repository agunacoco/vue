const http = require('http')  // 노드를 설치하면 자동으로 http라는 라이브러리가 제공. 
// 노드에서 require은 import라고 생각하면 된다.
// require은 http라는 라이브러리를 

const server = http.createServer((req, res) => { // 웹 서버를 생성.
    res.end('hello') // 응답데이터 요청.
})
server.listen(3000) // 웹서버를 3000번 포트로 실행. 


// HTTP 포로토콜
// hyperText가 html이다. 보통 80번 포트로 들어간다.
// https://shlee0882.tistory.com/107 참고하기
// 일회성. 한번 리턴하면 끝. 새로 요청해야한다.
// 항상 똑같은 응답하는 것은 웹서버라고 한다. 예) html css
// 동적 - 데베 연동해서 동적인 데이터를 응답하는 것을 웹 어플리케이션 서버라고 한다. 예) 아팟치

// Request
// get 조회, post는 신규 회원 등록, put 수정
// 바디부분은 데이터다.
// request안에 클라이언트 정보가 있다. 
// get은 조회하는거니깐 body에 데이터를 넣을 수 없다.
// header에 내가 body에 담아오는게 뭔지.

// Response
// Status Code는 상태 코드
// 웹브라우저가 서버에서 받은 완성된 html을 
// json을 리턴하는게 API서버라고 한다. 

// babel, webpack
// babel은 