<script setup lang="ts">
import myCaptcha from '@/composables/myCaptcha';
const { captcha, showCaptcha } = myCaptcha();
showCaptcha();
const emit = defineEmits(['update:captchaCode', 'update:captchaKey']);
watch(captcha, () => {
  emit('update:captchaKey', captcha.value?.key);
});
const code = ref<string>('');
</script>

<template>
  <div class="flex items-center gap-2">
    <el-input v-model="code" @input="emit('update:captchaCode', code)" placeholder="请输入验证码" />
    <img :src="captcha?.img" alt="验证码" class="rounded cursor-pointer border border-slate-400" @click="showCaptcha" />
  </div>
</template>

<style scoped></style>
