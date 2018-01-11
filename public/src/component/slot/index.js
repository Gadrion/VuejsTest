const slot1 = new Vue({
    el: '#slot1',
    data: function() {
        return {
            message: 'parrent'
        };
    },
    components: {
        'child-component' : {
            data: function() {
                return {
                    message: 'child'
                }
            },
            template : `<p> child! </p>`
        }
    }
});

const slot2 = new Vue({
    el: '#slot2',
    data: function() {
        return {
            someChildProperty: true
        };
    },
    components: {
        'child-component': {
            props: ['someChildProperty'],
            template: '<p v-show="someChildProperty">Child</p>',
            data: function () {
                return {
                    // someChildProperty: true
                };
            }
        }
    }
});

const slot3 = new Vue({
    el: '#slot3',
    components: {
        'child': {
            template: `<span>
                            <h2>나는 자식 컴포넌트의 제목입니다</h2>
                            <slot>제공된 컨텐츠가 없는 경우에만 보실 수 있습니다.</slot>
                       </span>`
        }
    }
});

const slot4 = new Vue({
    el: '#slot4',
    components: {
        'app-layout': {
            template: `<div class="container">
                            <header>
                                <slot name="header"></slot>
                            </header>
                            <main>
                                <slot></slot>
                            </main>
                            <footer>
                                <slot name="footer"></slot>
                            </footer>
                        </div>`
        }
    }
});

const slot5 = new Vue({
    el: '#slot5',
    components: {
        'child': {
            template: `<div>
                            <slot text='hello from child'></slot>
                       </div>`
        }
    }
});

const slot6 = new Vue({
    el: '#slot6',
    data: function() {
        return {
            'items': [{text: 'qweqw1'}, {text: 'qweqw2'}, {text: 'qweqw3'}]
        }
    },
    components: {
        'my-awesome-list': {
            props: ['items'],
            template: `<ul>
                            <slot name="item"
                                v-for="item in items"
                                :text="item.text">
                            </slot>
                        </ul>`
        }
    }
});

const slot7 = new Vue({
    el: '#slot7',
    data: function() {
        return {
            arr: [a=1, , c=5]
        }
    }
});

// slot7.$data.arr = [1, ,5];