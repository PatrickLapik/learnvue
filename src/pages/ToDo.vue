<script setup>
import { computed, reactive, ref } from 'vue'
import ItemList from '../components/ItemList.vue'
const message = ref('')
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
  if(message.value.trim() !== ""){
    items.push({id:i++, name: message.value, isDone: false})
  }
  message.value = " "
}
</script>

<template>
<div class="container">
  <div class="field has-addons">
    <p class="control is-expanded">
      <input @keydown.enter="add" type="text" v-model="message" class="input">
    </p>
    <p class="control">
      <button @click="add" class="button is-primary">Click me</button>
    </p>

  </div>

</div>

  <div class="container">
      <div class="content">
        <ItemList :items="items" title="All Items"></ItemList>
        <ItemList :items="doneItems" title="Done items"></ItemList> 
        <ItemList :items="toDoItems" title="To do items"></ItemList> 
      </div>
  </div>


</template>
