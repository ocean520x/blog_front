<script setup lang="ts">
import myTopic from '@/composables/myTopic';
import * as Icon from '@icon-park/vue-next';
const { categories, getCategories } = myTopic();
await getCategories();
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
  </main>
</template>

<style scoped></style>
