import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/admin',
  redirect:{name:'user.index'},
  component: () => import('@/layout/admin.vue'),
  children: [
    { path: 'user/index', name: 'user.index', component: () => import('@/views/admin/user/index.vue') },
    { path: 'category/index', name: 'category.index', component: () => import('@/views/admin/category/index.vue') },
    { path: 'category/add', name: 'category.add', component: () => import('@/views/admin/category/add.vue') },
    { path: 'category/edit', name: 'category.edit', component: () => import('@/views/admin/category/edit.vue') },
    { path: 'topic/index', name: 'topic.index', component: () => import('@/views/admin/topic/index.vue') },
    { path: 'topic/add', name: 'topic.add', component: () => import('@/views/admin/topic/add.vue') },
    { path: 'topic/edit', name: 'topic.edit', component: () => import('@/views/admin/topic/edit.vue') }
  ]
} as RouteRecordRaw;