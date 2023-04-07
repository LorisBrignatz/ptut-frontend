<script setup>
import TrajetListe from "@/components/TrajetListe.vue";
</script>


<template>
  <div class="container">
    <div class="logo">
      <img src="./assets/img/logoLesCopaings.png" alt="Logo">
    </div>
    <h1>Mes trajets</h1>
  </div>
  <TrajetListe />
</template>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

.logo {
  margin-top: 10px;
}

.logo img {
  max-height: 100px;
}

h1 {
  font-family: "Arial", sans-serif;
  font-size: 24px;
  margin-top: 20px;
}
</style>