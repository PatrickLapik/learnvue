z<script setup>
import { ref } from 'vue';
import Message from '../components/Message.vue';

let isMessageVisible = ref(false);
let isMessageVisible2 = ref(false);



</script>

<template>
    <button class="button is-primary" @click="isMessageVisible = !isMessageVisible">Show Message</button>
    <Message :visible="isMessageVisible" type="info" size="large" title="Message"
        message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, reiciendis amet qui soluta nihil voluptatibus nulla sequi necessitatibus aliquam animi dolore repellat praesentium, similique maxime voluptates temporibus tempora cupiditate voluptas."/>

    <button class="button is-primary" @click="isMessageVisible2 = true">Show Message 2</button>
    <Message :visible="isMessageVisible2" headerVisible="false" type="danger" size="medium" title="Message"
        message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, reiciendis amet qui soluta nihil voluptatibus nulla sequi necessitatibus aliquam animi dolore repellat praesentium, similique maxime voluptates temporibus tempora cupiditate voluptas."
        @close="isMessageVisible2 = false" />
</template>
