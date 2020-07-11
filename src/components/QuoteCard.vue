<template>
  <div class="quote-card">{{ quote }}</div>
</template>

<script>
export default {
  props: ["quote"]
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
</style>