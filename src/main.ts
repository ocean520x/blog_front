import runOrder from '@/order'
import { createApp } from 'vue'
import App from './App.vue'
import runAllPlugins from './plugins'
import router, { runRouter } from './router'
import './assets/main.css'

async function boot() {
  const app = createApp(App)
  // 引入插件
  runAllPlugins(app)
  // 引入路由
  runRouter(app)
  // 引入自定义指令
  runOrder(app)
  await router.isReady()
  app.mount('#app')
}

boot()
