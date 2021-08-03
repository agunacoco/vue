Vue.component('product', { // 전역 컴포넌트, 자식 컴포넌트
    props: [], // 하위 컴포넌트의 템플릿에서 상위 데이터를 직접 참조 할 수 없기때문에 props 옵션을 사용해 하위 컴포넌트로 전달.
    template: `
    <div class="product">
        <div class="product-image">
            <!-- html의 attribute에는 {{ }}를 사용할 수 없어 v-bind를 사용. -->
            <img v-bind:src="image">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
                <li v-for="ditail in ditails">
                    {{ ditail }}
                </li>
            </ul>
            <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box"
                :style="{backgroundColor: variant.variantColor}" @mouseover="updateProduct(index)">
            </div>
            <!-- style을 동적으로  -->
            <!-- 원래는 <p style="background-color: black"으로 하는데 {}를 넣은 이유-->
            <!-- inStock가 false일때 disableButton을 실행한다. -->
            <!-- disabled는 비활성화 -->
            <button @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to Cart</button>
        </div>
    </div>`,
    data() {
        return {
            brand: "Agunacoco",
            product: "Socks",
            selectedVariant: 0, // index에서 받아올 번호 변수 
            ditails: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: "assets/socks_green.jpg",
                    variantQuantity: 10 // 재고량
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: "assets/socks_blue.jpg",
                    variantQuantity: 0
                }
            ],
        }
    },
    methods: {
        addToCart() {
            // 컴포넌트 통신
            // 부모에서 자식으로 데이터를 전달하기 위해서는 props를 사용하지만 자식이 부모에게 데이터를 전달하기 위해서는 event(emit)를 발생시킨다.
            // 왼쪽 인자: 보낼 신호, 오른쪽 신호: 실제 보내는 값
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
        },
        updateProduct(index) {
            this.selectedVariant = index;
        }
    },
    computed: { // 캐싱을 한다. 처음에만 값을 계산해서 저장하고 값이 변하지 않는 이상 다시 계산하지 않고 기존에 저장된 값을 리턴한다. this.참조하는 변수가 있을 때만 사용. 매번 호출할 때마다 새로운 값이 나올 때는 함수를 사용하자. 
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    },
});

let app = new Vue({  // vue instance, 부모 
    el: '#app',
    data: {
        cart: [],
    },
    methods: {
        addToCart(id) {
            this.cart.push(id);
        }
    }
})