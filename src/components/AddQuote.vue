<template>
  <div id="add-quote-wrapper">
    <div class="title">Add Quote</div>
    <div class="input-group">
      <textarea class="form-control" v-model="quoteText"></textarea>
    </div>
    <div class="add-button">
      <button type="button" @click="addQuote" class="btn btn-primary">Add Quote</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  data: function() {
    return {
      quoteText: ""
    };
  },
  methods: {
    addQuote() {
      eventBus.$emit("add", this.quoteText);
      this.quoteText = "";
    }
  }
};
</script>

<style scoped>
#add-quote-wrapper {
  width: 40%;
  margin: 20px auto 40px;
}
.title {
  font-weight: 700;
  font-size: 18px;
}
textarea {
  width: 100%;
  height: 100px;
  /* border: 2px solid #dddddd;
  border-radius: 5px; */
}
.input-group {
  margin: 10px 0 20px;
}

.add-button {
  width: min-content;
  margin: auto;
}
.btn-primary {
  margin: auto;
}
</style>