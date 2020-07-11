<template>
  <div id="wrapper">
    <quotes-added></quotes-added>
    <add-quote></add-quote>
    <div class="quotes-grid">
      <quote-card quote="A quote to Start With."></quote-card>
      <quote-card quote="A quote to Start With.A quote to Start With.A quote to Start With."></quote-card>
      <quote-card quote="A quote to Start With.A quote to Start With.A quote to Start With."></quote-card>
      <quote-card quote="A quote to Start With.A quote to Start With.A quote to Start With."></quote-card>
      <quote-card quote="A quote to Start With."></quote-card>
      <quote-card quote="A quote to Start With."></quote-card>
      <!-- <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>-->
    </div>
  </div>
</template>

<script>
import quotesAdded from "./components/QuotesAdded.vue";
import addQuote from "./components/AddQuote.vue";
import quoteCard from "./components/QuoteCard.vue";
export default {
  components: {
    "quotes-added": quotesAdded,
    "add-quote": addQuote,
    "quote-card": quoteCard
  }
};
</script>

<style scoped>
#wrapper {
  padding: 15px 80px;
}
.quotes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22%, 1fr));
}
</style>