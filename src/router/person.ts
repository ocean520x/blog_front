import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/person',
  component: () => import('@/layout/person.vue'),
  children: [
    {
      path: 'me/:u_id',
      name: 'person.me',
      component: () => import('@/views/front/me.vue'),
    },
    {
      path: 'me_comment/:u_id',
      name: 'person.me_comment',
      component: () => import('@/views/front/meComment.vue'),
    },
  ],
} as RouteRecordRaw;
