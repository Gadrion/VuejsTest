const app = new Vue({
    el: '#app',
    data: {
        message: `Hello Vue.js! I'm GD`
    }
})

const app2 = new Vue({
    el: '#app-2',
    data: {
        message: `이페이지는 ${new Date()} 에 로드 되었다?`
    }
})

const app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

const app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'JavaScript 배우기' },
            { text: 'vue 배우기' },
            { text: '뭐라도 만들어 보자' }
        ]
    }
})

const app5 = new Vue({
    el: '#app-5',
    data: {
        message: '안녕하세요!!! 테스트 중입니다.'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})