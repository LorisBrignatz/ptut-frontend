<script setup>
import CreationPage from "../components/CreationPage.vue";
import {BACKEND} from "@/api";
import axios from "axios";
import TrajetItem from "@/components/TrajetItem.vue";
import {ref} from "vue";
import Trajet from "@/Trajet";
const ajoutReussi = ref(false)
const erreurCreation = ref(false)
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const { user } = store.state.auth;
const currentUser = user;
function ajouterTrajet( pointdepart, pointarrivee, date, heure) { //titre, prix, qtestock
  console.log(pointdepart, pointarrivee, date, heure);
  fetch('/services/trajets/ajouter?userid=' + currentUser.userid
      + "&nompointdepart=" + pointdepart + "&nompointarrivee=" + pointarrivee + "&date=" + date + "&heure=" + heure
      //fetch('/services/trajets/ajouter'
      , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        },


      })
      .then(response => {
          if (response.status === 200) {
              ajoutReussi.value = true
          }else {
            erreurCreation.value = true
          }
          return response.json()})
      .then(data => {
        console.log('Le trajet a été ajouté avec succès:', data);


      })
      .catch(error => {
        console.error('Une erreur est survenue:', error);

      });
}



/*
  axios.post(BACKEND + '/services/trajets/ajouter', {
    nom: nom,
    prenom: prenom,
    nompointdepart: pointdepart,
    nompointarrivee: pointarrivee,
    date: date,
    heure: heure
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    }
  })
      .then(response => {
        console.log('Le trajet a été ajouté avec succès:', response.data);
      })
      .catch(error => {
        console.error('Une erreur est survenue:', error);
      });


    /*
    body: new URLSearchParams({
      nom: nom,
      prenom: prenom,
      nompointdepart: pointdepart,
      nompointarrivee: pointarrivee,
      date: date,
      heure: heure
    })



          /*
        listeNewTrajets.splice(0, listeNewTrajets.length);

          listeNewTrajets.push(new Trajet(data.numtrajet, data.userid, data.idpointdepart, data.idpointarrivee, data.datedepart, data.heuredepart, data.datefin));
          console.log(listeNewTrajets)
*/

</script>

<template>
  <main>
    <CreationPage
    @addT="ajouterTrajet"
    />
    <p v-if="ajoutReussi">Ajouté avec succès</p>
    <p v-if="erreurCreation">Erreur lors de la création</p>
  </main>
</template>

<style scoped>

</style>