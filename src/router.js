import Vue from 'vue'
import VueRouter from 'vue-router'

// import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'
// import Posts from './views/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            meta: {layout: 'empty'},
            component: Login
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