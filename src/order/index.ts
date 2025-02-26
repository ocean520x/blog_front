import type { App } from 'vue'
import clearError from '@/order/clearError'

export default (app: App) => {
  clearError(app)
}
