<script setup lang="ts">
import FrontFooter from '@/components/layout/frontFooter.vue'
import FrontNavbar from '@/components/layout/frontNavbar.vue'
</script>

<template>
  <main>
    <div class="fixed top-0 w-full z-50">
      <FrontNavbar />
    </div>
    <router-view>
      <template #default="{ Component, route }">
        <component :is="Component" :key="route.fullPath" class="w-full xl:w-web mx-auto mt-[60px]" />
      </template>
    </router-view>
    <FrontFooter />
  </main>
</template>

<style scoped></style>
