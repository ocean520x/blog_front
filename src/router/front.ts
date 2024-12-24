import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  redirect: { name: 'home' },
  component: () => import('@/layout/front.vue'),
  children: [
    { path: 'home', name: 'home', component: () => import('@/views/home.vue') },
    { path: 'perCategory/:c_id', name: 'per.category', component: () => import('@/views/home.vue') },
    { path: 'list', name: 'list', component: () => import('@/views/list.vue') },
  ],
} as RouteRecordRaw;
