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
      {
        path: 'user/detail/:u_id',
        name: 'admin.user.detail',
        meta: { notHistory: true },
        component: () => import('@/views/admin/user/detail.vue'),
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
        path: 'index',
        name: 'category.index',
        meta: { menu: { title: '帖子大类列表', routeName: 'category.index' } },
        component: () => import('@/views/admin/category/index.vue'),
      },
      {
        path: 'add',
        name: 'category.add',
        meta: { menu: { title: '添加帖子大类', routeName: 'category.add' } },
        component: () => import('@/views/admin/category/add.vue'),
      },
      { path: 'edit/:c_id', name: 'category.edit', meta: { notHistory: true }, component: () => import('@/views/admin/category/edit.vue') },
    ],
  },
  {
    path: '/admin/topic',
    redirect: { name: 'topic.index' },
    component: () => import('@/layout/admin.vue'),
    meta: { auth: true, menu: { title: '帖子管理', sort: 3, icon: 'FourRoundPointConnection' } },
    children: [
      {
        path: 'index',
        name: 'topic.index',
        meta: { menu: { title: '帖子列表', routeName: 'topic.index' } },
        component: () => import('@/views/admin/topic/index.vue'),
      },
      {
        path: 'add',
        name: 'topic.add',
        meta: { menu: { title: '添加帖子', routeName: 'topic.add' } },
        component: () => import('@/views/admin/topic/add.vue'),
      },
      { path: 'edit/:t_id', name: 'topic.edit', meta: { notHistory: true }, component: () => import('@/views/admin/topic/edit.vue') },
    ],
  },
  {
    path: '/admin/comment',
    redirect: { name: 'comment.index' },
    component: () => import('@/layout/admin.vue'),
    meta: { auth: true, menu: { title: '评论管理', sort: 4, icon: 'MultiCircular' } },
    children: [
      {
        path: 'index',
        name: 'comment.index',
        meta: { menu: { title: '评论列表', routeName: 'comment.index' } },
        component: () => import('@/views/admin/comment/index.vue'),
      },
    ],
  },
  {
    path: '/admin/config',
    redirect: { name: 'admin.config.show' },
    component: () => import('@/layout/admin.vue'),
    meta: { auth: true, menu: { title: '系统配置管理', sort: 5, icon: 'FigmaComponent' } },
    children: [
      {
        path: 'show',
        name: 'admin.config.show',
        component: () => import('@/views/admin/config/show.vue'),
        meta: { menu: { title: '系统配置', routeName: 'admin.config.show' } },
      },
    ],
  },
] as RouteRecordRaw[]
