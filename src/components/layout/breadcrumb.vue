<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue';
</script>

<template>
  <div class="bg-white px-2 py-4 flex justify-between items-center pr-5">
    <div class="flex items-cente">
      <icon-align-left-one fill="#7ed321" class="cursor-pointer" />
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="flex items-center justify-center gap-2">
      <el-avatar shape="square" :size="32" src="../../../../public/images/avatar.png" />
      <span class="text-xs hover:text-green-600 duration-300 cursor-pointer">JOJO</span>
    </div>
  </div>
</template>

<style scoped></style>
