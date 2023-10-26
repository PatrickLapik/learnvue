<script setup>
import { computed, reactive, ref } from 'vue'
import ItemList from './components/ItemList.vue'
const message = ref('Hello Vue')
let i = 0
const items = reactive([
  {id:i++, name:'sai', isDone: true},
  {id:i++, name:'viin', isDone: true},
  {id:i++, name:'piim', isDone: true},
  {id:i++, name:'leib', isDone: true},
])

const doneItems = computed(() => {
  return items.filter(item => item.isDone)
})

const toDoItems = computed(() => {
  return items.filter(item => !item.isDone)
})

function add(){
  items.push({id:i++, name: message.value, isDone: false})
}
</script>

<template>
  <button @click="add">Click me</button>
  <input type="text" v-model="message">
  <ItemList :items="items" title="All Items"></ItemList>
  <ItemList :items="doneItems" title="Done items"></ItemList> 
  <ItemList :items="toDoItems" title="To do items"></ItemList> 


</template>
