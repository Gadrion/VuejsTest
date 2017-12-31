const binding1 = new Vue({
    el: '#binding1',
    data: {
        a: 't',
        b: 's',
        toggle: ''
    }
});

const binding2 = new Vue({
    el: '#binding2',
    data: {
        a: 'radio pick',
        pick: ''
    }
});

const binding3 = new Vue({
    el: '#binding3',
    data: {
        selected: ''
    },

    methods:{
        changeValue: function(){
            console.log(binding3.selected.number);
        }
    }
});