var app = new Vue({
  el: "#app",
  data: {
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
        variantQuantity: 0,
      },
    ],
    cart: 0,
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
