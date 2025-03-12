<script setup lang="ts">
import type { MyCategory } from '@/interfaces/apiResponse'
import * as Icon from '@icon-park/vue-next'

const { category } = defineProps<{
  category: MyCategory
}>()
defineEmits<{
  (e: 'delCategory', c_id: number): void
}>()
</script>

<template>
  <section class="border border-cyan-600 p-3 rounded flex flex-col justify-center items-center shadow cursor-pointer hover:bg-green-100 duration-300">
    <h4 class="flex justify-center items-center text-slate-600">
      <component :is="Icon[category.icon]" />&nbsp;{{ category.title }}
    </h4>
    <div>
      <el-button type="primary" size="small" @click="$router.push({ name: 'category.edit', params: { c_id: category.id } })">
        <icon-editor />&nbsp;编辑
      </el-button>
      <el-button type="danger" size="small" @click="$emit('delCategory', category.id)">
        <icon-delete />&nbsp;删除
      </el-button>
    </div>
  </section>
</template>

<style scoped>

</style>
