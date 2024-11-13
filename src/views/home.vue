<script setup lang="ts">
const content = ref('Hello World')
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-slate-300">
    <markdown-editor class="w-[900px]" v-model="content" :height="500" placeholder="在这里输入内容"/>
  </div>
</template>



<style lang="scss" scoped></style>
