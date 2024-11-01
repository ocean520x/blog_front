import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
const router = createRouter({
  history: createWebHistory(),
  routes
});

export function runRouter(app: App) {
  app.use(router);
}

export default router;
