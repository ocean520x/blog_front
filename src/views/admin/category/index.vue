<script setup lang="ts">
import AdminCategoryItem from '@/components/admin/category-item.vue'
import myTopic from '@/composables/myTopic'

const { categories, getCategories, delCategory } = myTopic()
await getCategories()
</script>

<template>
  <main v-if="categories" class="grid grid-cols-6 gap-3 p-3">
    <AdminCategoryItem v-for="(category) in categories" :key="category.id" :category="category" @del-category="delCategory" />
  </main>
</template>

<style scoped>

</style>
