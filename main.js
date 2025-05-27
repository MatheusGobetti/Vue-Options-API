const App = Vue.createApp({
  data() {
    return {
      product: {
        name: "Socks",
        description: "Warm and cozy socks",
      },
      image: "./assets/images/socks_green.jpg",
      url: "https://vuejs.org",
      inventory: 8,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
    }
  }
})