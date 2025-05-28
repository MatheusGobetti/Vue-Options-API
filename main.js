const App = Vue.createApp({
  data() {
    return {
      cart: 0,
      brand: "Vue Mastery",
      product: {
        name: "Socks",
        description: "Warm and cozy socks",
      },
      selectedVariant: 0,
      url: "https://vuejs.org",
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [{
        id: 2234,
        color: "green",
        image: "./assets/images/socks_green.jpg",
        quantity: 10
      }, {
        id: 2235,
        color: "blue",
        image: "./assets/images/socks_blue.jpg",
        quantity: 2
      }]
    }
  },
  methods: {
    addToCart() {
      if (this.cart < this.variants[this.selectedVariant].quantity) {
        this.cart += 1;
      }
    },

    updateVariant(index) {
      if (this.selectedVariant !== index) {
        this.cart = 0;
        this.selectedVariant = index;
      }
    },

    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product.name;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    inventory() {
      return this.variants.reduce((sum, variant) => sum + variant.quantity, 0);
    },
  }
})