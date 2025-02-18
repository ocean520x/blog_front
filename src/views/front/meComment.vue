<script setup lang="ts">
import myUser from '@/composables/myUser';
import dayjs from 'dayjs';
import MarkdownPreview from '@/components/markdown/markdownPreview.vue';
const route = useRoute();
const u_id = route.params?.u_id;
const { getOneUser, user, comments, getOneUserComments } = myUser();
await getOneUser(u_id);
await getOneUserComments({ page: route.query.page || 1, u_id: route.params.u_id });
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
      <div v-if="comments" class="mt-3">
        <el-card shadow="never">
          <section
            v-for="(comment, index) in comments.data"
            :key="index"
            class="flex justify-between items-center border-b border-b-slate-300"
          >
            <div
              @click="$router.push({ name: 'front.topic.show', params: { t_id: comment.topic_id } })"
              class="flex justify-start items-center gap-2 text-slate-600 p-3 hover:text-green-600 cursor-pointer duration-300"
            >
              <el-tag type="primary">评论</el-tag>
              <markdown-preview :text="comment.html" />
            </div>
            <div class="flex justify-end items-center text-xs text-slate-500 gap-2 min-w-[100px]">
              <icon-timer size="14" fill="#50e3c2" />
              {{ dayjs(comment.created_at).fromNow() }}
            </div>
          </section>
        </el-card>
        <me-pagination
          @currentChange="
            $router.push({ name: 'person.me_comment', params: { u_id: $route.params.u_id }, query: { page: $event } })
          "
          :per_page="comments.meta.per_page"
          :total="comments.meta.total"
        />
      </div>
      <div v-else class="flex justify-center items-center p-3 text-slate-600 text-sm gap-2">
        <icon-info size="16" fill="#f5a623" /> 他没有发表过评论
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
