<template>
  <div id="wrapper">
    <quotes-added></quotes-added>
    <add-quote></add-quote>
  </div>
</template>

<script>
import quotesAdded from "./components/QuotesAdded.vue";
import addQuote from "./components/AddQuote.vue";
export default {
  components: {
    "quotes-added": quotesAdded,
    "add-quote": addQuote
  }
};
</script>

<style scoped>
#wrapper {
  padding: 60px 80px;
}
</style>