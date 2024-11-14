import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/:any(.*)',
  component: import('@/views/error/404.vue')
} as RouteRecordRaw;