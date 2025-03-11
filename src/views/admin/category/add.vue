<script setup lang="ts">
import ErrorAlert from '@/components/error/alert.vue'
import myTab from '@/components/tab/index.vue'
import myTopic from '@/composables/myTopic'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const { addCategory } = myTopic()
const router = useRouter()
const form = reactive({
  title: '',
  icon: 'WaterfallsH',
})
const tabs = ref([
  { label: '帖子大类添加', routeName: 'category.add' },
  { label: '帖子大类编辑', routeName: 'category.edit' },
])
async function onSubmit() {
  try {
    await addCategory(form)
    await router.push({ name: 'category.index' })
  }
  catch {

  }
}
</script>

<template>
  <main class="p-3">
    <my-tab :tabs="tabs" />
    <el-card shadow="never">
      <el-form label-width="120px">
        <el-form-item label="帖子大类标题">
          <input v-model="form.title" v-clearError="'title'" class="border border-slate-400 rounded outline-slate-400 py-[2px] px-2 w-1/3">
          <ErrorAlert name="title" />
        </el-form-item>
        <el-form-item label="帖子大类Icon">
          <input v-model="form.icon" v-clearError="'icon'" class="border border-slate-400 rounded outline-slate-400 py-[2px] px-2 w-1/3">
          <ErrorAlert name="icon" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            创建
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </main>
</template>

<style scoped>

</style>
