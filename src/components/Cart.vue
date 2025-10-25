<template>
    <div class="bg-light-blue-50 p-4 rounded-lg shadow-md">
      <h2>Cart</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price.toFixed(2) }} x {{ item.quantity }}
          <button @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <p>Total: ${{ cartTotal.toFixed(2) }}</p>
      <button @click="clearCart">Clear Cart</button>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const cart = computed(() => store.state.cart);
const cartTotal = computed(() =>
  store.state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
);

const removeFromCart = (itemId) => {
  store.dispatch('removeFromCart', itemId);
};

const clearCart = () => {
  store.dispatch('clearCart');
};
</script>
