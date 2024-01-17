<script setup>
import Tabs from './components/Tabs.vue';
</script>

<template>
  <tabs></tabs>
  <suspense>
    <router-view></router-view>
  </suspense>
</template>

