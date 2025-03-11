<script setup lang="ts">
import myTab from '@/components/tab/index.vue'
import { reactive, ref } from 'vue'

const form = reactive({
  title: '',
  icon: 'WaterfallsH',
})
const tabs = ref([
  { label: '帖子大类添加', routeName: 'category.add' },
  { label: '帖子大类编辑', routeName: 'category.edit' },
])
</script>

<template>
  <main class="p-3">
    <my-tab :tabs="tabs" />
    <el-card shadow="never">
      <el-form label-width="120px">
        <el-form-item label="帖子大类标题">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="帖子大类Icon">
          <el-input v-model="form.icon" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">
            创建
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </main>
</template>

<style scoped>

</style>
