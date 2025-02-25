import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/member',
  component: () => import('@/layout/member.vue'),
  redirect: { name: 'member.me' },
  meta: { auth: true },
  children: [
    {
      path: 'me',
      name: 'member.me',
      component: () => import('@/views/front/memberMe.vue'),
    },
  ],
} as RouteRecordRaw;
