<script setup>

defineProps(["trajet"]);
const emit = defineEmits(["search"]);
</script>

<template>
  <h2>Recherchez un trajet</h2>
  <div class="search-container">
    <form @submit.prevent="$emit('search',pointarrivee )">
      <div class="input-container">
        <input type="text" v-model="pointdepart" placeholder="Point de départ" />
        <i class="material-icons-outlined">location_on</i>
      </div>
      <div class="input-container">
        <input type="text" v-model="pointarrivee" placeholder="Point d'arrivée" />
        <i class="material-icons-outlined">location_on</i>
      </div>
      <div class="input-container">
        <input type="date" v-model="date" placeholder="Date de départ" />
        <i class="material-icons-outlined">event</i>
      </div>
      <div class="input-container">
        <input type="time" v-model="heure" placeholder="Heure de départ" />
        <i class="material-icons-outlined">access_time</i>
      </div>
      <div class="input-button-search">
        <button class="search-button" @click="$emit('search', { _pointdepart: pointdepart, _pointarrivee: pointarrivee, _date: date, _heure: heure })">Rechercher</button>
      </div>
    </form>
  </div>
</template>



<style scoped>
h2 {
  font-family: 'Blinker', sans-serif;
  color: #cab174;
  font-size: 24px;
  margin-top: -50px;
  margin-bottom: 20px;
}

.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow:0 2px 5px rgba(0, 0, 0, 0.4);
  width: 100%;
}

input[type="text"], input[type="date"], input[type="time"] {
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
  font-family: 'Blinker', sans-serif;
  color: #666;
}
input[type="date"]::-webkit-calendar-picker-indicator,
input[type="time"]::-webkit-calendar-picker-indicator {
  display: none;
}

.input-container {
  position: relative;
  margin-bottom: 16px;
}

.material-icons-outlined {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  color: #ccc;
}

.input-button-search {
  text-align: center;
}

.search-button {
  background-color: #cab174;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 16px;
  font-family: 'Blinker', sans-serif;
  text-align: center;
  cursor: pointer;
  margin-top: 16px;
}

.search-button:hover {
  background-color: #e3d1a6;
}

@media (min-width: 768px) {
  .search-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  input[type="text"], input[type="date"], input[type="time"] {
    margin-right: 16px;
  }

  button.search-button {
    margin-top: 0;
  }
}
</style>