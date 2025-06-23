<template>
    <div class="main-page">
        <h1>Welcome to the Main Page</h1>
        <p>This is a bland main page using Vue's Composition API.</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello, Vue 3 with Composition API!');
</script>

<style scoped>
.main-page {
    text-align: center;
    margin-top: 50px;
}
</style>