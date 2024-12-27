<script setup lang="ts">
import myConfig from '@/composables/myConfig';

const { config, getConfig } = myConfig();
await getConfig('data');
</script>

<template>
  <main class="bg-slate-800 py-[30px] flex justify-center items-center text-slate-100 text-sm">
    {{ config?.site_name }}&copy:{{ config?.copyright }}
  </main>
</template>

<style scoped></style>
