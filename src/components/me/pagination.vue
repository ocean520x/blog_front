<script setup lang="ts">
defineProps<{
  perPage: number
  total: number
  currentPage?: number
}>()
defineEmits(['currentChange'])
</script>

<template>
  <main v-show="total / perPage > 1" class="bg-white border border-slate-200 rounded-md mt-3 py-3 flex justify-end">
    <section class="md:hidden flex justify-center">
      <el-pagination
        layout="prev,pager"
        :current-page="+($route.query.page || 1)"
        :hide-on-single-page="true"
        :pager-count="5"
        :page-size="perPage"
        :total="total"
        background
        @current-change="$emit('currentChange', $event)"
      />
    </section>
    <section class="hidden md:flex px-5">
      <el-pagination
        layout="prev, pager, next, jumper,total"
        :current-page="+($route.query.page || 1)"
        :hide-on-single-page="true"
        :pager-count="7"
        :page-size="perPage"
        :total="total"
        background
        @current-change="$emit('currentChange', $event)"
      />
    </section>
  </main>
</template>

<style scoped></style>
