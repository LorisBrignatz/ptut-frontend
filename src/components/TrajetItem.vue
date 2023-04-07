<script setup>
defineProps(["trajet"]);
const emit = defineEmits(["deleteC"]);
</script>

<template>
  <h1>Test</h1>
  <div class="trip">
    <div class="trip-details">
      <h2 class="trip-driver">{{ trajet.conducteur }}</h2>
      <p class="trip-start">Départ: {{ trajet.pointdepart }}</p>
      <p class="trip-end">Arrivée: {{ trajet.pointarrivee }}</p>
      <p class="trip-date">Date: {{ trajet.date }}</p>
      <p class="trip-time">Heure: {{ trajet.heure }}</p>
      <div class="trip-buttons-delete">
        <button class="delete-button" @click="$emit('deleteC', trajet.numTrajet)">Annuler</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trip {
  background-color: #ffffff;
  border-radius: 40px;
  box-shadow:0 2px 5px rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
}
.trip-details {
  display: flex;
  flex-direction: column;
}
.trip-driver {
  color: #4c4c4c;
  font-size: 20px;
  margin: 0;
}
.trip-start {
  color: #4c4c4c;
  font-size: 18px;
  margin: 0 10px 0 0;
}
.trip-end {
  color: #4c4c4c;
  font-size: 18px;
  margin: 0 0 0 10px;
}
hr {
  border: 0;
  border-top: 1px solid #eee;
  margin: 10px 0;
}
.trip-date {
  color: #4c4c4c;
  font-size: 18px;
  margin: 0 10px 0 0;
}
.trip-time {
  color: #4c4c4c;
  font-size: 18px;
  margin: 0 0 0 10px;
}

.delete-button {
  background-color: #ffffff;
  border: 1px solid #fbb040;
  border-radius: 4px;
  color: #fbb040;
  cursor: pointer;
  font-size: 18px;
  margin-left: 10px;
  padding: 10px 20px;
}
.delete-button:hover {
  background-color: #fbb040;
  color: #ffffff;
}
</style>