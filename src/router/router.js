import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/HomePage.vue'
import CreationView from '../views/CreationView.vue'
import ResearchView from '../views/ResearchView.vue'
import RequestView from '../views/RequestView.vue'
/*import Profile from './components/ProfilePage.vue'*/

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Accueil',
            component: Home
        },
        {
            path: '/search',
            name: 'Rechercher',
            component: ResearchView
        },
        {
            path: '/creation',
            name: 'Créer',
            component: CreationView
        },
        {
            path: '/request',
            name: 'Demander',
            component: RequestView
        }
        /*{
            path: '/profile',
            name: 'Profil',
            component: Profile
        }*/
    ]
})
export default router
