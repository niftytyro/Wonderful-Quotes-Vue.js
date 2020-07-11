import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {
    'quotes': ['Fucking Enjoy'],
  },
  methods: {
    addQuote(quote) {
      this.quotes.push(quote);
    },
    removeQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  created() {
    this.$on('add', (quote) => {
      if (this.quotes.length < 10) {
        if (quote != '') {
          this.addQuote(quote);
        }
      }
      else {
        alert('Too many QUOTES');
      }
    });
    this.$on('remove', (index) => {
      this.removeQuote(index);
    });
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
