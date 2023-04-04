<script setup>
import {RouterLink, RouterView} from 'vue-router'
import BottomNavbar from "./components/BottomNavbar.vue";
</script>

<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/creation">About</RouterLink>
    </nav>
  </div>
  <RouterView />
  <BottomNavbar />
</template>

<style scoped>

</style>
