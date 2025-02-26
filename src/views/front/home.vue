<script setup lang="ts">
import AnimateList from '@/components/animate/list.vue'
import TopicItem from '@/components/topic/item.vue'
import myLocalStore from '@/composables/myLocalStore'
import myTopic from '@/composables/myTopic'
import * as Icon from '@icon-park/vue-next'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const { categories, getCategories, topics, getTopics, getTopicsByCategory } = myTopic()
await getCategories()
const route = useRoute()
watch(
  route,
  async () => {
    const c_id = route.params?.c_id
    if (c_id) {
      myLocalStore().set('c_id', c_id)
      await getTopicsByCategory()
    }
    else {
      await getTopics()
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <main>
    <section
      v-if="categories"
      class="grid grid-cols-6 gap-2 shadow-sm p-3 text-sm text-slate-600"
    >
      <div
        v-for="(item, index) in categories"
        :key="index"
        class="flex items-center justify-center"
      >
        <router-link
          :to="{ name: 'per.category', params: { c_id: item.id } }"
          :class="{ active: Number((route as any).params?.c_id) === item.id }"
          class="w-2/3 py-1 flex justify-center items-center gap-1 hover:cursor-pointer hover:text-green-500 duration-300"
        >
          <component :is="Icon[item.icon!]" />
          <span>{{ item.title }}</span>
        </router-link>
      </div>
    </section>
    <section class="flex items-center justify-end pt-2">
      <el-button type="primary" @click="$router.push({ name: 'front.topic.add' })">
        <icon-add-picture theme="outline" size="20" />&nbsp;
        <span>发布帖子</span>
      </el-button>
    </section>
    <section class="min-h-screen">
      <AnimateList tag="ul">
        <TopicItem
          v-for="(item, index) in topics?.data"
          :key="item.id"
          :data-index="index"
          :item="item"
        />
      </AnimateList>
      <div v-if="route.params?.c_id" class="p-3 mt-3 flex justify-end">
        <el-pagination
          :current-page="topics?.meta.current_page"
          :hide-on-single-page="true"
          :page-size="topics?.meta.per_page"
          :total="topics?.meta.total"
          background
          layout="prev, pager, next,total"
          @current-change="getTopicsByCategory"
        />
      </div>

      <div v-else class="p-3 mt-3 flex justify-end">
        <el-pagination
          :current-page="topics?.meta.current_page"
          :hide-on-single-page="true"
          :page-size="topics?.meta.per_page"
          :total="topics?.meta.total"
          background
          layout="prev, pager, next,total"
          @current-change="getTopics"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
@reference "tailwindcss";
a.active {
  @apply bg-green-400 rounded text-slate-100;
}
</style>
