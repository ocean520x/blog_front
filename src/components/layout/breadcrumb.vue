<script setup lang="ts">
import LayoutAvatar from '@/components/layout/avatar.vue'
import LayoutBreadcrumbRoute from '@/components/layout/breadcrumbRoute.vue'
import showHideMenu from '@/store/showHideMenu'
</script>

<template>
  <div class="bg-white px-2 py-4 flex justify-between items-center pr-5">
    <div class="flex items-center">
      <icon-align-left-one
        v-if="showHideMenu().show"
        fill="#7ed321"
        class="cursor-pointer"
        @click="showHideMenu().toggle()"
      />
      <icon-align-right-one v-else fill="#7ed321" class="cursor-pointer" @click="showHideMenu().toggle()" />
      <LayoutBreadcrumbRoute />
    </div>
    <LayoutAvatar type="admin" />
  </div>
</template>

<style scoped></style>
