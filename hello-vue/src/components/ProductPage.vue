<template>
  <!-- HTML 태그 내용 -->
  <div id="app">
    <div class="nav-bar"></div>
    <div class="cart">
      <p>Cart({{ cart.length }})</p>
    </div>
    <Product @add-to-cart="addToCart"></Product>
    <Comment></Comment>
  </div>
</template>
<script>
// 자바스크립트 내용

// Product, Comment 컴포넌트를 import해서 ProductPage.vue에 가져왔다.
import Comment from "./Comment.vue";
import Product from "./Product.vue";

export default {
  name: "ProductPage",
  components: {
    Product,
    Comment,
  },
  data() {
    return { cart: [] };
  },
  methods: {
    addToCart(variantId) {
      // 각 제품의 아이디를 받는다.
      this.cart.push(variantId);
    },
  },
};
</script>
