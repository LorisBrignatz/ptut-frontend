<template>
  <div>
    <button @click="showPopup = true">Ouvrir le pop-up</button>

    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <h2>Entrez votre nom et prénom</h2>
        <form @submit.prevent="handleSubmit">
          <label>
            Nom :
            <input type="text" v-model="nom" />
          </label>
          <br />
          <label>
            Prénom :
            <input type="text" v-model="prenom" />
          </label>
          <br />
          <button type="submit">Enregistrer</button>
          <button type="button" @click="showPopup = false">Fermer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showPopup = ref(false);
const nom = ref('');
const prenom = ref('');

function handleSubmit() {
  console.log(`Nom : ${nom.value}, Prénom : ${prenom.value}`);
  showPopup.value = false;
}
</script>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
