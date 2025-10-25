<template>
    <form @submit.prevent="handleLogin" class="p-3  w-1/3 m-auto bg-rose-100 rounded-md mt-[5%]">
        <h1 class="text-center">Login</h1>
        <div class="w-[400px] m-auto">
            <div class="flex justify-center p-3">
                <label for="username" class="p-1">Username : </label>
                <input v-model="username" type="text" id="username" class="border p-1">
            </div>
            <div class="flex justify-center p-3">
                <label for="password" class="p-1">Password : </label>
                <input v-model="password" type="password" id="password" class="border p-1">
            </div>
        </div>
        <div class="text-center rounded-md flex justify-center">
            <button type="button" class="p-2 bg-pink-50 hover:bg-pink-300 border-4 border-yellow-100 rounded-md mr-4">Cancel</button>
            <button type="submit" class="p-2 bg-pink-50 hover:bg-pink-300 border-4 border-yellow-100 rounded-md">Login</button>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
    if (username.value === 'admin' && password.value === '123') {
        router.push('/');
    } else {
        alert('Invalid credentials');
    }
};
</script>
