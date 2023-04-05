import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import CreationView from '../views/CreationView.vue'
import ResearchView from '../views/ResearchView.vue'
import RequestView from '../views/RequestView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Accueil',
            component: HomePage
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
        },
        {
            path: '/profile',
            name: 'Profil',
            component: ProfileView
        }
    ]
})
export default router
