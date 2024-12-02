import { RouteRecordRaw } from 'vue-router';

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
  {
    path: '/admin/category',
    redirect: { name: 'category.index' },
    component: () => import('@/layout/admin.vue'),
    meta: { auth: true, menu: { title: '帖子大类管理', sort: 2, icon: 'AllApplication' } },
    children: [
      {
        path: 'category/index',
        name: 'category.index',
        meta: { menu: { title: '帖子大类列表', routeName: 'category.index' } },
        component: () => import('@/views/admin/category/index.vue'),
      },
      {
        path: 'category/add',
        name: 'category.add',
        meta: { menu: { title: '添加帖子大类', routeName: 'category.add' } },
        component: () => import('@/views/admin/category/add.vue'),
      },
      { path: 'category/edit', name: 'category.edit', component: () => import('@/views/admin/category/edit.vue') },
    ],
  },
  {
    path: '/admin/topic',
    redirect: { name: 'topic.index' },
    component: () => import('@/layout/admin.vue'),
    meta: { auth: true, menu: { title: '帖子管理', sort: 3, icon: 'FourRoundPointConnection' } },
    children: [
      {
        path: 'topic/index',
        name: 'topic.index',
        meta: { menu: { title: '帖子列表', routeName: 'topic.index' } },
        component: () => import('@/views/admin/topic/index.vue'),
      },
      {
        path: 'topic/add',
        name: 'topic.add',
        meta: { menu: { title: '添加帖子', routeName: 'topic.add' } },
        component: () => import('@/views/admin/topic/add.vue'),
      },
      { path: 'topic/edit', name: 'topic.edit', component: () => import('@/views/admin/topic/edit.vue') },
    ],
  },
] as RouteRecordRaw[];
