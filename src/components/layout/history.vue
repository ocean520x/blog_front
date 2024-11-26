<script setup lang="ts"></script>

<template>
  <div class="bg-white mt-2 p-2 flex items-center gap-2">
    <a
      href="#"
      class="active bg-slate-400 text-white text-xs p-2 rounded flex items-center gap-1 hover:bg-green-600 duration-300"
    >
      <span>用户列表0</span>
      <icon-close-small class="hover:text-red-700 duration-300" />
    </a>
    <a
      href="#"
      v-for="n in 8"
      class="bg-slate-400 text-white text-xs p-2 rounded flex items-center gap-1 hover:bg-green-600 duration-300"
    >
      <span>用户列表{{ n }}</span>
      <icon-close-small class="hover:text-red-700 duration-300" />
    </a>
  </div>
</template>

<style scoped>
a.active {
  @apply bg-green-600;
}
</style>
