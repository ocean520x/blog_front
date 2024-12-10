<script setup lang="ts">
import myCaptcha from '@/composables/myCaptcha';
const { captcha, showCaptcha } = myCaptcha();
showCaptcha();
</script>

<template>
  <div class="flex items-center gap-2">
    <el-input placeholder="请输入验证码" />
    <img :src="captcha?.img" alt="验证码" class="rounded cursor-pointer border border-slate-400" />
  </div>
</template>

<style scoped></style>
