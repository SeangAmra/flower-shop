<template>
  <div class="p-4 bg-gray-100 min-h-screen font-sans w-1/2 text-center mx-auto">
    <div class="container mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
      <form>
        <div class="mb-4">
          <label class="block text-gray-700">Name</label>
          <input type="text" class="w-1/2 p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input type="email" class="w-1/2 p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Message</label>
          <textarea class="w-1/2 p-2 border border-gray-300 rounded mt-1"></textarea>
        </div>
        <button type="submit" class="bg-black text-white p-2 rounded">Send</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// No additional logic required
</script>
