const componentsList = ['home', 'posts', 'archive'];

const dynamic1 = new Vue({
    el: '#dynamic1',
    data: function() {
        return {
            currentView: 'home',
            count: 0
        }
    },
    methods: {
        onClick: function () {
            this.count += 1;
            this.count = this.count % 3;
            this.currentView = componentsList[this.count];
        }
    },
    components: {
        home: {
            template: `<p>home!!!!!!!!!!!!!!!!!!</p>`
        },
        posts: {
            template: `<p>posts!!!!!!!!!!!!!!!!!!</p>`
        },
        archive: {
            template: `<p>archive!!!!!!!!!!!!!!!!!!</p>`
        }
    }
});