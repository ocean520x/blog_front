<script setup lang="ts">
import myLocalStore from '@/composables/myLocalStore';
import { UserModel } from '@/interfaces/apiResponse';

const userInfo: UserModel = myLocalStore().get('userInfo');
const user = ref<UserModel>(userInfo);
</script>

<template>
  <main class="min-h-screen grid grid-cols-12 border border-slate-300 rounded">
    <div class="col-span-2 p-3 border-r border-rose-950 bg-slate-800 flex flex-col justify-start items-center">
      <el-avatar shape="square" :size="180" :src="user?.avatar" />
      <router-link
        :to="{ name: 'member.me' }"
        class="bg-slate-100 w-full mt-2 rounded p-2 text-sm text-center hover:bg-slate-300 duration-300 text-slate-800"
        :class="{ active: $route.name == 'member.me' }"
        >修改昵称</router-link
      >
      <router-link
        :to="{ name: 'member.avatar' }"
        class="bg-slate-100 w-full mt-2 rounded p-2 text-sm text-center hover:bg-slate-300 duration-300 text-slate-800"
        :class="{ active: $route.name == 'member.avatar' }"
        >修改头像</router-link
      >
    </div>
    <div class="col-span-10">
      <el-card>
        <template #header> 修改头像 </template>
        33333
      </el-card>
    </div>
  </main>
</template>

<style scoped>
a.active {
  @apply bg-green-600 text-slate-100;
}
</style>
