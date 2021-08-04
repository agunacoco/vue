<template>
  <div id="app">
    <!-- script에서는 전역변수를 this를 사용하지만 tmeplate에서는 this를 생략하므로 $를 사용한다 -->
    <h1>Welcome {{ userId }}</h1>
    <v-text-field :rules="rules" v-model="newId" type="text" />
    <v-btn @click="saveUserId" elevation="2"> Save </v-btn>
    <v-btn @click="updateReviews" elevation="2">Update</v-btn>
    <h1>{{ reviewCount }}</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th>Email</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in reviews" :key="item.id">
            <td>{{ item.email }}</td>
            <td>{{ item.body }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return { newId: "" };
  },
  computed: {
    ...mapState({
      userId: (state) => state.user.userId,
    }),
    ...mapState("reviews", {
      reviews: (state) => state.reviews,
    }),
    ...mapGetters("reviews", ["reviewCount"]),
  },
  methods: {
    ...mapMutations(["updateUserId"]),
    ...mapActions("reviews", ["getReviews"]),
    saveUserId() {
      // mutations은 commit을 해서 함수을 실해시킨다. commit의 첫번째 인자는 mutations의 함수 이름, 두번째 인자는 전달할 값.
      //this.$store.commit("updateUserId", this.newId);
      this.updateUserId(this.newId);
    },
    updateReviews() {
      this.getReviews();
    },
  },
};
</script>