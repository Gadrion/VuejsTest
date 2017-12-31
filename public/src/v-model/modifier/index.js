const modifier1 = new Vue({
    el: '#modifier1',
    data: {
        msg: ''
    }
});

const modifier2 = new Vue({
    el: '#modifier2',
    data: {
        age: ''
    },
    methods: {
        checkType : function() {
            console.log("modifier2 type Check",typeof modifier2.age);
        }
    }
});

const modifier3 = new Vue({
    el: '#modifier3',
    data: {
        msg: ''
    }
});