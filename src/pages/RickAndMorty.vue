<template>
    <div class="container">
        <div class="columns is-multiline">
            <div v-for="char in chars" :key="char.id" class="column is-one-quarter">
                <CharacterCard :character="char"></CharacterCard>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

let info = ref({});
let chars = ref([]);

let response = await axios.get('https://rickandmortyapi.com/api/character');
console.log(response.data);
info.value = response.data.info;
chars.value = response.data.results;
</script>