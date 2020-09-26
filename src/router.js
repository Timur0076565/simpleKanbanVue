import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
    ]
})
export default router