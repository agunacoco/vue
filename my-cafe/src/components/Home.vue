<template>
  <div id="app">
    <!-- script에서는 전역변수를 this를 사용하지만 tmeplate에서는 this를 생략하므로 $를 사용한다 -->
    <h1>Welcome {{ userId }}</h1>
    <input v-model="newId" type="text" /><button @click="saveUserId">
      Save
    </button>
    <button @click="updateReviews">Update</button>
    <h1>{{ reviewCount }}</h1>
    <ul>
      <li v-for="r in reviews" :key="r.id">
        <p>{{ r.body }}</p>
      </li>
    </ul>
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
      this.updateUserId(this.newId);
    },
    updateReviews() {
      this.getReviews();
    },
  },
};
</script>