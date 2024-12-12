<script setup lang="ts">
import myAuth from '@/composables/myAuth';

const props = defineProps({
  modelValue: String,
  phone: String,
});
const emit = defineEmits(['update:modelValue']);
const { getRegisterCode } = myAuth();
</script>

<template>
  <div class="mb-4 flex items-center justify-center gap-2">
    <el-input :model-value="modelValue" @input="emit('update:modelValue', $event)" placeholder="请输入验证码" />
    <el-button type="primary" @click="getRegisterCode(phone)">发送验证码</el-button>
  </div>
</template>

<style scoped></style>
