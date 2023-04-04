import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/HomePage.vue'
import CreationView from './views/CreationView.vue'
/*import Profile from './components/ProfilePage.vue'
import Request from './components/RequestPage.vue'
import Research from './components/ResearchPage.vue'*/

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Accueil',
            component: Home
        },
       /* {
            path: '/search',
            name: 'Rechercher',
            component: Research
        },*/
        {
            path: '/creation',
            name: 'Créer',
            component: CreationView
        },
      /*  {
            path: '/request',
            name: 'Demander',
            component: Request
        },
        {
            path: '/profile',
            name: 'Profil',
            component: Profile
        }*/
    ]
})

export default router

