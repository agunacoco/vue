<template>
  <div>
    <h1>{{ result }}</h1>
    <form v-on:submit="onClick">
      <input ref="answer" maxlength="4" type="number" v-model="value" />
      <button type="submit">입력!</button>
    </form>
    <p>시도: {{ tries.length }}</p>
    <ul>
      <li v-for="(t, i) in tries" :key="i">
        {{ t.try }}
        {{ t.result }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tries: [],
      value: "",
      result: "",
    };
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      this.tries.push({
        try: this.value,
        result: "홈런",
      });
      this.value = "";
      this.$refs.answer.focus();
    },
  },
};
</script>
<style>
</style>