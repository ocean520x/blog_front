<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
</script>

<template>
  <div class="relative">
    <div class="flex items-center justify-center gap-2" @click="show = !show">
      <el-avatar shape="square" :size="32" src="/images/avatar.png" />
      <span class="text-xs hover:text-green-600 duration-300 cursor-pointer">JOJO</span>
    </div>
    <div v-show="show" class="flex flex-col absolute px-1 py-2 z-50 bg-white border border-slate-400 shadow rounded">
      <span class="span-item">个人中心</span>
      <span class="span-item">设置头像</span>
      <span class="span-item">重置密码</span>
      <span class="span-item">退出登录</span>
    </div>
  </div>
</template>

<style scoped>
.span-item {
  @apply whitespace-nowrap text-xs py-1 px-3 border-b border-slate-300 cursor-pointer hover:text-green-600 duration-300;
}
</style>
