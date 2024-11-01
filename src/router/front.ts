import { RouteRecordRaw } from "vue-router";

export default {
  path: '/',
  component: () => import("@/layout/front.vue"),
  children: [
    { path: 'home', name: 'home', component: () => import("@/views/home.vue") },
  ]
} as RouteRecordRaw
