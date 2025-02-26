<script setup lang="ts">
import myCaptcha from '@/composables/myCaptcha'
import { ref, watch } from 'vue'

const emit = defineEmits(['update:captchaCode', 'update:captchaKey'])
const { captcha, showCaptcha } = myCaptcha()
showCaptcha()
watch(captcha, () => {
  emit('update:captchaKey', captcha.value?.key)
})
const code = ref<string>('')
</script>

<template>
  <div class="flex items-center gap-2">
    <el-input v-model="code" placeholder="请输入验证码" @input="emit('update:captchaCode', code)" />
    <img :src="captcha?.img" alt="验证码" class="rounded cursor-pointer border border-slate-400" @click="showCaptcha">
  </div>
</template>

<style scoped></style>
