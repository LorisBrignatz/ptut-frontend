import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import CreationView from '../views/CreationView.vue'
import ResearchView from '../views/ResearchView.vue'
import RequestView from '../views/RequestView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from "../views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: LoginView
        },
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
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        }
    ]
})
export default router
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});