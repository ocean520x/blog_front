<script setup lang="ts">
import { ref } from 'vue';
import hljs from 'highlight.js';
const { text } = defineProps<{ text: string }>();
const html = ref<HTMLDivElement>();
html.value = document.createElement('div') as HTMLDivElement;
html.value.insertAdjacentHTML('afterbegin', text.replace('class="language-language"', ''));
html.value.querySelectorAll('pre code').forEach((el: any) => {
  hljs.highlightElement(el);
});
</script>

<template>
  <main class="leading-8">
    <div v-html="html?.innerHTML" />
  </main>
</template>

<style scoped></style>
