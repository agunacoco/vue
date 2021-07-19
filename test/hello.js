// Component는 new Vue()앞에 정의.
Vue.component('agunacoco', { // component 전역 등록
    props: ['name'], //매개변수 역할, 데이터를 받아온다. 상위 컴포넌트의 데이터를 하위 컴포넌트로 전달.
    template: '<p>{{message}}</p>', //필수 요소. 최상위 태그는 하나만 있어야한다. 그 안에는 여러 개 있어도 상관없다.
    data: function () { //객체가 아닌 함수인 이유는 html에서 호출될 때마다 돌아가야하니깐 함수로 표현.
        return { message: 'hello!, ' + this.name }
    }
});

Vue.component('add', {
    template: '<button @click="add">{{ count }}</button>',
    data() {
        return { count: 0 }
    },
    methods: {
        add() {
            this.count += 1
            //this.$parent.$data.totalCount += 1
            this.$emit('event-add', 1);  //
        }
    }
});

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
            userId: "aaa0416",
            userName: 'agunacoco',
            email: 'agunaco3994@gmail',
            age: 20
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
        },
        message: '',
        totalCount: 0,
    },
    methods: { // 함수, html에서 함수를 호출할때는 뒤에 ()를 써야한다.
        addCounter() {
            this.counter2 += 1
        },
        subCounter() {
            this.counter2 -= 1
        },
        sayHi(name) {
            this.paratest.message = 'Hi, ' + name
        },
        updateTotal(count) {
            this.totalCount += count
        }
    },
    // method와 computed의 차이는 캐싱.
    // computed는 캐싱된 값으로 사용하게 된다. 계산된 값을 리턴한다.
    computed: { // 중복제거 효과도 있다. 
        user_info() {
            return this.user.userId + '(' + this.user.userName + ')'
        },
        age_message() {
            let str = "Adult"
            if (this.user.age < 20) {
                str = 'Not Adult'
            }
            return str
        }
    },
    components: {  // component 지역등록
        'aguna': {
            template: '<p>This is local component</p>'
        }
    }
});

