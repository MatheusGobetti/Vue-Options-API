const App = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: {
        name: "Socks",
        description: "Warm and cozy socks",
      },
      image: "./assets/images/socks_green.jpg",
      url: "https://vuejs.org",
      inventory: 8,
      onSale: true,
      inStock: false,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [{
        id: 2234,
        color: "green",
        image: "./assets/images/socks_green.jpg"
      }, {
        id: 2235,
        color: "blue",
        image: "./assets/images/socks_blue.jpg"
      }]
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },

    updateImage(variantImage) {
      this.image = variantImage;
    },

    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    }
  }
})