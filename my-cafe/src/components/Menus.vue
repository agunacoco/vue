<template>
  <div id="app">
    <h1>Menus</h1>
    <h1>{{ menu_name }}</h1>
    <h1>{{ searched_menu }}</h1>
  </div>
</template>

<script>
export default {
  name: "Menus",
  computed: {
    menu_name() {
      const id = this.$route.params.menu_id;
      if (id == "1") {
        return "아이스 커피";
      } else if (id == "2") {
        return "제주유기농말차프라푸치노";
      } else {
        return "";
      }
    },
    searched_menu() {
      const id = this.$route.query.menu_id;
      if (id == "1") {
        return "아이스 아메리카노";
      } else if (id == "2") {
        return "장재현 굿!";
      } else {
        return "";
      }
    },
  },
};
</script>