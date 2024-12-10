import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router, { runRouter } from './router';
import runAllPlugins from './plugins';
import runOrder from '@/order';
async function boot() {
  const app = createApp(App);
  // 引入插件
  runAllPlugins(app);
  // 引入路由
  runRouter(app);
  // 引入自定义指令
  runOrder(app);
  await router.isReady();
  app.mount('#app');
}

boot();
