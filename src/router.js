import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        component: () => import('./components/home/body.vue')
    },
    {
        path: "/kahkow/",
        component: () => import('./components/kahkow/body.vue')
    }

]

const router = createRouter({
    scrollBehavior (to, from, savedPosition) {
        return {
            behavior: 'smooth',
            top: 0
        }
    },
    history: createWebHistory('/'),
    routes: routes,
});

export default router;