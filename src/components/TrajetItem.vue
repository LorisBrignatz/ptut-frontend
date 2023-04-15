<script setup>
import Trajet from "@/Trajet";
import {onMounted, ref, defineProps, reactive} from "vue";
import {BACKEND} from "@/api";
import PassagersComponents from "@/components/PassagersComponents.vue";

const props = defineProps({
  trajet: Trajet
});
const emit = defineEmits(["deleteC"]);

const name = ref('');
const pointdepartName = ref('');
const pointarriveeName = ref('');
const afficherPassagers = ref(false);
const showPopup = ref(false);
const nomP = ref('');
const prenomP = ref('');
const userIDs = reactive([])
const people = reactive([])

function getName(){
  const fetchOptions = {method: "GET", mode:'cors'};
  const url = BACKEND+'/utilisateurs/search/findByUserid?userid='+ props.trajet.conducteur
  //console.log(url)
  fetch(url, fetchOptions)
      .then((response) => {
        //console.log(response)
        return response.json();
      })
      .then((dataJSON) => {
        //console.log(dataJSON);
        name.value = dataJSON.nom + ' ' + dataJSON.prenom;
      })
      .catch((error) => console.log(error));
}
function getPointDepart(){
  const fetchOptions = {method: "GET", mode:'cors'};
  const url = BACKEND+'/points/search/findByIdpoint?idpoint='+ props.trajet.pointdepart
  //console.log(url)
  fetch(url, fetchOptions)
      .then((response) => {
        //console.log(response)
        return response.json();
      })
      .then((dataJSON) => {
        //console.log(dataJSON);
        pointdepartName.value = dataJSON.nom ;
      })
      .catch((error) => console.log(error));
}
function getPointArrivee(){
  const fetchOptions = {method: "GET", mode:'cors'};
  const url = BACKEND+'/points/search/findByIdpoint?idpoint='+ props.trajet.pointarrivee
  //console.log(url)
  fetch(url, fetchOptions)
      .then((response) => {
        //console.log(response)
        return response.json();
      })
      .then((dataJSON) => {
        //console.log(dataJSON);
        pointarriveeName.value = dataJSON.nom ;
      })
      .catch((error) => console.log(error));
}
function getPassagers(){
  const fetchOptions = {method: "GET", mode:'cors'};
  const url = BACKEND+'/passagerses/search/findByNumtrajet?numtrajet='+ props.trajet.numTrajet
  console.log(url)

  fetch(url, fetchOptions)
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        dataJSON._embedded.passagerses.forEach((passager) =>{
          //console.log(passager.userid)
          userIDs.splice(0, userIDs.length);
          userIDs.push(passager.userid);
          console.log("La liste  " +userIDs)
          people.splice(0, people.length);
          for (const userId of userIDs) {
            fetch(BACKEND+'/utilisateurs/search/findByUserid?userid=' + userId, {method: "GET"})
                .then((response) => {
                  //console.log(response)
                  return response.json();
                })
                .then((dataJSON) => {
                  //console.log(dataJSON);
                  console.log(dataJSON.nom)

                  people.push({
                    firstName: dataJSON.prenom,
                    lastName: dataJSON.nom
                  });
                })
                .catch((error) => console.log(error));
          }
        });
      })
      .catch((error) => console.log(error));

}


function ajoutPassager (nom, prenom, ){
  fetch('/services/passagers/ajouter?nom=' + nomP.value + '&prenom=' + prenomP.value + '&numTrajet=' + props.trajet.numTrajet, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },
  })
      .then(response => {
        console.log(response)
        return response.json()})
      .then(data => {
        console.log('passager ok', data);
        showPopup.value = false;
        getPassagers()
      })
      .catch(error => {
        console.error('Une erreur est survenue:', error);
      });

  showPopup.value = false;

}
onMounted(() => {
  getName();
  getPointArrivee();
  getPointDepart();
  getPassagers();
});
</script>

<template>
  <div class="trip">
    <div class="trip-details">
      <h2 class="trip-driver">{{ name }}</h2>
      <div class="icon-text-container">
        <i class="material-icons-outlined">location_on</i>
        <p class="trip-start">Départ: {{ pointdepartName }}</p>
      </div>
      <div class="icon-text-container">
        <i class="material-icons-outlined">flag</i>
        <p class="trip-end">Arrivée: {{ pointarriveeName }}</p>
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
    <div class="trip-buttons-delete"> <!--$emit(trajet.numTrajet)-->
      <button class="reserve-button" @click="showPopup = true">Réserver ce trajet</button>
      <button class="delete-button" @click="$emit('deleteC', trajet.numTrajet)">Annuler ce trajet</button>
    </div>
  </div>
  <!--<PassagersComponents v-if="afficherPassagers" :numTrajet="trajet.numTrajet"></PassagersComponents>-->


  <div v-if="showPopup" class="popup">
    <div class="popup-content">
      <h2>Les Passagers de ce trajet</h2>
      <form @submit.prevent="ajoutPassager">
        <label>
          Nom :
          <input type="text" v-model="nomP" />
        </label>
        <br />
        <label>
          Prénom :
          <input type="text" v-model="prenomP" />
        </label>
        <br />
        <button type="submit" class="reserve-button">Enregistrer</button>
        <button type="button" @click="showPopup = false" class="reserve-button">Fermer</button>
      </form>
      Réservation des passagers :
        <p v-for="person in people">
          {{ person.firstName }} {{ person.lastName }}
        </p>

    </div>
  </div>

</template>

<style scoped>
.trip {
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow:0 2px 5px rgba(0, 0, 0, 0.4);
  margin-bottom: 20px;
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
  text-align: right;
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
.reserve-button {
  background-color: #ffffff;
  border: 1px solid #cab174;
  border-radius: 20px;
  color: #cab174;
  cursor: pointer;
  font-size: 12px;
  font-family: 'Blinker', sans-serif;
  margin-right: 10px;
}
.delete-button:hover {
  background-color: #cab174;
  color: #ffffff;
}
.reserve-button:hover {
  background-color: #cab174;
  color: #ffffff;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>