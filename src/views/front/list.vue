<script setup lang="ts">

const content = ref([
  { id: 1, title: '自动生成标题1', content: '自动生成内容1' },
  { id: 2, title: '自动生成标题2', content: '自动生成内容2' },
  { id: 3, title: '自动生成标题3', content: '自动生成内容3' },
  { id: 4, title: '自动生成标题4', content: '自动生成内容4' },
  { id: 5, title: '自动生成标题5', content: '自动生成内容5' },
  { id: 6, title: '自动生成标题6', content: '自动生成内容6' },
  { id: 7, title: '自动生成标题7', content: '自动生成内容7' },
  { id: 8, title: '自动生成标题8', content: '自动生成内容8' },
  { id: 9, title: '自动生成标题9', content: '自动生成内容9' },
  { id: 10, title: '自动生成标题10', content: '自动生成内容10' },
  { id: 11, title: '自动生成标题11', content: '自动生成内容11' }
]);


</script>
<template>
  <div class="min-h-screen flex justify-center p-8 bg-slate-800">
    <animate-list :duration="5" :delay=".2">
      <section :data-index="index" v-for="(item,index) in content" :key="item.id"
          class="text-white bg-green-600 w-full p-2 mb-3 rounded cursor-pointer">{{ item.title }}
      </section>
    </animate-list>
  </div>
</template>

<style scoped>

</style>