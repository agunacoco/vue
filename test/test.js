Vue.component('add', {
    template: '<button @click="add">{{count}}</button>',
    data: function () {
        return {
            count: 0
        }
    },
    methods: {
        add() {
            this.count += 1;
            this.$emit('event-add', 1);
        }
    },
});

let app = new Vue({
    el: '#app',
    data: {
        totalCount: 0
    },
    methods: {
        updated(count) {
            this.totalCount += count
        },
    }
});