<template>
  <el-button type="primary">sure</el-button>
  <div>
    {{ userStore.name }}
  </div>
</template>

<script setup lang="ts">
import user from '@/store/user';
const userStore = user();
</script>

<style lang="scss" scoped></style>
