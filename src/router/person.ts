import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/person',
  component: () => import('@/layout/person.vue'),
  children: [
    {
      path: 'me',
      name: 'person.me',
      component: () => import('@/views/front/me.vue'),
    },
  ],
} as RouteRecordRaw;
