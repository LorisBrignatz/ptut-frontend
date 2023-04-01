<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import BottomNavbar from './components/BottomNavbar.vue';
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
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/creation', component: CreationPage },
    { path: '/profile', component: ProfilePage },
    { path: '/request', component: RequestPage },
    { path: '/research', component: ResearchPage },
  ],
};

</script>

<template>
  <div id="app">
    <router-view/>
    <BottomNavbar/>
  </div>
</template>

<style scoped>
/*header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}*/
</style>
