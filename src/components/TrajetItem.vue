<script>
defineProps(["trajet"]);
const emit = defineEmits(["deleteC"]);
</script>

<template>
  <div class="trip">
    <div class="trip-details">
      <h2 class="trip-driver">{{ trajet.conducteur }}</h2>
      <p class="trip-start">Départ: {{ trajet.pointdepart }}</p>
      <p class="trip-end">Arrivée: {{ trajet.pointarrivee }}</p>
      <p class="trip-date">Date: {{ trajet.date }}</p>
      <p class="trip-time">Heure: {{ trajet.heure }}</p>
      <div class="trip-buttons-delete">
        <button class="delete-button" @click="$emit('deleteC', trajet.numTrajet)">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trip {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
.trip-details {
  display: flex;
  flex-direction: column;
}
.trip-driver {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.trip-start,
.trip-end,
.trip-date,
.trip-time {
  margin-bottom: 5px;
}
.trip-buttons-delete {
  margin-top: 10px;
}
.delete-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>