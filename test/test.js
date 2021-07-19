Vue.component('agunacoco', {
    template: `<div>
                    <h2>글쓰기</h2>
                    <label for="name">작성자</label>
                    <input type="text" v-model="userId">
                    <br>
                    <label for="content">내용</label>
                    <textarea type="text" v-model="content"></textarea>
                    <br>
                    <button @click="addContent">등록</button>
                    <ul>
                        <li v-for="msg in message">
                            <p>{{ msg.userId }}: {{ msg.content }}</p>
                        </li>
                    </ul>
                </div>`,
    data() { //객체가 아닌 함수인 이유는 html에서 호출될 때마다 돌아가야하니깐 함수로 표현.
        return {
            userId: "",
            content: "",
            message: [],
        }
    },
    methods: {
        addContent() {
            const message = {
                userId: this.userId,
                content: this.content
            }
            this.message.unshift(message)
            this.userId = null
            this.content = null
        },
    }
});

let app = new Vue({
    el: '#app',
    data: {
    },
    methods: {
    },
});