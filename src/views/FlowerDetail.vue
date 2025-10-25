<template>
  <div class="p-4 bg-gray-100 min-h-screen font-sans">
    <div class="hero h-64 flex items-center justify-center text-white" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
      <h1 class="text-4xl font-bold bg-black bg-opacity-50 p-4 rounded">{{ flower.name }}</h1>
    </div>
    <div class="container mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
          <img :src="flower.img" alt="Flower Image" class="w-full h-auto rounded-lg shadow-md object-cover">
        </div>
        <div class="w-full lg:w-1/2 lg:pl-8">
          <p class="text-lg mb-4">{{ flower.description }}</p>
          <p class="text-lg mb-4"><strong>Scientific Name:</strong> {{ flower.scientificName }}</p>
          <p class="text-lg mb-4"><strong>Care Instructions:</strong> {{ flower.careInstructions }}</p>
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
import { ref, onMounted } from 'vue';
import { useStore } from 'vue';
import { useRoute } from 'vue-router';
import backgroundImage from '../assets/back.jpg';

const store = useStore();
const route = useRoute();
const flower = ref({});

onMounted(() => {
  const flowerId = route.params.id;
  flower.value = store.getters.getFlowerById(flowerId);
});

const addToCart = (flower) => {
  store.dispatch('addToCart', flower);
};
</script>
