// import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            meta: {layout: 'empty'},
            component: () => import('./views/Login.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            meta: {layout: 'main'},
            component: () => import('./views/Dashboard.vue')
        },
        {
            path: '/posts',
            name: 'posts',
            meta: {layout: 'main'},
            component: () => import('./views/Posts.vue')
        },
    ]
})
export default router