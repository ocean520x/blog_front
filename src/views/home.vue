<script setup lang="ts">
import myTopic from '@/composables/myTopic';
import * as Icon from '@icon-park/vue-next';
import { useRoute } from 'vue-router';
import { watch } from 'vue';

const { categories, getCategories, topics, getTopics, getTopicsByCategory } = myTopic();
await getCategories();
const route = useRoute();
watch(
  route,
  async () => {
    const c_id = route.params?.c_id;
    if (c_id) {
      await getTopicsByCategory(c_id);
    } else {
      await getTopics();
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <main class="">
    <section class="grid grid-cols-6 gap-2 border shadow p-3 text-sm text-slate-600" v-if="categories">
      <router-link
        :to="{ name: 'per.category', params: { c_id: item.id } }"
        class="flex justify-center items-center gap-1 hover:cursor-pointer hover:text-green-500 duration-300"
        v-for="(item, index) in categories"
        :key="index"
      >
        <component :is="Icon[item.icon!]" />
        <span>{{ item.title }}</span>
      </router-link>
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
          <span>{{ item.title }}--{{ item.category.title }}</span>
        </li>
      </animate-list>
    </section>
  </main>
</template>

<style scoped></style>
