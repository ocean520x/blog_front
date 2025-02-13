<script setup lang="ts">
import myUser from '@/composables/myUser';
const route = useRoute();
const u_id = route.params?.u_id;
const { getOneUser, user } = myUser();
await getOneUser(u_id);
</script>

<template>
  <main class="min-h-screen p-3">
    <me-avatar :user="user" />
    <div class="mt-2">
      <div class="flex justify-center items-center gap-2">
        <router-link
          to="#"
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
      <div class="">
        <el-card shadow="never">
          <section class="">
            <div class="left">
              <el-tag type="primary">Tag 1</el-tag>
            </div>
            <div class="right"></div>
          </section>
        </el-card>
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
