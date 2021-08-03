<template>
  <div id="app">
    <h1>Menus</h1>
    <h1>{{ event_title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Menus",
  props: ["event_id"],
  computed: {
    event_title() {
      if (this.event_id == "1") {
        return "1+1";
      } else if (this.event_id == "2") {
        return "Free Cookies";
      } else return "";
    },
  },
};
</script>
