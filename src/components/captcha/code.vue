<script setup lang="ts">
import myAuth from '@/composables/myAuth';
import { ref } from 'vue';
const props = defineProps<{
  modelValue: string;
  phone: string;
  type: 'register' | 'rePassword';
}>();
const emit = defineEmits(['update:modelValue']);
const { getRegisterCode, diffSendTime, getRePasswordCode } = myAuth();
const time = ref(0);
const timeId = setInterval(() => (time.value = diffSendTime()));
onUnmounted(() => clearInterval(timeId));

const sendCode = () => {
  switch (props.type) {
    case 'register':
      getRegisterCode(props.phone);
      break;
    case 'rePassword':
      getRePasswordCode(props.phone);
      break;
  }
};
</script>

<template>
  <div class="mb-4 flex items-center justify-center gap-2">
    <el-input :model-value="modelValue" @input="emit('update:modelValue', $event)" placeholder="请输入验证码" />
    <el-button @click="sendCode" :disabled="time > 0" :type="time > 0 ? 'info' : 'primary'" class="min-w-32">{{
      time > 0 ? `请${time}秒后重试` : '发送验证码'
    }}</el-button>
  </div>
</template>

<style scoped></style>
