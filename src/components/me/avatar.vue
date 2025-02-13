<script setup lang="ts">
import dayjs from 'dayjs';
import { UserModel } from '@/interfaces/apiResponse';
const props = defineProps<{ user: UserModel }>();
</script>

<template>
  <div class="flex flex-col justify-center items-center border-b border-b-amber-600">
    <el-avatar :src="user?.avatar" shape="square" :size="180" class="border-4 border-pink-600" />
    <div class="flex gap-3 justify-center items-center p-2 text-slate-600">
      <span class="flex gap-1 justify-center items-center"><icon-me fill="#50e3c2" />{{ user.name }}</span>
      <span class="flex gap-1 justify-center items-center"
        ><icon-timer fill="#f5a623" />{{ dayjs(user.created_at).fromNow() }}</span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
