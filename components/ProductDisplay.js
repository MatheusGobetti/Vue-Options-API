App.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    },
    details: {
      type: Array,
      required: true
    },
    cart: {
      type: Object,
      required: true
    }
  },
  template:
    /*html*/
    `
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image" alt="" srcset="" :class="{ 'out-of-stock-img': !inStock }" />
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p>{{ product.description }}</p>
          <p v-show="onSale && inStock">On Sale!</p>
          <p v-if="variants[selectedVariant].quantity >= 10 && inStock && onSale" :style="{ color: 'green' }">In Stock
          </p>
          <p v-else-if="variants[selectedVariant].quantity < 10 && variants[selectedVariant].quantity > 0 && onSale && inStock"
            :style="{ color: 'orange' }">Almost Sold
            Out!
          </p>
          <p v-else :style="{ color: 'red'}">Out of Stock</p>
          <p>Shipping: {{ shipping }}</p>
          <a :href="url" target="_blank">Vue.Js Website</a>
          <ul>
            <product-details :details="details"></product-details>
          </ul>
          <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
            class="color-circle" :style="{ backgroundColor: variant.color }"></div>
          <div class="button-container">
            <button class="button" @click="removeFromCart" :disabled="cartCount <= 0">Remove from Cart</button>
            <button class="button" @click="addToCart" :class="{ disabledButton: !inStock }"
              :disabled="cartCount >= variants[selectedVariant].quantity">Add to
              Cart</button>
          </div>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>
  `,
  data() {
    return {
      brand: "Vue Mastery",
      product: {
        name: "Socks",
        description: "Warm and cozy socks",
      },
      selectedVariant: 0,
      url: "https://vuejs.org",
      onSale: true,
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
      }],
      reviews: [],
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },

    updateVariant(index) {
      if (this.selectedVariant !== index) {
        this.$emit('variant-changed');
        this.selectedVariant = index;
      }
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
    },
    addReview(productReview) {
      this.reviews.push(productReview);
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
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
    cartCount() {
      return this.cart[this.variants[this.selectedVariant].id] || 0;
    }
  }
})