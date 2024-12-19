import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  redirect: { name: 'home' },
  component: () => import('@/layout/front.vue'),
  children: [
    { path: 'home', name: 'home', component: () => import('@/views/home.vue') },
    { path: 'markdown', name: 'markdown', component: () => import('@/views/markdown.vue') },
    { path: 'list', name: 'list', component: () => import('@/views/list.vue') },
  ],
} as RouteRecordRaw;
