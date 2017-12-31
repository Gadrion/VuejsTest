const tutorial1 = new Vue({
    el: '#tutorial1',
    data: function() {
        return {
            message: ''
        }
    }
    // data: {
    //     message: ''
    // }
});

const tutorial2 = new Vue({
    el: '#tutorial2',
    data: {
        message: ''
    }
});

const tutorial3 = new Vue({
    el: '#tutorial3',
    data: {
        checked: true
    }
});

const tutorial4 = new Vue({
    el: '#tutorial4',
    data: {
        checkedNames: []
    }
});

const tutorial5 = new Vue({
    el: '#tutorial5',
    data: {
        picked: ''
    }
});

const tutorial6 = new Vue({
    el: '#tutorial6',
    data: {
        selected: ''
    }
});

const tutorial7 = new Vue({
    el: '#tutorial7',
    data: {
        selected: []
    }
});

const tutorial8 = new Vue({
    el: '#tutorial8',
    data: {
        selected: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' },
        ]
    }
});