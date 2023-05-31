<script setup>
import DemandeDeTrajetListe from "@/components/DemandeDeTrajetListe.vue";

</script>


<template>
  <div>
    <header>
      <div class="logo">
        <img src='/logoLesCopaings.png' alt="Logo">
      </div>
      <h1>Les demandes de trajets</h1>
    </header>
  </div>
  <h3> Créer une demande de trajet</h3>
  <DemandeDeTrajetListe />
</template>

<style scoped>
h3 {
  font-family: 'Blinker', sans-serif;
  color: #cab174;
  margin-top: 15px;
}
.logo {
  margin-top: 0px;
  text-align: center;
  margin-top: -80px;
}
.logo img {
  max-height: 150px;
}
h1 {
  font-family: 'Blinker', sans-serif;
  font-size: 24px;
  margin-top: -10px;
  color: #cab174;
  text-align: center;
}
</style>