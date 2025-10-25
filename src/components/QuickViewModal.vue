<template>
  <div v-if="flower" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold">{{ flower.name }}</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700">&times;</button>
      </div>
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
          <img :src="flower.img" alt="Flower Image" class="w-full h-auto rounded-lg shadow-md">
        </div>
        <div class="w-full lg:w-1/2 lg:pl-8">
          <p class="text-lg mb-4">{{ flower.description }}</p>
          <p class="text-lg mb-4"><strong>Details:</strong> {{ flower.details }}</p>
          <p class="text-lg mb-4"><strong>Availability:</strong> {{ flower.availability }}</p>
          <p class="text-2xl font-bold mb-4">${{ flower.price }}</p>
          <button @click="addToCart(flower)" class="bg-primary text-white py-2 px-6 rounded hover:bg-primary-dark transition duration-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  flower: {
    type: Object,
    required: true
  },
  closeModal: {
    type: Function,
    required: true
  }
});

const store = useStore();

const addToCart = (flower) => {
  store.dispatch('addToCart', flower);
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
