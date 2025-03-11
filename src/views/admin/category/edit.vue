<script setup lang="ts">
import ErrorAlert from '@/components/error/alert.vue'
import myTab from '@/components/tab/index.vue'
import myTopic from '@/composables/myTopic'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const { getCategory, category, editCategory } = myTopic()
const c_id = route?.params?.c_id
await getCategory(c_id)
const tabs = ref([
  { label: '帖子大类添加', routeName: 'category.add' },
  { label: `[${category.value?.title}]的编辑`, routeName: 'category.edit' },
])
async function onSubmit() {
  try {
    await editCategory(category)
    await router.push({ name: 'category.index' })
  }
  catch {

  }
}
</script>

<template>
  <main v-if="category" class="p-3">
    <my-tab :tabs="tabs" />
    <el-card shadow="never">
      <el-form label-width="120px">
        <el-form-item label="帖子大类标题">
          <input v-model="category.title" v-clearError="'title'" class="border border-slate-400 rounded outline-slate-400 py-[2px] px-2 w-1/3">
          <ErrorAlert name="title" />
        </el-form-item>
        <el-form-item label="帖子大类Icon">
          <input v-model="category.icon" v-clearError="'icon'" class="border border-slate-400 rounded outline-slate-400 py-[2px] px-2 w-1/3">
          <ErrorAlert name="icon" />
        </el-form-item>
        <el-form-item label="排序">
          <input v-model="category.sort" v-clearError="'sort'" type="number" class="border border-slate-400 rounded outline-slate-400 py-[2px] px-2 w-1/3">
          <ErrorAlert name="sort" />
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="onSubmit">
            确认修改
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </main>
</template>

<style scoped>

</style>
