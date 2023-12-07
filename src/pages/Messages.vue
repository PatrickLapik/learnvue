<script setup>
    import { ref } from 'vue';
    import Message from '../components/Message.vue'

    let messageOpen = ref(false);

</script>

<template>
    <button class="button is-primary" @click="messageOpen=true">Open Message</button>

    <message :open="messageOpen" @close="messageOpen=false">
        neeger.ee
    </message>
</template>