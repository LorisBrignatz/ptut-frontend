<script setup>
import {defineComponent, onMounted, reactive, ref} from "vue";
import ResearchPage from "../components/ResearchPage.vue";
import TrajetItem from "@/components/TrajetItem.vue";
import Trajet from "@/Trajet";
import {BACKEND} from "@/api";


const listeTrajetsRes = reactive([]);

function chargeTrajetsRecherchePointArrivee(pointarrivee) {

  const fetchOptions = {method: "GET", mode:'cors'};
  const url = BACKEND+'/trajets/search/findByPointNameArrivee?nomP='+pointarrivee
  //console.log(url)
  fetch(url, fetchOptions)
  //fetch('http://localhost:8989/api/trajets/search/findByPointNameArrivee?nomP=isis', fetchOptions)

      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        listeTrajetsRes.splice(0, listeTrajetsRes.length);
        dataJSON._embedded.trajets.forEach((trajets) => {
          listeTrajetsRes.push(new Trajet(trajets.numtrajet, trajets.userid, trajets.idpointdepart, trajets.idpointarrivee, trajets.datedepart, trajets.heure, trajets.datefin));
        })


      })
      .catch((error) => console.log(error));
}
function deleteTrajet(numTrajet) {
  alert(numTrajet);
  const fetchOptions = {
    method: "DELETE",
  };
  fetch(BACKEND + "/trajets/" + numTrajet, fetchOptions)
      .then((response) => {
        return response.json();

      })
      .then((dataJSON) => {
        console.log(dataJSON);
        alert("je fonctionne");
        chargeTrajets()
      })
      .catch((error) => console.log(error));
}


// A l'affichage du composant, on affiche la liste
onMounted(() => {
  chargeTrajetsRecherchePointArrivee();
});
</script>

<template>
  <main>
    <ResearchPage
        @search="chargeTrajetsRecherchePointArrivee"
    />
    <TrajetItem
        v-for="trajet of listeTrajetsRes"
        :key="trajet.numTrajet"
        :trajet="trajet"
        @deleteC="deleteTrajet"
    />
    <p v-if="listeTrajetsRes.length==0 ">
    Aucun résultat
    </p>
  </main>
</template>

<style scoped>
p {
  font-family: 'Blinker', sans-serif;
  margin-top: 10px;
  text-align: center;
}
</style>