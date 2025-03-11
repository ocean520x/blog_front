<script setup lang="ts">
import myTopic from '@/composables/myTopic'
import * as Icon from '@icon-park/vue-next'

const { categories, getCategories } = myTopic()
await getCategories()
</script>

<template>
  <main v-if="categories" class="grid grid-cols-6 gap-3  p-3">
    <section v-for="(category) in categories" :key="category.id" class="border border-cyan-600 p-3 rounded flex flex-col justify-center items-center shadow cursor-pointer hover:bg-green-100 duration-300">
      <h4 class="flex justify-center items-center text-slate-600">
        <component :is="Icon[category.icon]" />&nbsp;{{ category.title }}
      </h4>
      <div>
        <el-button type="primary" size="small">
          <icon-editor />&nbsp;编辑
        </el-button>
        <el-button type="danger" size="small">
          <icon-delete />&nbsp;删除
        </el-button>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
