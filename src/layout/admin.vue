<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen grid grid-cols-[auto_1fr]">
    <layout-menu />
    <div class="bg-slate-200 text-gray-700 grid grid-rows-[auto_1fr]">
      <div class="top">
        <layout-breadcrumb />
        <div class="bg-white mt-2 px-2 py-4">321</div>
      </div>
      <div class="bg-green-100 p-2 mt-2">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
