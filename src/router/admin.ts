import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/admin',
    redirect: { name: 'user.index' },
    name: 'admin',
    component: () => import('@/layout/admin.vue'),
    meta: { auth: true, menu: { title: '用户管理', sort: 1, icon: 'EveryUser' } },
    children: [
      {
        path: 'user/index',
        name: 'user.index',
        meta: { menu: { title: '用户列表', routeName: 'user.index' } },
        component: () => import('@/views/admin/user/index.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
