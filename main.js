Vue.component("product", {
  template: `<div class="product">
        <div class="product-image">
          <img v-bind:src="image" />
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock > 7">In Stock</p>
          <p v-else-if="inStock <= 7 && inStock > 0">Almost gone!</p>
          <p v-else>Out of Stock</p>

          <ul>
            <li v-for="spec in specs">{{ spec }}</li>
          </ul>

          <div
            v-for="(variant,index) in variants"
            v-bind:key="variant.variantId"
            class="color-box"
            v-bind:style="{backgroundColor: variant.variantColor}"
            v-on:mouseover="updateProduct(index)"
          ></div>

          <button
            v-on:click="addToCart"
            v-bind:disabled="cart >= inStock"
            v-bind:class="{ disabledButton: cart >= inStock}"
          >
            Add to Cart
          </button>

          <div class="cart">
            <p>Cart({{cart}})</p>
          </div>
        </div>
      </div>`,
  data() {
    return {
      brand: "Emmanuel Brand",
      product: "Socks",
      selectedVariant: 0,
      inventory: 15,
      specs: ["70% cotton", "30% polyester", "Gender-neutral"],
      variants: [
        {
          variadId: 2234,
          variantColor: "green",
          variantImage: "./assets/green.jpg",
          variantQuantity: 10,
        },
        {
          variadId: 2235,
          variantColor: "blue",
          variantImage: "./assets/blue.jpg",
          variantQuantity: 5,
        },
      ],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
  },
});

var app = new Vue({
  el: "#app",
});
