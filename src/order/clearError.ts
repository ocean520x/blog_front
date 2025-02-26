import type { App } from 'vue'
import errorsStore from '@/store/errorsStore'

export default (app: App) => {
  app.directive('clearError', {
    mounted(el: HTMLElement, binding: any) {
      const inputElement = el.querySelector('input') || el.querySelector('textarea') || el
      inputElement.addEventListener('focus', () => {
        errorsStore().clearError(binding.value)
      })
    },
  })
}
