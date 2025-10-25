<template>
  <div class="bg-white shadow-md rounded-lg p-4 font-sans">
    <h2 class="text-2xl font-semibold mb-4 text-primary">Menu</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <li v-for="item in items" :key="item.id" class="bg-light-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-700 relative">
        <div class="relative group">
          <router-link :to="`/flower/${item.id}`" class="block h-48 w-full mb-4 overflow-hidden rounded-t-lg">
            <img :src="item.img" alt="Flower Image" class="h-full w-full object-cover">
          </router-link>
          <button @click="openQuickView(item)" class="quick-view-btn absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
            Quick View
          </button>
        </div>
        <div class="flex justify-between items-center mt-4">
          <span class="text-lg font-semibold">{{ item.name }}  ${{ item.price }}</span>
          <button @click="addToCart(item)" class="bg-primary text-white py-2 px-6 rounded hover:bg-primary-dark transition duration-700">
            Add to Cart
          </button>
        </div>
      </li>
    </ul>
    <QuickViewModal v-if="selectedFlower" :flower="selectedFlower" :closeModal="closeQuickView" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { defineProps } from 'vue';
import QuickViewModal from './QuickViewModal.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

const store = useStore();
const selectedFlower = ref(null);

const addToCart = (item) => {
  store.dispatch('addToCart', item);
};

const openQuickView = (item) => {
  selectedFlower.value = item;
};

const closeQuickView = () => {
  selectedFlower.value = null;
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.quick-view-btn {
  opacity: 0;
  transition: opacity 0.3s;
}

.group:hover .quick-view-btn {
  opacity: 1;
}
</style>
