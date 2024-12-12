<script setup lang="ts">
const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="mb-4 flex items-center justify-center gap-2">
    <el-input :model-value="modelValue" @input="emit('update:modelValue', $event)" placeholder="请输入验证码" />
    <el-button type="primary">发送验证码</el-button>
  </div>
</template>

<style scoped></style>
