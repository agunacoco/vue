<template>
  <v-container>
    <v-row align="center" justify="center">
      <p class="font-weight-bold my-10 text-center text-h4">{{ book.title }}</p>
      <p class="font-weight-black text--disabled my-10 text-center text-h4">
        {{ book.subtitle }}
      </p>
    </v-row>
    <v-row justify="center">
      <v-img class="" max-height="400" max-width="250" :src="book.cover" />
    </v-row>
    <v-row justify="center">
      <p class="font-weight-bold my-7 text-center text-h6">
        작가: {{ book.author }}, 번역: {{ book.translator }},
        {{ book.publisher }}
      </p>
    </v-row>
    <v-row justify="center">
      <p class="font-weight-regular text-center">
        페이지: {{ book.page }}, 가격: {{ book.price }}원, ISBN: {{ book.ISBN }}
      </p>
    </v-row>
    <v-row justify="center">
      <p class="font-weight-regular text-center">
        {{ book.info }}
      </p>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Book",
  data() {
    return {
      // 객체 하나만 받기때문에 배열이 아니라 객체.
      book: {},
    };
  },
  mounted() {
    axios
      // this.$route.params는 라우터에서 데이터받기.
      .get("/api/books/" + this.$route.params.bookId)
      .then((res) => {
        console.log(res);
        this.book = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
