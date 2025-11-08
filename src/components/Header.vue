<template>
  <header class="bg-red-100 text-white p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <img src="https://cdn-icons-png.flaticon.com/128/4098/4098389.png" alt="Logo" class="h-11 mr-3 " />
        <h1 class="text-3xl font-bold text-black">Flower Shop</h1>
      </div>
      <nav class="flex space-x-4">
        <router-link to="/" class="text-black hover:text-secondary transition duration-700">Home</router-link>
        <router-link to="/contact" class="text-black hover:text-secondary transition duration-700">Contact</router-link>
        <router-link to="/about" class="text-black hover:text-secondary transition duration-700">About</router-link>
        <RouterLink to="/LogIn" class="text-black hover:text-secondary transition duration-700">Login</RouterLink>
        <RouterLink to="/Service" class="text-black hover:text-secondary transition duration-700">Service</RouterLink>
        <RouterLink to="/Comment" class="text-black hover:text-secondary transition duration-700">Comment</RouterLink>
      
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

// No additional logic required
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>
