var app = new Vue({
    el: '#app',
    data: {
        message1: 'Hello Vue!'
    }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    seen: true
  }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message2: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message2 = this.message2.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message3: 'Hello Vue.js!'
    }
})
