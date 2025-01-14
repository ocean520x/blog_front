<script setup lang="ts">
import myAuth from '@/composables/myAuth.js';
import myComment from '@/composables/myComment';
import dayjs from 'dayjs';
import MarkdownPreview from '@/components/markdown/markdownPreview.vue';
const { isLogin } = myAuth();
const { t_id } = defineProps<{
  t_id: string | number;
}>();
const { comments, getComments } = myComment();
await getComments(t_id);
</script>

<template>
  <main class="w-full my-3">
    <div class="">
      <el-card shadow="hover">
        <template #header> 评论列表 </template>
        <div class="p-1" v-if="comments">
          <section v-for="(comment, index) in comments" :key="index" class="mt-3 border slate-300 rounded shadow">
            <div class="p-2 border border-b-slate-200 flex justify-between items-center">
              <div class="flex items-center justify-between gap-1">
                <div>
                  <el-avatar shape="square" :size="50" :src="comment.user.avatar" />
                </div>
                <div class="flex flex-col gap-1 justify-center">
                  <span class="flex items-center justify-start text-xs text-slate-600 gap-1">
                    <icon-me fill="#9013fe" /> <router-link to="/">{{ comment.user.name }}</router-link></span
                  >
                  <span class="flex items-center justify-start text-xs text-slate-600 gap-1">
                    <icon-stopwatch-start fill="#7ed321" />
                    {{ dayjs(comment.created_at).fromNow() }}
                  </span>
                </div>
              </div>
              <div class="flex gap-2 items-center justify-center">
                <icon-comment theme="outline" size="16" class="hover:text-green-700 cursor-pointer" />
                <icon-delete theme="outline" size="16" class="hover:text-amber-700 cursor-pointer" />
              </div>
            </div>
            <div class="p-3 text-slate-600">
              <markdown-preview :text="comment.html" />
            </div>
          </section>
        </div>
        <div v-else class=""><icon-info fill="#f5a623" size="16" />&nbsp;暂无评论</div>
      </el-card>
    </div>
    <div class="mt-3">
      <el-card shadow="hover">
        <template #header> 添加评论 </template>
        <template v-if="isLogin()">
          <markdown-editor />
        </template>
        <template v-else>
          <div class="flex justify-center items-center">
            <el-button @click="$router.push({ name: 'login' })" type="primary"><icon-me />&nbsp;登陆</el-button>
          </div>
        </template>
      </el-card>
    </div>
  </main>
</template>

<style scoped></style>
