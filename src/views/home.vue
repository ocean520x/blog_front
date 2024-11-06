<template>
  <el-button type="primary">sure</el-button>
  <div>
    {{ userStore.name }}
    {{ test }}
  </div>
</template>

<script setup lang="ts">
import user from '@/store/user';
const userStore = user();
const test = ref('test');
</script>

<style lang="scss" scoped></style>
