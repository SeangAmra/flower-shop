<template>
    <div class="min-h-screen bg-rose-200 m-5">
      <div class="p-6">
        <h1 class="text-black text-4xl font-serif text-center mb-6">Why Choose Us?</h1>
      </div>
  
      <!-- First Row (3 Cards) -->
      <div class="grid grid-cols-3 gap-6">
        <div v-for="(service, index) in services.slice(0, 3)" :key="index"
             class="bg-white p-6 rounded-lg shadow-md w-80 text-black font-serif m-auto">
          <div class="flex items-center space-x-4">
            <!-- Image -->
            <img :src="service.image" alt="Service Image" class="w-16 h-16 object-cover rounded-md">
            
            <!-- Text (Title and Description) -->
            <div>
              <h1 class="text-xl font-bold">{{ service.conent }}</h1>
              <p>{{ service.Des }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Second Row (2 Cards - Centered) -->
      <div class="flex justify-center gap-16 mt-16">
        <div v-for="(service, index) in services.slice(3, 5)" :key="index"
             class="bg-white p-6 rounded-lg shadow-md w-80 text-black font-serif">
          <h1>{{ service.conent }}</h1>
          <p>{{ service.Des }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import img1 from '../assets/store.png';
  import img2 from '../assets/shipping-cost.png';
  import img3 from '../assets/bouquet.png';
  
  const services = ref([
    { conent: "15 BRANCHES IN THE CITY", Des: "IN THE BEST PLACES IN THE CITY FOR OUR BELOVED GUESTS", image: img1 },
    { conent: "FAST SHOPPING", Des: "OUR DELIVERY WILL DELIVER THE BOUQUET WITHIN AN HOUR", image: img2 },
    { conent: "PHOTO OF THE FLOWER", Des: "WE WILL SHOW YOU EXACTLY WHAT YOUR BOUQUET LOOK LIKE BEFORE DELIVERY", image: img3 },
    
  ]);
  </script>
  