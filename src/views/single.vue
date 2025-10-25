<template>
  <div class="p-4 bg-gray-100 min-h-screen font-sans">
    <div class="hero h-64 flex items-center justify-center text-black" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
      <h1 class="text-4xl font-bold  bg-opacity-50 p-4 rounded">Single Flowers</h1>
    </div>
    <div class="container mx-auto mt-8 bg-white p-6 rounded-lg shadow-md flex">
      <div class="w-2/3">
        <div class="mb-4">
          <router-link to="/bouquet" class="bg-black text-white p-2 rounded mr-2 transition duration-700">Bouquet</router-link>
          <router-link to="/single" class="bg-black text-white p-2 rounded mr-2 transition duration-700">Single</router-link>
          <router-link to="/viewall" class="bg-black text-white p-2 rounded transition duration-700">View All</router-link>
        </div>
        <div class="mb-4">
          <input v-model="searchQuery" @input="searchMenu" type="text" placeholder="Search..." class="w-full p-2 border border-gray-300 rounded" />
        </div>
        <Menu :items="singleFlowers" />
      </div>
      <div class="w-1/3 ml-4">
        <Cart />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Menu from '../components/Menu.vue';
import Cart from '../components/Cart.vue';
import backgroundImage from '../assets/back.jpg';

const store = useStore();
const searchQuery = ref('');

const searchMenu = () => {
  store.dispatch('searchMenu', searchQuery.value);
};

const singleFlowers = computed(() => store.getters.filteredMenu);

onMounted(() => {
  store.dispatch('filterMenuByType', 'Single');
});
</script>
