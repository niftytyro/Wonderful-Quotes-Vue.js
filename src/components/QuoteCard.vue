<template>
  <div class="quote-card" @click="removeQuote">{{ quote }}</div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  props: ["quote", "index"],
  methods: {
    removeQuote() {
      eventBus.$emit("remove", this.index);
    }
  }
};
</script>

<style scoped>
.quote-card {
  min-width: 15%;
  height: min-content;
  text-align: center;
  border: 1px solid #444;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
}
.quote-card:hover {
  background: #ff333366;
  border: 1px solid #aa0000;
  cursor: pointer;
}
</style>