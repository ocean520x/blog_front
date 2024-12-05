<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';
const breadcrumbRoute = useRoute();
</script>

<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <template v-for="route in breadcrumbRoute.matched" :key="route.name">
      <el-breadcrumb-item :to="{ name: route.name }"> {{ route.meta.menu?.title }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<style scoped></style>
