const none_props1 = new Vue({
    el: '#none_props1',
    data: {
        test : 1234
    },
    components: {
        'bs-data-input': {
            template: `<p class="btn-group">
                            <button type='button' class='btn btn-default'>test!!!</button>
                            <ul class='dropdown-menu' role='menu'>
                                <li>aaa</li>
                                <li>bbb</li>
                            </ul>
                        </p>`
        }
    }
});

const none_props2 = new Vue({
    el: '#none_props2',
    data: function() {
        return {
            total: 0
        }
    },
    methods: {
        incrementTotal: function() {
            this.total = this.total + 1;
        },
        onClick: function() {
            console.log('onClick');
        }
    },
    components: {
        display : {
            props: ['total'],
            template: '<p> {{total}} </p>'
        },
        'button-counter': {
            data: function() {
                return {
                    count : 0
                }
            },
            template: `<button @click="incrementCounter"> {{count}} </button>`,
            methods: {
                incrementCounter: function() {
                    console.log('test');
                    this.count = this.count + 1;
                    this.$emit('increment');
                }
            }
        }
    }
});

const none_props3 = new Vue({
    el: '#none_props3',
    data: function() {
        return {
            bar: 0
        }
    },
    methods: {
        onClick: function() {
            console.log('bar', this.bar);
        }
    },
    components: {
        comp : {
            props: ['foo'],
            template: `<button @click='onClick'>{{ foo }}</button>`,
            methods: {
                onClick: function() {
                    // this.foo = this.foo +1
                    this.$emit('update:foo', this.foo + 1);
                    console.log('foo', this.foo);
                }
            }
        }
    }
});

const none_props4 = new Vue({
    el: '#none_props4',
    data: function() {
        return {
            price: 25
        }
    },
    components: {
        'currency-input' : {
            template: `<span>
                            <input ref='input' v-bind:value='value' v-on:input='updateValue($event.target.value)'>
                       </span>`,
            props: {
                value: {
                    type: Number,
                    default: 0
                }
            },
            methods: {
                updateValue: function (value) {
                    console.log('start!!!');
                    const formattedValue = value
                                        .trim() // 공백을 제거합니다.
                                        .slice(0, value.indexOf('.') === -1 ? value.length : value.indexOf('.') + 3); // 소수 자릿수 2자리로 줄입니다
                    // 값이 아직 정규화 되지 않은 경우
                    // 이를 수동으로 재정의하여 조건을 충족시킵니다.
                    if (formattedValue !== value) {
                        this.$refs.input.value = formattedValue;
                        console.log(this.$refs.input.value);
                    }

                    // 입력 이벤트를 통해 숫자 값을 내보냅니다.
                    const resultValue = Number(formattedValue);

                    if(resultValue) {
                        this.$emit('input', resultValue);
                    } else {
                        this.$refs.input.value = 0;
                    }
                }
            }
        }
    }
});

const none_props5 = new Vue({
    el: '#none_props5',
    data: function() {
        return {
            foo: false
        }
    },
    components: {
        'my-checkbox': {
            model:{
                prop: 'checked',
                event: 'change'
            },
            props: {
                checked: Boolean,
                value: ''
            },
            template: `<p>
                        <input type="checkbox" @click='onClick'>
                        <label for="checkbox">{{ value }}</label>
                        </p>`,
            methods: {
                onClick: function() {
                    console.log(this);
                }
            }
        }
    }
});

const none_props6 = new Vue({
    el: '#none_props6',
    components: {
        'bustest1' : {
            data: function(){
                return {
                    count: 1
                }
            },
            template: `<p>{{count}}<button @click="onClick1">+</button></p>`,
            methods: {
                onClick1: function() {
                    this.$emit('onClick1',this.count);
                    this.count += 1;
                }
            }
        },
        'bustest2' : {
            data: function(){
                return {
                    count: 0
                }
            },
            template: `<p>{{count}}<button @click="onClick2">+</button></p>`,
            methods: {
                onClick2: function() {
                    this.count += 1;
                }
            }
        }
    }
});

none_props6.$children[0].$on('onClick1', function(id){
    console.log(id);
    none_props6.$children[1].$data.count = id;
});