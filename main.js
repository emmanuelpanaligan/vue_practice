var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/green.jpg",
    inventory: 15,
    specs: ["70% cotton", "30% polyester", "Gender-neutral"],
    variants: [
      {
        variadId: 2234,
        variantColor: "green",
        variantImage: "./assets/green.jpg",
      },
      {
        variadId: 2235,
        variantColor: "blue",
        variantImage: "./assets/blue.jpg",
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
  computed: {
    isActive() {
      if (this.cart > this.inventory - 1) return true;
      else return false;
    },
  },
});
