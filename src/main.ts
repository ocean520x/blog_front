import runOrder from '@/order'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createApp } from 'vue'
import App from './App.vue'
import runAllPlugins from './plugins'
import router, { runRouter } from './router'
import './assets/main.css'
import 'element-plus/dist/index.css'

async function boot() {
  const app = createApp(App)
  // 引入图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
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
