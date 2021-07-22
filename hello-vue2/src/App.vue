<template>
  <div id="app">
    <h1>My Todo App!</h1>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>


<style >
*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
