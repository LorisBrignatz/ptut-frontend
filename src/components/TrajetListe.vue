<script setup>
import { reactive, onMounted } from "vue";
import { BACKEND, doAjaxRequest } from "../api";
import axios from "axios";
import Trajet from "../Trajet.js";
import TrajetItem from "@/components/TrajetItem.vue"

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
  const currentDate = new Date(); // Obtient la date actuelle
  const fetchOptions = { method: "GET" };
  fetch(BACKEND+'/trajets', fetchOptions)
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        listeTrajets.splice(0, listeTrajets.length);
        dataJSON._embedded.trajets.forEach((trajets) => {
          if(new Date(trajets.datedepart) > currentDate) {
            listeTrajets.push(new Trajet(trajets.numtrajet, trajets.userid, trajets.idpointdepart, trajets.idpointarrivee, trajets.datedepart, trajets.heuredepart, trajets.datefin));
          }else {
            deleteTrajet(trajets.numtrajet);
          }
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
  fetch('/services/trajets/annuler?numtrajet='+numTrajet, fetchOptions)
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




/*
import CreationPage from "./CreationPage.vue";
import Trajet from "../Trajet";
import ResearchPage from "@/components/ResearchPage.vue";
const listeT = reactive([]);
const url =
function handlerQuantitePlus(trajet) {
  console.log(trajet);
  trajet.TrajetIncrementation();
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({"id": trajet.id, "pointdepart": trajet.pointdepart, "pointpassage": trajet.pointpassage, "pointarrivee": trajet.pointarrivee, "date": trajet.date, "heure": trajet.heure}),
  };
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        getTrajets();
      })
      .catch((error) => console.log(error));
}
function handlerQuantiteMoins(trajet) {
  console.log(trajet);
  trajet.TrajetDecrementation();
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({"id": trajet.id, "pointdepart": trajet.pointdepart, "pointpassage": trajet.pointpassage, "pointarrivee": trajet.pointarrivee, "date": trajet.date, "heure": trajet.heure}),
  };
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        if (livre.qtestock == 0){
          handlerDelete(livre.id)
        }
        getLivres();
      })
      .catch((error) => console.log(error));
}
function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  fetch(url + "/" + id, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        getLivres();
      })
      .catch((error) => console.log(error));
}
function handlerAdd(titre, qtestock, prix) {
  console.log(titre, qtestock, prix);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ titre: titre, qtestock: qtestock, prix: prix }),
  };
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        getLivres();
      })
      .catch((error) => console.log(error));
}
function getLivres() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        listeL.splice(0, listeL.length);
        dataJSON.forEach((v) =>
            listeL.push(new Livre(v.id, v.titre, v.qtestock, v.prix))
        );
      })
      .catch((error) => console.log(error));
}
const ListLSearch = reactive([]);
function getRecherche(motcle) {
  const fetchOptions = { method: "GET" };
  fetch(url +"?search=" + motcle, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        ListLSearch.splice(0, ListLSearch.length);
        dataJSON.forEach((v) =>
            ListLSearch.push(new Livre(v.id, v.titre, v.qtestock, v.prix))
        );
      })
      .catch((error) => console.log(error));
}
onMounted(() => {
  getLivres();
  getRecherche();
});*/
</script>


<template>
  <TrajetItem
      v-for="trajet of listeTrajets"
      :key="trajet.numTrajet"
      :trajet="trajet"
      @deleteC="deleteTrajet"
      @resaSuppr="chargeTrajets"
  />

</template>

<style scoped>

</style>