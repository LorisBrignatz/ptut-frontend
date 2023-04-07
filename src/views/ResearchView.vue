<script>
import {defineComponent} from "vue";
import ResearchPage from "../components/ResearchPage.vue";
import TrajetListeRecherche from "@/components/TrajetListeRecherche.vue";

export default defineComponent({
  components: {TrajetListeRecherche, ResearchPage }
})
</script>

<template>
  <main>
    <ResearchPage />
    <TrajetListeRecherche />
  </main>
</template>

<style scoped>

</style>