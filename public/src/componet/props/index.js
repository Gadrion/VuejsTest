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

// Vue.component('todo-item', {
//     props: ['text', 'isComplete'],
//     template: '<span> text = {{ text }}, isComplete = {{isComplete}}</span>'
// })

// const todo = {
//     text: 'Learn Vue',
//     isComplete: false
// };

// const props4 = new Vue({
//     el: '#props4',
//     data: function(){
//         return todo;
//     }
// });

Vue.component('comp', {
    props: ['someProp'],
    template: '<span> {{ typeof someProp }}</span>'
})

const props5 = new Vue({
    el: '#props5'
});