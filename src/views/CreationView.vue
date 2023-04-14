<script setup>
import CreationPage from "../components/CreationPage.vue";
import {BACKEND} from "@/api";
import axios from "axios";
function ajouterTrajet(nom, prenom, pointdepart, pointarrivee, date, heure) { //titre, prix, qtestock
  console.log(nom, prenom, pointdepart, pointarrivee, date, heure);
  fetch('/services/trajets/ajouter?nom='+nom+'&prenom='+prenom
      +"&nompointdepart="+pointdepart+"&nompointarrivee="+pointarrivee+"&date="+date+"&heure="+heure
  //fetch('/services/trajets/ajouter'
      , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    },
/*
    body: new URLSearchParams({
      nom: nom,
      prenom: prenom,
      nompointdepart: pointdepart,
      nompointarrivee: pointarrivee,
      date: date,
      heure: heure
    })
*/

  })
      .then(response => response.json())
      .then(data => {
        console.log('Le trajet a été ajouté avec succès:', data);
      })
      .catch(error => {
        console.error('Une erreur est survenue:', error);
      });



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

 */
}
</script>

<template>
  <main>
    <CreationPage
    @addT="ajouterTrajet"
    />
  </main>
</template>

<style scoped>

</style>