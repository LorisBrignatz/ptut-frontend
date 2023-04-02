import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/HomePage.vue'
import Creation from './components/CreationPage.vue'
import Profile from './components/ProfilePage.vue'
import Request from './components/RequestPage.vue'
import Research from './components/ResearchPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Accueil',
            component: Home
        },
        {
            path: '/search',
            name: 'Rechercher',
            component: Research
        },
        {
            path: '/creation',
            name: 'Créer',
            component: Creation
        },
        {
            path: '/request',
            name: 'Demander',
            component: Request
        },
        {
            path: '/profile',
            name: 'Profil',
            component: Profile
        }
    ]
})


