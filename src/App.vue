<template>
  <div id="wrapper">
    <quotes-added></quotes-added>
    <add-quote></add-quote>
    <div class="quotes-grid">
      <quote-card v-for="(data, index) in quotes" :key="data" :quote="data" :index="index"></quote-card>
    </div>
  </div>
</template>

<script>
import quotesAdded from "./components/QuotesAdded.vue";
import addQuote from "./components/AddQuote.vue";
import quoteCard from "./components/QuoteCard.vue";
import { eventBus } from "./main.js";

export default {
  components: {
    "quotes-added": quotesAdded,
    "add-quote": addQuote,
    "quote-card": quoteCard
  },
  data: function() {
    return {
      quotes: eventBus.quotes
    };
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