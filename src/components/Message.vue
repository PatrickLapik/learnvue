<script setup>
import { ref } from 'vue';
defineProps(['open']);
</script>

<template>
    <article class="message" :class="{'is-active': open}">
        <div class="message-header">
            <p>Hello World</p>
            <button class="delete" aria-label="delete" @click="$emit('delete')" ></button>
        </div>
        <div class="message-content">
            <slot></slot>
        </div>
    </article>
</template>