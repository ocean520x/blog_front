<script setup lang="ts">
import myUser from '@/composables/myUser';
import dayjs from 'dayjs';
const route = useRoute();
const u_id = route.params?.u_id;
const { getOneUser, user } = myUser();
await getOneUser(u_id);
</script>

<template>
  <main class="min-h-screen p-3">
    <div class="flex flex-col justify-center items-center border-b border-b-amber-600">
      <el-avatar :src="user?.avatar" shape="square" :size="180" class="border-4 border-pink-600" />
      <div class="flex gap-3 justify-center items-center p-2 text-slate-600">
        <span class="flex gap-1 justify-center items-center"><icon-me fill="#50e3c2" />{{ user.name }}</span>
        <span class="flex gap-1 justify-center items-center"
          ><icon-timer fill="#f5a623" />{{ dayjs(user.created_at).fromNow() }}</span
        >
      </div>
    </div>
    <div class="mt-2">
      <div class="flex justify-center items-center gap-2">
        <router-link
          :to="{ name: 'person.me' }"
          class="bg-slate-800 text-slate-100 px-2 py-1 text-xs rounded hover:bg-slate-600 duration-300"
          :class="{ active: $route.name === 'person.me' }"
          >TA的帖子</router-link
        >
        <router-link
          :to="{ name: 'person.me_comment' }"
          class="bg-slate-800 text-slate-100 px-2 py-1 text-xs rounded hover:bg-slate-600 duration-300"
          :class="{ active: $route.name === 'person.me_comment' }"
          >TA的评论</router-link
        >
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
a.active {
  --tw-bg-opacity: 1;
  background-color: rgb(71 85 105 / var(--tw-bg-opacity));
}
</style>
