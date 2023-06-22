<script setup>
import Trajet from "@/Trajet";
import {onMounted, ref, defineProps, reactive} from "vue";
import {BACKEND, BACKENDPOST} from "@/api";
import PassagersComponents from "@/components/PassagersComponents.vue";

import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import axios from "axios";

const store = useStore();
const router = useRouter();

const { user } = store.state.auth;
const currentUser = user;
let trajetComplet = false;


const props = defineProps({
  trajet: Trajet
});
const emit = defineEmits(["deleteC", "resaSuppr"]);

const name = ref('');
const pointdepartName = ref('');
const pointarriveeName = ref('');
const afficherPassagers = ref(false);
const showPopup = ref(false);
const nomP = ref('');
const prenomP = ref('');
const userIDs = reactive([])
const people = reactive([])
const site = ref('');

function getName(){
  const fetchOptions = {method: "GET", mode:'cors'};
  const url = BACKEND+'/utilisateurs/search/findByUserid?userid='+ props.trajet._conducteur
  //console.log(props.trajet._conducteur);
  //console.log(url)
  fetch(url, fetchOptions)
      .then((response) => {
        //console.log(response)
        return response.json();
      })
      .then((dataJSON) => {
        //console.log(dataJSON);
        name.value = dataJSON.nom + ' ' + dataJSON.prenom;
        site.value = dataJSON.idPointSite;
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
        userIDs.splice(0, userIDs.length);
        dataJSON._embedded.passagerses.forEach((passager) =>{
          //console.log(passager.userid)

          userIDs.push(passager.userid);
          //console.log("La liste  " +userIDs)
          if( userIDs.length >=3 ){
            trajetComplet =true;
          }
        });
          people.splice(0, people.length);
          for (const userId of userIDs) {
            fetch(BACKEND+'/utilisateurs/search/findByUserid?userid=' + userId, {method: "GET"})
                .then((response) => {
                  //console.log(response)
                  return response.json();
                })
                .then((dataJSON) => {
                  //console.log(dataJSON);
                  //console.log(dataJSON.nom)

                  people.push({
                    firstName: dataJSON.prenom,
                    lastName: dataJSON.nom,
                    idPointSite: dataJSON.idPointSite
                  });
                })
                .catch((error) => console.log(error));
          }

      })
      .catch((error) => console.log(error));

}
function supprPassager() {
  const url = BACKEND + '/passagerses/search/findByNumtrajetAndUserid?numtrajet=' + props.trajet.numTrajet + '&userid=' + currentUser.userid
  //console.log(url)
  fetch(url, {method: "GET", mode: 'cors'})
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((dataJSON) => {

        console.log(dataJSON);
        fetch(BACKEND + "/passagerses/" + dataJSON.id
            , {method: "DELETE", mode: 'cors'})
            .then((response) => {
              getPassagers();

              console.log(response)
              //setTimeout(() => {
                //getPassagers();
              //  window.location.reload();
             // }, 500);
              return response.json();

            })
            .then((dataJSON) => {
              console.log(dataJSON);
            })
            .catch((error) => console.log(error));


      })
      .catch((error) => console.log(error));
}



function ajoutPassager (){
  fetch(BACKENDPOST+'/services/passagers/ajouter?userid='+ currentUser.userid+'&numTrajet=' + props.trajet.numTrajet, {
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
      <h2 class="trip-driver">{{ name }} - <span v-if="site==1"> BOUSQU </span><span v-if="site==2">ROSBET</span> </h2>
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
      <button class="reserve-button" @click="showPopup = true" v-if="currentUser.userid == trajet.conducteur">Voir les passagers</button>
      <button class="reserve-button" v-if="!userIDs.includes(currentUser.userid) && currentUser.userid != trajet.conducteur && trajetComplet == false" @click="ajoutPassager">Réserver ce trajet</button>
      <button class="reserve-button" v-if="!userIDs.includes(currentUser.userid) && currentUser.userid != trajet.conducteur && trajetComplet == true" disabled>Complet</button>
      <button class="reserve-button" v-if="userIDs.includes(currentUser.userid) && currentUser.userid != trajet.conducteur" @click="supprPassager" >Annuler ma réservation</button>

      <button class="delete-button" @click="$emit('deleteC', trajet.numTrajet)" v-if="currentUser.userid == trajet.conducteur">Annuler ce trajet</button>
    </div>
  </div>
  <!--<PassagersComponents v-if="afficherPassagers" :numTrajet="trajet.numTrajet"></PassagersComponents>-->


  <div v-if="showPopup" class="popup">
    <div class="popup-content">
      <h2>Passager(s) de ce trajet</h2>

      <h3>Déjà enregistré(s) :</h3>
        <p v-for="person in people">
          {{ person.firstName }} {{ person.lastName }} - <span v-if="person.idPointSite==1"> BOUSQU </span><span v-if="person.idPointSite==2">ROSBET</span>
        </p>
      <div class="input-button">
        <button type="button" @click="showPopup = false" class="reserve-button">Fermer</button>
      </div>

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
  z-index: 2;
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