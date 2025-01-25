<template>
  <main>
    <div class="fixed top-0 w-full z-50">
      <front-navbar />
    </div>
    <router-view>
      <template #default="{ Component, route }">
        <component :is="Component" :key="route.fullPath" class="w-full xl:w-web mx-auto mt-[60px]" />
      </template>
    </router-view>
    <front-footer />
  </main>
</template>

<script setup lang="ts">
import FrontNavbar from '@/components/layout/frontNavbar.vue';
import FrontFooter from '@/components/layout/frontFooter.vue';
</script>

<style scoped></style>
