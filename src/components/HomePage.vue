<script setup>
/*import { reactive, onMounted } from "vue";
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

</template>

<style scoped>

</style>