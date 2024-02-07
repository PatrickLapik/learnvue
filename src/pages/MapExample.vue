<script setup>
import LeafletMap from '../components/Leafletmap.vue'
import {ref, reactive} from 'vue'
navigator.geolocation.getCurrentPosition(success, error);
let coords = ref(null)
let markers = reactive([
  [59.45223, 24.45160],
  [59.45223, 24.45860],
  [59.45223, 24.45660],
  [59.45223, 24.45460]
])

function success(position){
  console.log(position)
  coords.value = [position.coords.latitude, position.coords.longitude]
}
function error(){
  console.log("munn")
}
</script>

<template>
  <button class="button" @click="coords = [59.45223, 24.45160], markers = markers">Bomb sven</button>
  <LeafletMap v-if ="coords" :center="coords" :zoom="19" :markers="markers"></LeafletMap>

</template>

