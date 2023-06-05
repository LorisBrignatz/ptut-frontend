<script setup>
import {BACKEND} from "@/api";
import {onMounted, reactive, ref} from "vue";
import DemandeDeTrajetItem from "@/components/DemandeDeTrajetItem.vue";
import DemandeDeTrajet from "@/DemandeDeTrajet";
import RequestCreationPage from "@/components/RequestCreationPage.vue"

const listeDemandeDeTrajets = reactive([]);
const ajoutReussi = ref(false)
const erreurCreation = ref(false)

import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const { user } = store.state.auth;
const currentUser = user;

function chargeDemandeDeTrajets() {

  const fetchOptions = { method: "GET" };
  fetch(BACKEND+'/demandeDeTrajets', fetchOptions)
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        listeDemandeDeTrajets.splice(0, listeDemandeDeTrajets.length);
        dataJSON._embedded.demandeDeTrajets.forEach((demandeDeTrajets) => {
          listeDemandeDeTrajets.push(new DemandeDeTrajet(demandeDeTrajets.numTrajet, demandeDeTrajets.userID, demandeDeTrajets.idpointDepart, demandeDeTrajets.idpointArrivee, demandeDeTrajets.dateDepart, demandeDeTrajets.heureDepart));
          listeDemandeDeTrajets.forEach((demandeDeTrajets) => {console.log(demandeDeTrajets)});
        })})
      .catch((error) => console.log(error));

}

function deleteTrajet(numTrajet) {
  const fetchOptions = {
    method: "DELETE",
  };
  fetch(BACKEND + "/demandeDeTrajets/"+numTrajet, fetchOptions)
      .then((response) => {
        console.log(response)
        chargeDemandeDeTrajets()

        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        chargeDemandeDeTrajets();

      })
      .catch((error) => console.log(error));
}

function checkDemande(numTrajet){
  console.log(numTrajet)
  const url = '/services/demandeDeTrajets/valider?nom=' + currentUser.nom + '&prenom=' + currentUser.prenom +"&numTrajet="+ numTrajet
  console.log(url)
  fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        },


      })
      .then(response => {
        return response.json()})
      .then(data => {
        console.log(data);
        chargeDemandeDeTrajets();

      })
      .catch(error => {
        console.error('Une erreur est survenue:', error);

      });


}
function posterDemande(nom, prenom, pointdepart, pointarrivee, date, heure) { //titre, prix, qtestock
  console.log(nom, prenom, pointdepart, pointarrivee, date, heure);
  fetch('/services/demandeDeTrajets/ajouter?nom=' + nom + '&prenom=' + prenom
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
        chargeDemandeDeTrajets();
      })
      .catch(error => {
        console.error('Une erreur est survenue:', error);

      });
}


onMounted(() => {
  chargeDemandeDeTrajets();
});
</script>


<template>
  <RequestCreationPage
      @AddRequest="posterDemande"
  />
  <p v-if="ajoutReussi">Ajouté avec succès</p>
  <p v-if="erreurCreation">Erreur lors de la création</p>
  <DemandeDeTrajetItem
      v-for="demandeDeTrajet of listeDemandeDeTrajets"
      :key="demandeDeTrajet.numTrajet"
      :demandeDeTrajet="demandeDeTrajet"
      @deleteC="deleteTrajet"
      @checkC="checkDemande"

  />

</template>

<style scoped>

</style>