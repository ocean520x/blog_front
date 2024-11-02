import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router, { runRouter } from './router';
import runAllPlugins from './plugins';
async function boot() {
  const app = createApp(App);
  runAllPlugins(app);
  runRouter(app)
  await router.isReady();
  app.mount('#app')
}

boot();
