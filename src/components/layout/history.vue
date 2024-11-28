<script setup lang="ts">
import menuStore from '@/store/menuStore';
const historyMenus = menuStore().historyMenus;
</script>

<template>
  <div class="bg-white mt-2 p-2 flex items-center gap-2" v-if="historyMenus.length">
    <router-link
      :to="{ name: menu.routeName }"
      v-for="(menu, index) in historyMenus"
      :key="index"
      class="bg-slate-400 text-white text-xs p-2 rounded flex items-center gap-1 hover:bg-green-600 duration-300"
      :class="{ active: menu.routeName === $route.name }"
    >
      <span>{{ menu.title }}</span>
      <icon-close-small class="hover:text-red-700 duration-300" @click.prevent="menuStore().removeHistoryMenus(menu)" />
    </router-link>
  </div>
</template>

<style scoped>
.active {
  @apply bg-green-600;
}
</style>
