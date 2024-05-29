import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from '../constantes';
import Home from "../pages/Home/Home.vue"
import User from "../pages/User/User.vue"
import Detail from "../pages/Detail/Detail.vue"
import Friends from '../pages/Friends/Friends.vue';
import Pokemons from '../pages/Pokemon/Pokemon.vue';

const routes = [
    {
        path: ROUTES.home,
        name: 'Home',
        component: Home
    },
    {
        path: ROUTES.user,
        name:"User",
        component: User
    },
    {
        path: ROUTES.detail,
        name: 'Detail',
        component: Detail
    },
    {
        path: ROUTES.friends,
        name: 'Friends',
        component: Friends
    },
    {
        path: ROUTES.pokemons,
        name: 'Friends',
        component: Pokemons
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;