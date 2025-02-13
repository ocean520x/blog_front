<script setup lang="ts">
const props = defineProps<{
  per_page: number;
  total: number;
  current_page?: number;
}>();
defineEmits(['currentChange']);
</script>

<template>
  <main v-show="total / per_page > 1" class="bg-white border rounded-md mt-3 py-3 flex justify-end">
    <section class="md:hidden flex justify-center">
      <el-pagination
        @current-change="$emit('currentChange', $event)"
        layout="prev,pager"
        :current-page="+($route.query.page || 1)"
        :hide-on-single-page="true"
        :pager-count="5"
        :page-size="per_page"
        :total="total"
        background
      />
    </section>
    <section class="hidden md:flex px-5">
      <el-pagination
        @current-change="$emit('currentChange', $event)"
        layout="prev, pager, next, jumper,total"
        :current-page="+($route.query.page || 1)"
        :hide-on-single-page="true"
        :pager-count="7"
        :page-size="per_page"
        :total="total"
        background
      />
    </section>
  </main>
</template>

<style scoped></style>
