const App = Vue.createApp({
  data() {
    return {
      cart: {},
      premium: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
    }
  },
  methods: {
    addToCart(variantId) {
      if (!this.cart[variantId]) this.cart[variantId] = 0;
      this.cart[variantId]++;
    },
    removeFromCart(variantId) {
      if (this.cart[variantId] > 0) this.cart[variantId]--;
    },
    resetAllCarts() {
      Object.keys(this.cart).forEach(key => {
        this.cart[key] = 0;
      });
    }
  },
  computed: {
    totalCart() {
      return Object.values(this.cart).reduce((sum, qty) => sum + qty, 0);
    }
  }
})