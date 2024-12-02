import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import guard from '@/router/guard';
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export function runRouter(app: App) {
  guard(router);
  app.use(router);
}

export default router;
