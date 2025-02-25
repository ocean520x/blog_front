<script setup lang="ts">
import myLocalStore from '@/composables/myLocalStore';
import { UserModel } from '@/interfaces/apiResponse';

const userInfo: UserModel = myLocalStore().get('userInfo');
const user = ref<UserModel>(userInfo);
</script>

<template>
  <main class="min-h-screen grid grid-cols-12">
    <div class="col-span-2 p-3 border-r border-rose-950">
      <el-avatar shape="square" :size="180" :src="user?.avatar" />
    </div>
    <div class="col-span-10">{{ user }}</div>
  </main>
</template>

<style scoped></style>
