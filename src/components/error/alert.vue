<script setup lang="ts">
import errorsStore from '@/store/errorsStore';

const { name } = defineProps<{
  name: string;
}>();
</script>

<template>
  <el-alert
    v-show="errorsStore().getError(name)"
    style="margin: 6px 0 10px"
    :title="errorsStore().getError(name)"
    type="error"
    show-icon
    :closable="false"
  />
</template>

<style scoped></style>
