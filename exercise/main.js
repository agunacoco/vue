Vue.component('product', {
    template: `
    
    <div class="product">
        <div class="product-image">
            <!-- html의 attribute에는 {{ }}를 사용할 수 없어 v-bind를 사용. -->
            <img v-bind:src="image">
        </div>
        <div class="product_info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">InStock</p>
            <p v-else>Out of Stock</p>
            <ul>
                <li v-for="detail in details">
                    {{ detail }}
                </li>
            </ul>
            <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box"
                :style="{backgroundColor: variant.variantColor}" @mouseover="updateProduct(index)">
                <!-- style을 동적으로  -->
                <!-- 원래는 <p style="background-color: black"으로 하는데 {}를 넣은 이유-->
            </div>
            <!-- disabled는 비활성화 -->
            <button @click="addToCart" :disabled="!inStock" :class="{disabledButton:!inStock}">Add to Cart</button>
    
        </div>
    </div>`,
    data() {
        return {
            brand: 'Agunacoco',
            product: 'Socks',
            selectedVariant: 0,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                { variantId: 2234, variantColor: "green", variantImage: "./assets/socks_green.jpg", variantQuantitly: 10 },
                { variantId: 2235, variantColor: "blue", variantImage: "./assets/socks_blue.jpg", variantQuantitly: 0 },
            ],
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', 1);
        },
        updateProduct(index) {
            this.selectedVariant = index;
        },

    },
    computed: { // 캐싱을 한다. 처음에만 값을 계산해서 저장하고 값이 변하지 않는 이상 다시 계산하지 않고 기존에 저장된 값을 리턴한다. this.참조하는 변수가 있을 때만 사용. 매번 호출할 때마다 새로운 값이 나올 때는 함수를 사용하자. 
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantitly
        }
    }
});
let app = new Vue({
    el: '#app',
    data: {
        cart: [],
    },
    methods: {
        addToCart(id) {
            this.cart.push(id);
        },
    }
});