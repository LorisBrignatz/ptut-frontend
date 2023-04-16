<script setup>
import TrajetListe from "@/components/TrajetListe.vue";
</script>


<template>
  <div>
    <header>
      <div class="logo">
        <img src='/logoLesCopaings.png' alt="Logo">
      </div>
      <h1>Les trajets</h1>
    </header>
  </div>
  <TrajetListe />
</template>

<style scoped>
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