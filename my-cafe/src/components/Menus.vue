<template>
  <div id="app">
    <h1 @click="ItemList">Menus</h1>
    <ul>
      <li v-for="menu in menus" :key="menu.id">
        <a :href="menuAddress(menu.id)">{{ menu.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menus",
  data() {
    return {
      menus: [
        { id: 1, name: "아이스 아메리카노", price: 1000 },
        { id: 2, name: "블루레몬에이드", price: 3000 },
        { id: 3, name: "제주유기농말차프라프치노", price: 6000 },
      ],
    };
  },
  methods: {
    menuAddress(id) {
      return "/menu/" + id;
    },
  },
};
</script>