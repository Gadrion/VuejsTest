Vue.component('my-component',{
    template: '<p>사용자 정의 컴포넌트 입니다!</p>'
})

const child = {
    template: '<p>전역은 아니다</p>'
}

const tutorial1 = new Vue({
    el: '#tutorial1'
});

const tutorial2 = new Vue({
    el: '#tutorial2',
    components: {
        'my-component2': child
    }
});

const tutorial3Template = {
    template: `<tr>
                <td>1</td>
                <td>2</td>
              </tr>`
};

const tutorial3 = new Vue({
    el: '#tutorial3',
    data: function() {
        return {
            td1: 1,
            td2: 2
        };
    },
    // template: tutorial3Template.template
    components: {
        'my-component3': tutorial3Template
    }
});

const tutorial4 = new Vue({
    el:'#tutorial4',
    components: {
        'my-component4': {
            template: '#tutorial4-x-template'
        }
    }

    // template: '#test'
});

Vue.component('my-component5', {
    template:'<span>{{message}}</span>',
    // data: {
    //     message: 'hello'
    // }
    data: function() {
        return {
            message: 'hello'
        };
    }
})

const tutorial5 = new Vue({
    el: '#tutorial5'
});

let data = { counter: 0};

Vue.component('my-component6', {
    template: '<button @click="counter += 1"> {{ counter }} </button>',
    data: function() {
        return data;
    }
})

const tutorial6 = new Vue({
    el: `#tutorial6`
});

Vue.component('my-component7', {
    template: '<button @click="counter += 1"> {{ counter }} </button>',
    data: function() {
        return {
            counter: 0
        };
    }
})

const tutorial7 = new Vue({
    el: `#tutorial7`
});