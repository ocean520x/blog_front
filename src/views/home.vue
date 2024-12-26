<script setup lang="ts">
import myTopic from '@/composables/myTopic';
import * as Icon from '@icon-park/vue-next';
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import myLocalStore from '@/composables/myLocalStore';

const { categories, getCategories, topics, getTopics, getTopicsByCategory } = myTopic();
await getCategories();
const route = useRoute();
watch(
  route,
  async () => {
    const c_id = route.params?.c_id;
    if (c_id) {
      myLocalStore().set('c_id', c_id);
      await getTopicsByCategory();
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
      <div v-for="(item, index) in categories" :key="index" class="flex items-center justify-center">
        <router-link
          :to="{ name: 'per.category', params: { c_id: item.id } }"
          :class="{ active: (route as any).params?.c_id == item.id }"
          class="w-2/3 py-1 flex justify-center items-center gap-1 hover:cursor-pointer hover:text-green-500 duration-300"
        >
          <component :is="Icon[item.icon!]" />
          <span>{{ item.title }}</span>
        </router-link>
      </div>
    </section>
    <section class="min-h-screen">
      <animate-list tag="ul">
        <li
          :data-index="index"
          v-for="(item, index) in topics?.data"
          :key="item.id"
          class="border border-slate-300 p-2 hover:bg-green-200 hover:cursor-pointer duration-500 shadow flex items-center justify-start mt-2 rounded text-slate-600 gap-2 hover:scale-105"
        >
          <el-avatar shape="square" :size="50" :src="item.user.avatar" />
          <span>{{ item.title }}--{{ item.category.title }}</span>
        </li>
      </animate-list>
      <div class="p-3 mt-3 flex justify-end" v-if="route.params?.c_id">
        <el-pagination
          @current-change="getTopicsByCategory"
          :hide-on-single-page="true"
          :page-size="topics?.meta.per_page"
          :total="topics?.meta.total"
          background
          layout="prev, pager, next,total"
        />
      </div>

      <div class="p-3 mt-3 flex justify-end" v-else>
        <el-pagination
          @current-change="getTopics"
          :hide-on-single-page="true"
          :page-size="topics?.meta.per_page"
          :total="topics?.meta.total"
          background
          layout="prev, pager, next,total"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
a.active {
  @apply bg-green-400 rounded text-slate-100;
}
</style>
