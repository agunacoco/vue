<template>
  <div id="comment">
    <h2>글쓰기</h2>
    <label for="name">작성자</label>
    <input type="text" v-model="userId" />
    <br />
    <label for="content">내용</label>
    <textarea type="text" v-model="content"></textarea>
    <br />
    <button @click="addContent">등록</button>
    <ul>
      <div v-for="(msg, i) in message" :key="i">
        <p>
          작성자 : {{ msg.userId }} <br />
          내용 : {{ msg.content }}
        </p>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: "",
      content: "",
      message: [],
    };
  },
  methods: {
    addContent() {
      const message = {
        userId: this.userId,
        content: this.content,
      };
      this.message.unshift(message);
      this.userId = null;
      this.content = null;
    },
  },
};
</script>