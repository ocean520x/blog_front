import type { App } from 'vue'
import { createPinia } from 'pinia'

export function runPinia(app: App) {
  app.use(createPinia())
}
