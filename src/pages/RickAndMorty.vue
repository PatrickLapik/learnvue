<template>
    <div class="container">
        <div class="field has-addons">
            <p class="control">
                <button :disabled="!info.prev" class="button" @click="prev()">
                    <span>Previous</span>
                </button>
            </p>
            <p class="control">
                <button :disabled="!info.next" class="button" @click="next()">
                    <span>Next</span>
                </button>
            </p>
        </div>
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

getCharacters('https://rickandmortyapi.com/api/character')

async function getCharacters(url) {
    let response = await axios.get(url);
    console.log(response.data);
    info.value = response.data.info;
    chars.value = response.data.results;
}

async function next() {
    getCharacters(info.value.next);
};
async function prev() {
    getCharacters(info.value.prev);
};
</script>