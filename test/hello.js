let app = new Vue({
    el: '#app',
    data: {
        message: {  //객체
            name: "agunacoco",
            age: 30
        },
        address: 'https://naver.com', //주소
        todos: [
            { name: 'agunacoco' },
            { name: 'kunahyun' },
            { name: 'Guna' }
        ],
        user: {
            title: "저를 소개합니다!",
            userId: 0416,
            userName: 'agunacoco',
            email: 'agunaco3994@gmail'
        },
        counter1: 0,
        counter2: 0,
        paratest: {
            message: 'Today is 72day',
            users: [{ name: "Jang" }, { name: "Guna" }]
        },
        comment1: '',
        comment2: '',
        checktest: {
            value: true,
            values: [] // 배열에 체크된 체크박스의 value 값이 저장된다.
        },
        lazytest: {
            value: 'hello',
            value2: 'hello'
        }

    },
    methods: {
        addCounter() {
            this.counter2 += 1
        },
        subCounter() {
            this.counter2 -= 1
        },
        sayHi(name) {
            this.paratest.message = 'Hi, ' + name
        }
    }
});