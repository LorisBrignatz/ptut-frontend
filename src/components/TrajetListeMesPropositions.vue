<script setup>
import { reactive, onMounted } from "vue";
import { BACKEND, BACKENDPOST } from "../api";
import axios from "axios";
import Trajet from "../Trajet.js";
import TrajetItem from "@/components/TrajetItem.vue"
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const { user } = store.state.auth;
const currentUser = user;

const listeTrajets = reactive([]);
/*
  axios.get(BACKEND+'/trajets')
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
function chargeTrajets() {

  const fetchOptions = { method: "GET" };
  fetch(BACKEND+'/trajets/search/findByUserid?userid='+ currentUser.userid, fetchOptions)
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        listeTrajets.splice(0, listeTrajets.length);
        dataJSON._embedded.trajets.forEach((trajets) => {
          listeTrajets.push(new Trajet(trajets.numtrajet, trajets.userid, trajets.idpointdepart, trajets.idpointarrivee, trajets.datedepart, trajets.heuredepart, trajets.datefin));
        })})
      .catch((error) => console.log(error));

}


/**
 * Supprime une entité
 * @param numTrajet l'URI de l'entité à supprimer
 */
function deleteTrajet(numTrajet) {
  const fetchOptions = {
    method: "POST",
    mode: "cors",
  };
  fetch(BACKENDPOST+'/services/trajets/annuler?numtrajet='+numTrajet, fetchOptions)
      .then((response) => {
        console.log(response)
        chargeTrajets()

        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        chargeTrajets();

      })
      .catch((error) => console.log(error));
}

// A l'affichage du composant, on affiche la liste
onMounted(() => {
  chargeTrajets();
});


</script>


<template>
  <TrajetItem
      v-for="trajet of listeTrajets"
      :key="trajet.numTrajet"
      :trajet="trajet"
      @deleteC="deleteTrajet"
  />
  <p class="oups" v-if="listeTrajets.length==0"><i class="material-icons-outlined" style="color: rgb(204, 181, 120)">sentiment_dissatisfied</i><br>  Oups, c'est un peu vide ici.. <br> Vous pouvez proposer des trajets <RouterLink to="/creation"> ici </RouterLink> </p>

</template>

<style scoped>
.oups{
  text-align: center;
  margin-bottom: 50px;
  color: #cab174;
}
</style>