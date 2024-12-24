<script setup lang="ts">
import myTopic from '@/composables/myTopic';
import * as Icon from '@icon-park/vue-next';

const { categories, getCategories, topics, getTopics } = myTopic();
await getCategories();
await getTopics();
</script>

<template>
  <main class="">
    <section class="grid grid-cols-6 gap-2 border shadow p-3 text-sm text-slate-600" v-if="categories">
      <div
        class="flex justify-center items-center gap-1 hover:cursor-pointer hover:text-green-500 duration-300"
        v-for="(item, index) in categories"
        :key="index"
      >
        <component :is="Icon[item.icon!]" />
        <span>{{ item.title }}</span>
      </div>
    </section>
    <section class="">
      <animate-list tag="ul">
        <li
          :data-index="index"
          v-for="(item, index) in topics.data"
          :key="item.id"
          class="p-2 hover:bg-green-200 hover:cursor-pointer duration-300 shadow flex items-center justify-start mt-2 rounded text-slate-600 gap-2"
        >
          <el-avatar shape="square" :size="50" :src="item.user.avatar" />
          <span>{{ item.title }}</span>
        </li>
      </animate-list>
    </section>
  </main>
</template>

<style scoped></style>
