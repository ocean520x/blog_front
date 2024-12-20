<template>
  <main>
    <div class="fixed top-0 w-full"><front-navbar /></div>
    <router-view>
      <template #default="{ Component }">
        <component :is="Component" class="w-full xl:w-web mx-auto mt-[60px]" />
      </template>
    </router-view>
  </main>
</template>

<script setup lang="ts">
import FrontNavbar from '@/components/layout/frontNavbar.vue';
</script>

<style scoped></style>
