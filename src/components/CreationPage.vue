<script>
import { ref } from "vue";
const libelle = ref("");
/*const emit = defineEmits(["addT"]);*/
export default {
  name: "CreationPage"
}
</script>

<template>
  <div>
    <h1>Créer un trajet</h1>
    <form class="form-add" @submit.prevent="$emit('addT',nom, prenom, pointdepart, pointarrivee, date, heure)">
      <div class="form-group">
        <input type="text" v-model="nom" placeholder="Votre nom" />
      </div>
      <div class="form-group">
        <input type="text" v-model="prenom" placeholder="Votre Prenom" />
      </div>
      <div class="form-group">
        <input type="text" v-model="pointdepart" placeholder="Point de départ" />
      </div>
      <!--
      <div class="form-group">
        <input type="text" v-model="pointpassage" placeholder="Point(s) de passage(s)" />
      </div>
      -->
      <div class="form-group">
        <input type="text" v-model="pointarrivee" placeholder="Point d'arrivée" />
      </div>
      <div class="form-group">
        <input type="date" v-model="date" placeholder="Date" />
      </div>
      <div class="time-input">
        <input type="time" v-model="heure" placeholder="Heure" />
      </div>
      <!--
      <div class="form-group">
        <input type="number" v-model="nbPlaces" placeholder="Nombre de places disponibles" />
      </div>
      <div class="form-group">
        <label>Trajet récurrent ?</label>
        <input type="checkbox" v-model="recurrent" />
      </div>
      <div v-if="recurrent" class="form-group">
        <input type="text" v-model="frequence" placeholder="Fréquence" />
      </div>('addT', pointdepart, pointpassage, pointarrivee, date, heure,-->
      <button class="add-button"><!-- @click="$emit('addT',nom, prenom, pointdepart, pointarrivee, date, heure)">-->Créer</button>
    </form>
  </div>
</template>

<style scoped>

</style>