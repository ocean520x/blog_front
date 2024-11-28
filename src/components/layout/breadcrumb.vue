<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue';
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

      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <layout-avatar />
  </div>
</template>

<style scoped></style>
