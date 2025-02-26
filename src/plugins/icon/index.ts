import type { App } from 'vue'
import { install } from '@icon-park/vue-next/es/all'

export function runIcon(app: App) {
  install(app)
}
