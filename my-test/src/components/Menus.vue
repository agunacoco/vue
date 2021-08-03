<template>
  <div id="app">
    <h1>Menus</h1>
    <h1>{{ menu_name }}</h1>
  </div>
</template>

<script>
export default {
  name: "Menus",
  computed: {
    menu_name() {
      // this.$route.params는 파라미터 접근이다.
      //const id = this.$route.params.menu_id;
      const id = this.$route.query.menu_id;
      if (id == "1") return "아이스 커피";
      else if (id == "2") return "녹차 프라푸치노";
      else return "아이스크림";
    },
  },
};
</script>
