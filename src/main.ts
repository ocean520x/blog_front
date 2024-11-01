import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router, { runRouter } from './router';
async function boot() {
  const app = createApp(App);
  runRouter(app)
  await router.isReady();
  app.mount('#app')
}

boot();
