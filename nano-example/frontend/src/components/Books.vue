<template>
  <div id="app">
    <template>
      <v-container>
        <v-card v-for="b in briefs" :key="b.bookId">
          <v-row>
            <v-col order="last">
              <v-img :src="b.cover"></v-img>
              <!-- router-link는 라우터 지원 앱에서 사용자가 네비게이션을 가능하게 하는 컴포넌트다. -->
              <!-- 목표 위치는 to(prop)로 지정된다. to를 이용해서 url을 전달하면 해당 url로 이동할 수 있다. -->
              <!-- router-link는 html태그로 변환되면 a태그로 렌더링된다. -->
              <router-link :to="'/books/' + b.bookId">
                {{ b.title }}
              </router-link>
              <v-card-subtitle class="pb-0"> {{ b.author }} </v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </template>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Books",
  data() {
    return {
      briefs: [],
    };
  },
  mounted() {
    axios
      .get("/api/books")
      .then((response) => {
        console.log(response);
        this.briefs = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
