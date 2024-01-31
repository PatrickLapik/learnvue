<template>
    <div class="container">
        <div class="field has-addons">
            <p class="control">
                <button :disabled="!info.prev" class="button" @click="prev()">
                    <span>Previous</span>
                </button>
            </p>

            <p v-for="num in makePagination(page, info.pages)" :key="num" class="control">
                <button 
                    class="button" 
                    :class="{'is-static': num==='...', 'is-primary': num===page}"
                    @click="getCharacters(num)">
                    <span>{{ num }}</span>
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

async function getCharacters(pageNumber) {
    let response = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
            page: pageNumber
        }
    });
    page.value=pageNumber;
    console.log(response.data);
    info.value = response.data.info;
    chars.value = response.data.results;
}

async function next(){
    getCharacters(++page.value);
}

async function prev(){
    getCharacters(--page.value);
}

function makePagination(current, total){
    let pages = [];
    for(let i=1;i<=3;i++){
        pages[i] = i;
    }
    if(current>2 && current<total-1){
        pages.push('...');
        for(let i=current-1;i<=current+1;i++){
            pages[i] = i;
        }
    }
    pages.push('...');
    for(let i=total-2; i<=total;i++){
        pages[i] = i;
    }
    return pages.filter(value => value);
}
</script>