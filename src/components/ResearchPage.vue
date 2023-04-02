<script>
export default {
  name: "ResearchPage"
}

defineProps(["trajet"]);
const emit = defineEmits(["search"]);
</script>

<template>
  <div class="search-container">
    <form @submit.prevent="$emit('search', { _pointdepart: pointdepart, _pointarrivee: pointarrivee, _date: date, _heure: heure })">
      <input type="text" v-model="pointdepart" placeholder="Nom du point de départ" />
      <input type="text" v-model="pointarrivee" placeholder="Nom du point d'arrivée" />
      <input type="date" v-model="date" />
      <input type="time" v-model="heure" />
      <button class="search-button" @click="$emit('search', { _pointdepart: pointdepart, _pointarrivee: pointarrivee, _date: date, _heure: heure })">Rechercher</button>
    </form>
  </div>
</template>



<style scoped>

</style>