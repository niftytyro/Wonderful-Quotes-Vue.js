<template>
  <div class="quotes-added-wrapper">
    <h2>Quotes Added</h2>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        aria-valuenow="10"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{width: quotesCounter*10+'%'}"
      >{{quotesCounter}}/10</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      quotesCounter: 1
    };
  }
};
</script>

<style scoped>
h2 {
  font-weight: 700;
}

.progress {
  height: 24px;
  background: #f5f5f5;
  box-shadow: inset 1px 3px 10px -7px #cccccc;
}

.quotes-added-wrapper {
  margin: 50px 0;
}
</style>