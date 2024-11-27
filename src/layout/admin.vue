<script setup lang="ts">
import menuStore from '@/store/menuStore';

const menu = menuStore();
menu.init();
</script>

<template>
  <div class="h-screen w-screen grid grid-cols-[auto_1fr]">
    <layout-menu />
    <div class="bg-slate-200 text-gray-700 grid grid-rows-[auto_1fr]">
      <div class="top">
        <layout-breadcrumb />
        <layout-history />
      </div>
      <div class="relative overflow-y-auto mt-2">
        <router-view #default="{ Component }">
          <component class="absolute w-full" :is="Component"></component>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
