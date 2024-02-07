<script setup>
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ref, onMounted } from "vue";
const props = defineProps(['center', 'zoom'])
let mapEl = ref(null)

onMounted(() => {
  let map = L.map(mapEl.value).setView(props.center, props.zoom);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
});
</script>

<template>
  <div ref="mapEl"></div>
</template>

<style scoped>
div {
  height: 600px;
}
</style>
