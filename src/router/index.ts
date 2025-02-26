import type { App } from 'vue'
import guard from '@/router/guard'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export function runRouter(app: App) {
  guard(router)
  app.use(router)
}

export default router
