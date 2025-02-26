<script setup lang="ts">
import myTopic from '@/composables/myTopic'
import errorsStore from '@/store/errorsStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const { form, addTopic, getCategories, categories } = myTopic()
await getCategories()
async function add() {
  const res = await addTopic(form)
  router.push({ name: 'front.topic.show', params: { t_id: res.data.id } })
}
function clearError(name: string) {
  errorsStore().clearError(name)
}
</script>

<template>
  <main class="min-h-screen p-3">
    <el-card shadow="hover">
      <template #header>
        <div class="flex items-center justify-start text-slate-600">
          <icon-add-picture theme="outline" size="20" />&nbsp;
          <span>发布帖子</span>
        </div>
      </template>
      <el-form label-width="120px">
        <el-form-item v-if="categories" label="帖子大类">
          <el-select
            v-model="form.category_id"
            placeholder="请选择帖子大类"
            style="width: 180px"
            @change="clearError('category_id')"
          >
            <el-option
              v-for="(category, index) in categories"
              :key="index"
              :label="category.title"
              :value="category.id"
            />
          </el-select>
          <error-alert name="category_id" />
        </el-form-item>
        <el-form-item label="帖子标题">
          <el-input v-model="form.title" placeholder="请输入帖子标题" @focus="clearError('title')" />
          <error-alert name="title" />
        </el-form-item>
        <el-form-item label="帖子内容">
          <markdown-editor v-model="form.content" />
          <error-alert name="content" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add">
            发布帖子
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </main>
</template>

<style scoped></style>
