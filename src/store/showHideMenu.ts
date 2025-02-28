import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('showHideMenu', () => {
  const show = ref<boolean>(true)
  const toggle = () => {
    show.value = !show.value
  }
  return { show, toggle }
})
