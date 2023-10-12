<script setup>
import { ref } from 'vue'
const message = ref('Hello Vue')
const items = ref(['sai', 'viin', 'viin'])
function add(){
  this.items.push(this.message)
}
</script>

<template>
  <button @click="items.add">Click me</button>
  <input type="text" v-model="message">
  <h1>{{ message.split('').reverse().join('') }}</h1>
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
</template>
