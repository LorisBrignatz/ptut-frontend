<script setup>
import { reactive, onMounted } from "vue";
import { BACKEND, doAjaxRequest } from "../api";
import axios from "axios";
import Trajet from "../Trajet.js";
import TrajetItem from "@/components/TrajetItem.vue"

/*
let data = reactive({
  // Les données saisies dans le formulaire
  formulaireCategorie: { ...categorieVide },
  // La liste des catégories affichée sous forme de table
  listeTrajets: []
});

 */
const listeTrajetsRes = reactive([]);
function chargeTrajetsRecherchePointArrivee(nomParrivee) {
  const fetchOptions = { method: "GET" };
  fetch('http://localhost:8989/api/trajets/search/findByPointNameArriveet?nomP='+ nomParrivee, fetchOptions)
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        listeTrajets.splice(0, listeTrajets.length);
        dataJSON._embedded.trajets.forEach((trajets) => {
          listeTrajets.push(new Trajet(trajets.numtrajet, trajets.userid, trajets.idpointdepart, trajets.idpointarrivee, trajets.datedepart, trajets.heure, trajets.datefin));
        })})
      .catch((error) => console.log(error));
  /*
  axios.get('http://localhost:8989/api/trajets/search/findByPointNameArriveet?nomP='+ nomParrivee)
      .then(response => {
        console.log(response.data);

        listeTrajets.splice(0, listeTrajets.length);
        response.data._embedded.trajets.forEach((trajets) => {
          listeTrajets.push(new Trajet(trajets.numtrajet, trajets.userid, trajets.idpointdepart, trajets.idpointarrivee, trajets.datedepart, trajets.heure, trajets.datefin));

        });

      })
      .catch(error => {
        console.log(error);
      });

   */

  /*
  const fetchOptions = { method: "GET",  headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': 'http://localhost:8989/'
    },};
  fetch(BACKEND + "/api/trajets", fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        listeTrajets.splice(0, listeTrajets.length);
        dataJSON.forEach((t) =>
            listeTrajets.push(new Trajet(t.numTrajet, t.conducteur, t.pointdepart, t.pointarrivee, t.date, t.heure), t.datefin)
        );
      })
      .catch((error) => console.log(error));


   */
}


/**
 * Supprime une entité
 * @param entityRef l'URI de l'entité à supprimer
 */

// A l'affichage du composant, on affiche la liste
onMounted(chargeTrajetsRecherchePointArrivee);
</script>


<template>
  <TrajetItem
      v-for="trajet of listeTrajetsRes"
      :key="trajet.numTrajet"
      :trajet="trajet"
  />

</template>

<style scoped>

</style>