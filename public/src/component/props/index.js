Vue.component('child',{
    props: ['message'],
    template: '<span>{{ message }}</span>'
})

const props1 = new Vue({
    el: '#props1'
});

Vue.component('child',{
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
})

const props2 = new Vue({
    el: '#props2'
});

const props3 = new Vue({
    el: '#props3',
    data: function() {
        return {
            parentMsg: ''
        };
    }
});

Vue.component('todo-item', {
    props: ['text','isComplete'],
    template: '<span> text = {{ text }}, isComplete = {{ isComplete }}</span>'
})

const todo = {
    text: 'Learn Vue',
    isComplete: false
};

const props4 = new Vue({
    el: '#props4',
    data: function(){
        return {
            todo
        };
    }
});

Vue.component('comp', {
    props: ['someProp'],
    template: '<span> {{ typeof someProp }}</span>'
})

const props5 = new Vue({
    el: '#props5'
});

const props6 = new Vue({
    el: '#props6',
    data: function () {
        return {
            initalCount: 1
        }
    },
    components: {
        'child': {
            props: ['initalCount'],
            template: `<span>
                        <p>{{count}}</p>
                        <button @click="plus">+</button>
                       </span>`,
            data: function() {
                return { count: this.initalCount };
            },
            methods: {
                plus: function() {
                    console.log(this);
                    console.log('initalCount', this.initalCount);
                    console.log('count', this.count);
                    this.count = this.count + 1;
                    // this.initalcount += 1;
                }
            }
        }
    }
});

const props7 = new Vue({
    el: '#props7',
    data: function() {
        return {
            initSize: '   Vue is Difficult    '
        }
    },
    components: {
        'child': {
            props: ['initSize'],
            template: `<span>
                        <p>{{size}}</p>
                        <button @click="result">normalizedSize</button>
                       </span>`,
            data: function() {
                return { size: this.initSize };
            },
            computed: {
                normalizedSize : function() {
                    console.log('info',typeof this.size);
                    let tempsize = this.size;
                    const reverseSize = tempsize.split("").reverse().join("");
                    console.log('info',reverseSize);
                    return reverseSize;
                }
            },
            methods: {
                result: function (){
                    this.size = this.normalizedSize;
                }
            }
        }
    }
});

Vue.component('example', {
  props: {
    // 기본 타입 확인 (`null` 은 어떤 타입이든 가능하다는 뜻입니다)
    propA: Number,
    // 여러개의 가능한 타입
    propB: [String, Number],
    // 문자열이며 꼭 필요합니다
    propC: {
      type: String,
      required: true
    },
    // 숫자이며 기본 값을 가집니다
    propD: {
      type: Number,
      default: 100
    },
    // 객체/배열의 기본값은 팩토리 함수에서 반환 되어야 합니다.
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 사용자 정의 유효성 검사 가능
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  },
  template: `<span> propA = {{ propA }}, <br>
                    propB = {{ propB }}, <br>
                    propC = {{ propC }}, <br>
                    propD = {{ propD }}, <br>
                    propE = {{ propE }}, <br>
                    propF = {{ propF }}
            </span>`
})

const exampleData = {
    propA : 1,
    propB : 'tttt',
    propC : 'tqwqazz',
    // propD : 0,
    // propE : null,
    propF : 11
}

const props8 = new Vue({
    el: '#props8',
    data: function() {
        return {
            exampleData
        };
    }
});