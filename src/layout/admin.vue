<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen grid grid-cols-[auto_1fr]">
    <layout-menu />
    <div class="bg-slate-200 text-gray-700 grid grid-rows-[auto_1fr]">
      <div class="top">
        <layout-breadcrumb />
        <layout-history />
      </div>
      <div class="bg-green-100 p-2 mt-2">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
