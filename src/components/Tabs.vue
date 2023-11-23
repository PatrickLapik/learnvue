<script setup>
    import { userRouter, useRoute} from 'vue-router'
    const route = useRoute()
    const router = userRouter()
    console.log(router)
</script>

<template>
    <div class="tabs is-centered">
        <ul>
            <li v-for="link in router.getRoutes()" :class="{'is-active' : route.path === link.path}">
                <router-link :to="link.path">{{ link.name }}</router-link></li>
        </ul>
    </div>
</template> 