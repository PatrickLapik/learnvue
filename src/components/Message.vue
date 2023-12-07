<script setup>

defineProps({
    visible: {
        type: Boolean,
        required: true,
    },
    headerVisible: {
        type: Boolean,
    },
    type: {
        type: String,
        default: 'info',
        validator(value) {
        return ['info', 'success', 'warning', 'danger'].includes(value)
    }
    },
    size: {
        type: String,
        default: 'normal',
        validator(value) {
            return['small', 'normal', 'medium', 'large'].includes(value)
        }
    },
    title: {
        type: String,
        default: 'Message',
    },
    message: {
        type: String,
        required: true,
    },
    

})

</script>

<template>
    <div v-if="visible" class="message" :class="['is-' + type], ['is-' + size]">
        <div v-if="headerVisible" class="message-header">
            <p>{{ title }}</p>
            <button class="delete" aria-label="delete" :class="['is-' + size]" @click="$emit('close')"></button>
        </div>
        <div class="message-body">
            {{ message }}
        </div>
    </div>
</template>