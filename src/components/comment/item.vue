<script setup lang="ts">
import dayjs from 'dayjs';
import MarkdownPreview from '@/components/markdown/markdownPreview.vue';
import { MyComment } from '@/interfaces/apiResponse';
const { comment } = defineProps<{
  comment: MyComment;
}>();
</script>

<template>
  <section class="mt-3 border slate-300 rounded shadow">
    <div class="p-2 border border-b-slate-200 flex justify-between items-center">
      <div class="flex items-center justify-between gap-1">
        <div>
          <el-avatar
            shape="square"
            :size="42"
            :src="comment.user.avatar"
            class="hover:scale-105 duration-300 cursor-pointer"
          />
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
</template>

<style scoped></style>
