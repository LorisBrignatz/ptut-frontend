<script setup>
import {onMounted, reactive, ref} from "vue";
import {BACKEND} from "@/api";

const pointsDepartListe = reactive([]);
const pointsArriveeListe = reactive([]);
const pointdepart = ref('');
const pointarrivee = ref('');

function chargePointsContaining(){
  const fetchOptions = {method: "GET", mode:'cors'};
  const url = BACKEND+'/points/search/findByNomContaining?substring=' + pointdepart.value;
  //console.log(url)
  fetch(url, fetchOptions)
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        pointsDepartListe.splice(0, pointsDepartListe.length);
        dataJSON._embedded.points.forEach((point) => {
          pointsDepartListe.push(point.nom);
        })
      })
      .catch((error) => console.log(error));

}
function chargePointsContainingArrivee(){
  const fetchOptions = {method: "GET", mode:'cors'};
  const url = BACKEND+'/points/search/findByNomContaining?substring=' + pointarrivee.value;
  //console.log(url)
  fetch(url, fetchOptions)
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        pointsArriveeListe.splice(0, pointsArriveeListe.length);
        dataJSON._embedded.points.forEach((point) => {
          pointsArriveeListe.push(point.nom);
        })
      })
      .catch((error) => console.log(error));

}

function chargePoints(){
  const fetchOptions = {method: "GET", mode:'cors'};
  const url = BACKEND+'/points?page=0&size=1000';
  //console.log(url)
  fetch(url, fetchOptions)
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        pointsDepartListe.splice(0, pointsDepartListe.length);
        pointsArriveeListe.splice(0, pointsDepartListe.length);

        dataJSON._embedded.points.forEach((point) => {
          pointsDepartListe.push(point.nom);
        })
        dataJSON._embedded.points.forEach((point) => {
          pointsArriveeListe.push(point.nom);
        })
      })
      .catch((error) => console.log(error));

}
onMounted(() => {
  chargePoints();
})
</script>

<template>
  <h2>Créez un trajet</h2>
  <div class="create-container">
    <form class="form-add" @submit.prevent="$emit('addT', $refs.pointdepartSelect.value, $refs.pointarriveeSelect.value, date, heure)">
      <div class="form-group">
        <div>
          <input type="text" v-model="pointdepart" @input="chargePointsContaining" placeholder="Point de départ" />
          <i class="material-icons-outlined">location_on</i>
        </div>
        <select ref="pointdepartSelect">
          <option v-for="point in pointsDepartListe" :value="point">{{ point }}</option>
        </select>
      </div>

      <div class="form-group">
        <div>
          <input type="text" v-model="pointarrivee" @input="chargePointsContainingArrivee" placeholder="Point d'arrivée" />
          <i class="material-icons-outlined">location_on</i>
        </div>
        <select ref="pointarriveeSelect">
          <option v-for="point in pointsArriveeListe" :value="point">{{ point }}</option>
        </select>
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

select {
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
  font-family: 'Blinker', sans-serif;
  color: #666;
  appearance: none; /* Masquer l'apparence par défaut du sélecteur */
  background-color: transparent; /* Fond transparent */
}

select:focus {
  outline: none; /* Supprimer l'effet de focus par défaut */
}

select::-ms-expand {
  display: none; /* Masquer la flèche de déroulement pour les navigateurs Internet Explorer */
}

.select-icon {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  color: #ccc;
}

/* Style personnalisé pour les options du sélecteur */
select option {
  background-color: #ffffff;
  color: #666;
  font-family: 'Blinker', sans-serif;
}

/* Style personnalisé pour l'option sélectionnée */
select option:checked {
  background-color: #cab174;
  color: #fff;
}

</style>