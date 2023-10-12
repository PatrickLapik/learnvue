<script setup>
import { ref } from 'vue'
const message = ref('Hello Vue')
</script>

<template>
  <button @click="message='Peenis'">Click me</button>
  <input type="text" v-model="message">
  <h1>{{ message.split('').reverse().join('') }}</h1>
</template>
