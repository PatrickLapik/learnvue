<template>
    <div class="container">
        <div class="content">
            <h2>{{ joke }}</h2>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

let joke = ref('')

/* axios.get('https://api.chucknorris.io/jokes/random').then(respone => {
    console.log(respone.data)
    joke.value = respone.data.value
}) */

let respone = await axios.get('https://api.chucknorris.io/jokes/random')
joke.value = respone.data.value

</script>