<template>
  <front-navbar />
  <router-view>
    <template #default="{ Component }">
      <component :is="Component" class="w-full xl:w-web mx-auto" />
    </template>
  </router-view>
</template>

<script setup lang="ts">
import FrontNavbar from '@/components/layout/frontNavbar.vue';
</script>

<style scoped></style>
