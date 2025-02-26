<script lang="ts" setup>
import MarkdownClass from '@/components/markdown/markdownClass'
import errorsStore from '@/store/errorsStore'
import { nextTick, watch } from 'vue'

interface MyMarkdownProps {
  modelValue?: string
  height?: number
  placeholder?: string
  name?: string
}

const props = withDefaults(defineProps<MyMarkdownProps>(), {
  modelValue: '',
  height: 300,
  placeholder: '请输入内容',
  name: 'content',
})
const emit = defineEmits(['update:modelValue'])
let markdownObj: MarkdownClass | null = null
nextTick(() => {
  const observer = new MutationObserver(() => {
    const editorElement = document.getElementById('editor')
    if (editorElement) {
      observer.disconnect() // 找到元素后，停止监听
      markdownObj = new MarkdownClass('#editor', `${props.height}px`, `${props.modelValue}`)
      markdownObj.editor.on('change', (type: string) => {
        const content = type === 'markdown' ? markdownObj?.editor.getMarkdown() : markdownObj?.editor.getHTML()
        emit('update:modelValue', content)
      })
      const elements = document.getElementsByClassName('toastui-editor-mode-switch')
      const element = elements[0] as HTMLDivElement
      element.style.display = 'none'
      markdownObj.editor.on('focus', () => {
        errorsStore().clearError(props.name)
      })
    }
  })
  // 观察 document.body 变化，直到 #editor 出现
  observer.observe(document.body, { childList: true, subtree: true })
})
watch(
  () => props.modelValue,
  (newVal) => {
    if (markdownObj) {
      markdownObj.editor.setMarkdown(newVal || '')
    }
  },
)
</script>

<template>
  <div id="editor" class="bg-white rounded" />
</template>

<style scoped></style>
