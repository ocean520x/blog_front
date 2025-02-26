<script setup lang="ts">
import type { MyTopic } from '@/interfaces/apiResponse'
import dayjs from 'dayjs'

const { item } = defineProps<{
  item: MyTopic
}>()
</script>

<template>
  <li
    class="border border-slate-300 p-2 hover:bg-green-200 hover:cursor-pointer duration-500 shadow mt-2 rounded text-slate-600 gap-2 hover:scale-105 grid grid-cols-12"
  >
    <div class="col-span-10 flex items-center justify-start gap-2">
      <div class="min-w-32 flex flex-col gap-1 items-center justify-center">
        <el-avatar
          :src="item.user.avatar"
          shape="square"
          :size="50"
          @click="$router.push({ name: 'person.me', params: { u_id: item.user.id } })"
        />
        <div
          class="flex items-center justify-center gap-1 text-xs text-orange-600 hover:text-orange-500 hover:underline duration-300"
        >
          <icon-me fill="#9013fe" />
          <router-link :to="{ name: 'person.me', params: { u_id: item.user.id } }">
            {{ item.user.name }}
          </router-link>
        </div>
      </div>
      <router-link
        :to="{ name: 'per.category', params: { c_id: item.category.id } }"
        class="text-xs text-cyan-600 hover:text-cyan-500 duration-300 p-1 rounded-sm border border-cyan-600"
      >
        {{ item.category.title }}
      </router-link>
      <router-link
        :to="{ name: 'front.topic.show', params: { t_id: item.id } }"
        class="hover:underline hover:text-cyan-600 duration-300"
      >
        {{ item.id }}-{{ item.user_id }}-{{ item.title }}
      </router-link>
    </div>
    <div class="col-span-2 flex items-center justify-center text-sm text-slate-600 gap-1">
      <icon-stopwatch-start theme="outline" size="18" fill="#7ed321" />
      {{ dayjs(item.created_at).fromNow() }}
    </div>
  </li>
</template>

<style scoped></style>
