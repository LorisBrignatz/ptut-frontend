<script>
</script>

<template>
  <h2>Créez un trajet</h2>
  <div class="create-container">
    <form class="form-add" @submit.prevent="$emit('addT',nom, prenom, pointdepart, pointarrivee, date, heure)">
      <div class="form-group">
        <input type="text" v-model="nom" placeholder="Nom" />
        <i class="material-icons-outlined">badge</i>
      </div>
      <div class="form-group">
        <input type="text" v-model="prenom" placeholder="Prenom" />
        <i class="material-icons-outlined">badge</i>
      </div>
      <div class="form-group">
        <input type="text" v-model="pointdepart" placeholder="Point de départ" />
        <i class="material-icons-outlined">location_on</i>
      </div>
      <div class="form-group">
        <input type="text" v-model="pointarrivee" placeholder="Point d'arrivée" />
        <i class="material-icons-outlined">location_on</i>
      </div>
      <div class="form-group">
        <input type="date" v-model="date" placeholder="Date de départ" />
        <i class="material-icons-outlined">event</i>
      </div>
      <div class="time-input">
        <input type="time" v-model="heure" placeholder="Heure de départ" />
        <i class="material-icons-outlined">access_time</i>
      </div>
      <div class="input-button-create">
        <button class="add-button">Créer un trajet</button>
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

.create-container {
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

.input-button-create {
  text-align: center;
}

.form-group {
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

.add-button {
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

.add-button:hover {
  background-color: #e3d1a6;
}

input[type="time"]::-webkit-calendar-picker-indicator {
  display: none;
}

input[type="time"]::-webkit-clear-button {
  display: none;
}

input[type="time"]::-webkit-inner-spin-button {
  display: none;
}
</style>