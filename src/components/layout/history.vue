<script setup lang="ts">
import menuStore from '@/store/menuStore';
const historyMenus = menuStore().historyMenus;
</script>

<template>
  <div class="bg-white mt-2 p-2 flex items-center gap-2" v-if="historyMenus.length">
    <router-link
      to="#"
      v-for="(menu, index) in historyMenus"
      :key="index"
      class="bg-slate-400 text-white text-xs p-2 rounded flex items-center gap-1 hover:bg-green-600 duration-300"
    >
      <span>{{ menu.title }}</span>
      <icon-close-small class="hover:text-red-700 duration-300" />
    </router-link>
  </div>
</template>

<style scoped>
a.active {
  @apply bg-green-600;
}
</style>
