import type { App } from 'vue'
import { runDayjs } from '@/plugins/dayjs'
import { runIcon } from './icon'
import { runPinia } from './pinia'

export default function runAllPlugins(app: App) {
  runPinia(app)
  runIcon(app)
  runDayjs()
}
