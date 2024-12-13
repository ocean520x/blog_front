import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/auth',
  component: () => import('@/layout/auth.vue'),
  children: [
    { path: 'login', name: 'login', meta: { guest: true }, component: () => import('@/views/auth/login.vue') },
    {
      path: 'repassword',
      name: 'repassword',
      meta: { guest: true },
      component: () => import('@/views/auth/repassword.vue'),
    },
    { path: 'register', name: 'register', meta: { guest: true }, component: () => import('@/views/auth/register.vue') },
  ],
} as RouteRecordRaw;
