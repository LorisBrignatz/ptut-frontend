<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import BottomNavbar from './components/BottomNavbar.vue';
import './components/BottomNavbar.scss';
import './components/BottomNavbar';
import HomePage from './components/HomePage.vue';
import CreationPage from './components/CreationPage.vue';
import ProfilePage from './components/ProfilePage.vue';
import RequestPage from './components/RequestPage.vue';
import ResearchPage from './components/ResearchPage.vue';

export default {
  name: 'App',
  components: {
    BottomNavbar,
  },
  data() {
    return {
      title: 'Les Copaings',
    };
  },
  created() {
    document.title = this.title;
  },
};

</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
  <BottomNavbar/>
</template>

<style scoped>

</style>
