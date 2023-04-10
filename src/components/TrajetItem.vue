<script setup>
defineProps(["trajet"]);
const emit = defineEmits(["deleteC"]);
</script>

<template>
  <div class="trip">
    <div class="trip-details">
      <h2 class="trip-driver">{{ trajet.conducteur }}</h2>
      <div class="icon-text-container">
        <i class="material-icons-outlined">location_on</i>
        <p class="trip-start">Départ: {{ trajet.pointdepart }}</p>
      </div>
      <div class="icon-text-container">
        <i class="material-icons-outlined">flag</i>
        <p class="trip-end">Arrivée: {{ trajet.pointarrivee }}</p>
      </div>
      <div class="icon-text-container">
        <i class="material-icons-outlined">calendar_month</i>
        <p class="trip-date">Date: {{ trajet.date }}</p>
      </div>
      <div class="icon-text-container">
        <i class="material-icons-outlined">schedule</i>
        <p class="trip-time">Heure: {{ trajet.heure }}</p>
      </div>
    </div>
    <div class="trip-buttons-delete">
      <button class="delete-button" @click="$emit('deleteC', trajet.numTrajet)">Annuler ce trajet</button>
    </div>
  </div>
</template>

<style scoped>
.trip {
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow:0 2px 5px rgba(0, 0, 0, 0.4);
  margin-top: 20px;
  padding: 10px;
  width: 100%;
}
.trip-details div {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.trip-details i {
  margin-right: 10px;
  font-size: 15px;
}
.trip-details p {
  margin: 0;
  font-size: 15px;
}
.icon-text-container {
  display: inline-flex;
  align-items: center;
}
.icon-text-container i {
  margin-right: 10px;
}
.icon-text-container p {
  margin: 0;
}
.trip-driver {
  color: #4c4c4c;
  font-size: 15px;
  font-family: 'Blinker', sans-serif;
  margin: 0;
}
.trip-start {
  color: #181c32;
  font-size: 15px;
  font-family: 'Blinker', sans-serif;
  margin: 0 10px 0 0;
}
.trip-end {
  color: #181c32;
  font-size: 15px;
  font-family: 'Blinker', sans-serif;
  margin: 0 0 0 10px;
}
hr {
  border: 0;
  border-top: 1px solid #eee;
  margin: 10px 0;
}
.trip-date {
  color: #181c32;
  font-size: 15px;
  font-family: 'Blinker', sans-serif;
  margin: 0 10px 0 0;
}
.trip-time {
  color: #181c32;
  font-size: 15px;
  font-family: 'Blinker', sans-serif;
  margin: 0 0 0 10px;
}
.trip-buttons-delete {
  text-align: center;
}
.delete-button {
  background-color: #ffffff;
  border: 1px solid #cab174;
  border-radius: 20px;
  color: #cab174;
  cursor: pointer;
  font-size: 12px;
  font-family: 'Blinker', sans-serif;
}
.delete-button:hover {
  background-color: #cab174;
  color: #ffffff;
}
</style>