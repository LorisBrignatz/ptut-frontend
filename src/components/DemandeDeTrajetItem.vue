<script setup>
import DemandeDeTrajet from "@/DemandeDeTrajet";
import {onMounted, ref, defineProps, reactive} from "vue";
import {BACKEND} from "@/api";
import PassagersComponents from "@/components/PassagersComponents.vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const { user } = store.state.auth;
const currentUser = user;

const props = defineProps({
  demandeDeTrajet: DemandeDeTrajet
});
const emit = defineEmits(["deleteC", "checkC"]);

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
  const url = BACKEND+'/utilisateurs/search/findByUserid?userid='+ props.demandeDeTrajet.demandeur
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
  const url = BACKEND+'/points/search/findByIdpoint?idpoint='+ props.demandeDeTrajet.pointdepart
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
  const url = BACKEND+'/points/search/findByIdpoint?idpoint='+ props.demandeDeTrajet.pointarrivee
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


onMounted(() => {
  getName();
  getPointArrivee();
  getPointDepart();
});
</script>

<template>
  <div class="trip">
    <div class="trip-details">
        <h2 class="trip-driver"><span class="material-icons-outlined">add_comment</span>
          {{ name }}</h2>

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
        <p class="trip-date">Date: {{ demandeDeTrajet.date }}</p>
      </div>
      <div class="icon-text-container">
        <i class="material-icons-outlined">schedule</i>
        <p class="trip-time">Heure: {{ demandeDeTrajet.heure }}</p>
      </div>
    </div>
    <div class="trip-buttons-delete"> <!--$emit(trajet.numTrajet)-->
      <button class="check-button" v-if="currentUser.userid != demandeDeTrajet.demandeur" @click="$emit('checkC', demandeDeTrajet.numTrajet)">Valider cette damande</button>
      <button class="delete-button" v-if="currentUser.userid == demandeDeTrajet.demandeur" @click="$emit('deleteC',  demandeDeTrajet.numTrajet)">Annuler ma demande</button>
    </div>
  </div>
  <!--<PassagersComponents v-if="afficherPassagers" :numTrajet="trajet.numTrajet"></PassagersComponents>-->



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
.check-button {
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
.check-button:hover {
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
  border-radius: 20px;
}

.input-button {
  text-align: center;
}

h2 {
  font-family: 'Blinker', sans-serif;
  color: #cab174;
  font-size: 24px;
}

label {
  font-family: 'Blinker', sans-serif;
  color: #181c32;
}

p {
  font-family: 'Blinker', sans-serif;
  color: #181c32;
}

h3 {
  font-family: 'Blinker', sans-serif;
  color: #181c32;
}
</style>