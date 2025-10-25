<template>
  <div class="flex flex-col min-h-screen font-sans">
    <Header />
    <main class="flex-grow p-4 bg-gray-100">
      <div class="container mx-auto">
        <router-view></router-view>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
</style>
