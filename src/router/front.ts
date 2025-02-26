import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/',
  redirect: { name: 'home' },
  component: () => import('@/layout/front.vue'),
  children: [
    { path: 'home', name: 'home', component: () => import('@/views/front/home.vue') },
    { path: 'perCategory/:c_id', name: 'per.category', component: () => import('@/views/front/home.vue') },
    // { path: 'list', name: 'list', component: () => import('@/views/front/list.vue') },
    { path: 'topic/show/:t_id', name: 'front.topic.show', component: () => import('@/views/front/topicShow.vue') },
    { path: 'topic/add', name: 'front.topic.add', component: () => import('@/views/front/topicAdd.vue') },
    // { path: 'topic/edit/:t_id', name: 'front.topic.edit', component: () => import('@/views/front/topicEdit.vue') },
  ],
} as RouteRecordRaw
