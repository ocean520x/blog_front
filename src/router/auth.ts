import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/register.vue')
  },
  {
    path: '/repassword',
    name: 'repassword',
    component: () => import('@/views/auth/repassword.vue')
  }
] as RouteRecordRaw[];
