<script setup>

defineProps(["trajet"]);
const emit = defineEmits(["search"]);
</script>

<template>
  <div class="search-container">
   <!-- <form @submit.prevent="$emit('search', { _pointdepart: pointdepart, _pointarrivee: pointarrivee, _date: date, _heure: heure })">-->
      <form @submit.prevent="$emit('search',pointarrivee )">

      <input type="text" v-model="pointdepart" placeholder="Nom du point de départ" />
      <input type="text" v-model="pointarrivee" placeholder="Nom du point d'arrivée" />
      <input type="date" v-model="date" placeholder="Date de départ" />
      <input type="time" v-model="heure" placeholder="Heure de départ" />
      <button class="search-button" @click="$emit('search', { _pointdepart: pointdepart, _pointarrivee: pointarrivee, _date: date, _heure: heure })">Rechercher</button>
    </form>
  </div>
</template>



<style scoped>

</style>