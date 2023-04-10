<script setup>
import CreationPage from "../components/CreationPage.vue";
import {BACKEND} from "@/api";
function ajouterTrajet(nom, prenom, pointdepart, pointarrivee, date, heure) { //titre, prix, qtestock
  console.log(nom, prenom, pointdepart, pointarrivee, date, heure);

  fetch(BACKEND+'/services/trajets/ajouter', {
    method: 'POST', mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: new URLSearchParams({
      nom: nom,
      prenom: prenom,
      nompointdepart: pointdepart,
      nompointarrivee: pointarrivee,
      date: date,
      heure: heure
    })
  })
      .then(response => response.json())
      .then(data => {
        console.log('Le trajet a été ajouté avec succès:', data);
      })
      .catch(error => {
        console.error('Une erreur est survenue:', error);
      });
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