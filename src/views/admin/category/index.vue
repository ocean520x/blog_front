<script setup lang="ts">
import AdminCategoryItem from '@/components/admin/category-item.vue'
import myTopic from '@/composables/myTopic'
import draggable from 'vuedraggable'

const { categories, getCategories, delCategory, changeCategorySort } = myTopic()
await getCategories()
</script>

<template>
  <main v-if="categories">
    <draggable
      v-model="categories"
      group="people"
      item-key="id"
      class="grid grid-cols-6 gap-3 p-3"
      @end="changeCategorySort"
    >
      <template #item="{ element: category }">
        <AdminCategoryItem :category="category" @del-category="delCategory" />
      </template>
    </draggable>
  </main>
</template>

<style scoped>

</style>
