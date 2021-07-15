let app = new Vue({
    el: '#app',
    data: {
        age: 20,
        counter: 0,
        message: 'Happy Day 72',
        users: [
            { name: 'agunacoco' },
            { name: 'kunahyun' }
        ],
        comment: ''
    },
    methods: {
        addCounter() {
            this.counter += 1
        },
        subCounter() {
            this.counter -= 1
        },
        sayHi(name) {
            this.message = 'Hi, ' + name
        }
    }
});