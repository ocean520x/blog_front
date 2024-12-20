<script setup lang="ts">
import showHideMenu from '@/store/showHideMenu';
</script>

<template>
  <div class="bg-white px-2 py-4 flex justify-between items-center pr-5">
    <div class="flex items-center">
      <icon-align-left-one
        fill="#7ed321"
        class="cursor-pointer"
        @click="showHideMenu().toggle()"
        v-if="showHideMenu().show"
      />
      <icon-align-right-one fill="#7ed321" class="cursor-pointer" @click="showHideMenu().toggle()" v-else />
      <layout-breadcrumb-route />
    </div>
    <layout-avatar type="admin" />
  </div>
</template>

<style scoped></style>
