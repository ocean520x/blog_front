<script setup lang="ts">
import dayjs from 'dayjs';
import { MyTopic } from '@/interfaces/apiResponse';
const { item } = defineProps<{
  item: MyTopic;
}>();
</script>

<template>
  <li
    class="border border-slate-300 p-2 hover:bg-green-200 hover:cursor-pointer duration-500 shadow mt-2 rounded text-slate-600 gap-2 hover:scale-105 grid grid-cols-12"
  >
    <div class="col-span-10 flex items-center justify-start gap-2">
      <el-avatar shape="square" :size="50" :src="item.user.avatar" />
      <router-link
        :to="{ name: 'per.category', params: { c_id: item.category.id } }"
        class="text-xs text-cyan-600 hover:text-cyan-500 duration-300 p-1 rounded-sm border border-cyan-600"
        >{{ item.category.title }}</router-link
      >
      <span>{{ item.title }}</span>
    </div>
    <div class="col-span-2 flex items-center justify-center text-sm text-slate-600 gap-1">
      <icon-stopwatch-start theme="outline" size="18" fill="#7ed321" />
      {{ dayjs(item.created_at).fromNow() }}
    </div>
  </li>
</template>

<style scoped></style>
