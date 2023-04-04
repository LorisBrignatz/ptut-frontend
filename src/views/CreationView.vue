<template>
  <main>
    <CreationPage />
    <BottomNavbar />
  </main>
</template>

<script>
import {defineComponent} from "vue";
import CreationPage from "@/App.vue";
import BottomNavbar from "@/App.vue";

export default defineComponent({
  components: {BottomNavbar, CreationPage}
})

</script>

<style scoped>

</style>