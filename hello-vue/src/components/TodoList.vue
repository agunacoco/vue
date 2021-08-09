<template>
  <div>
    <BaseInputText></BaseInputText>
    <TodoListItem></TodoListItem>
  </div>
</template>
<script>
import TodoListItem from "./TodoListItem.vue";
import BaseInputText from "./BaseInputText.vue";

export default {
  data() {
    return {};
  },
  components: {
    BaseInputText,
    TodoListItem,
  },
};
</script>