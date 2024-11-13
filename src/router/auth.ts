import {RouteRecordRaw} from "vue-router";

export default {
    path: '/auth',
    component: () => import('@/layout/auth.vue'),
    children: [
        {path: 'login', name: 'login', component: () => import('@/views/auth/login.vue')},
        {path: 'repassword', name: 'repassword', component: () => import('@/views/auth/repassword.vue')},
        {path: 'register', name: 'register', component: () => import('@/views/auth/register.vue')}
    ]
} as RouteRecordRaw;
