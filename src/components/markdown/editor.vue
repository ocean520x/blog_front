<script lang="ts" setup>
import markdownClass from "@/components/markdown/markdownClass";

interface MyMarkdownProps {
  modelValue?: string;
  height?: number;
  placeholder?: string;
}

const props = withDefaults(defineProps<MyMarkdownProps>(), {
  modelValue: '',
  height: 300,
  placeholder: '请输入内容'
})

const emit = defineEmits(['update:modelValue'])

nextTick(() => {
  const markdownObj = new markdownClass('#editor', `${props.height}px`, `${props.placeholder}`)
  markdownObj.editor.on('change', (type: string) => {
    const content = type === 'markdown' ? markdownObj.editor.getMarkdown() : markdownObj.editor.getHTML();
    emit('update:modelValue', content);
  })
  const elements = document.getElementsByClassName('toastui-editor-mode-switch');
  const element = elements[0] as HTMLDivElement;
  element.style.display = 'none';
})
</script>

<template>
  <div id="editor" class="bg-white rounded">

  </div>
</template>

<style scoped>

</style>