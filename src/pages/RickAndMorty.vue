<template>
    <div class="container">
        <div class="field has-addons">
            <p class="control">
                <button :disabled="!info.prev" class="button" @click="prev()">
                    <span>Previous</span>
                </button>
            </p>
            <p class="control">
                <button class="button is-static has-text-dark">
                    <span>{{ page }}/{{ info.pages }}</span>
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
let page = ref(1);

getCharacters(page.value);

async function getCharacters(page) {
    let response = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
            page
        }
    });
    console.log(response.data);
    info.value = response.data.info;
    chars.value = response.data.results;
}

async function next() {
    getCharacters(++page.value);
};
async function prev() {
    getCharacters(--page.value);
};
</script>