<script setup lang="ts">
import MarkdownEditor from '@/components/markdown/editor.vue'
import myTopic from '@/composables/myTopic'
import errorsStore from '@/store/errorsStore'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const t_id = route.params?.t_id
const { topicDetail, editTopic, getTopicDetail, getCategories, categories } = myTopic()
await getTopicDetail(t_id)
await getCategories()
async function edit() {
  if (!topicDetail.value) {
    return
  }
  await editTopic(topicDetail.value)
  router.push({ name: 'topic.index' })
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
          <icon-editor-picture theme="outline" size="20" />&nbsp;
          <span>编辑帖子</span>
        </div>
      </template>
      <el-form v-if="topicDetail" label-width="120px">
        <el-form-item v-if="categories" label="帖子大类">
          <el-select
            v-model="topicDetail.category_id"
            placeholder="请选择帖子大类"
            style="width: 180px"
            @change="clearError('category_id')"
          >
            <el-option
              v-for="(category, index) in categories"
              :key="index"
              :selected="category.id === topicDetail.category?.id"
              :label="category.title"
              :value="category.id"
            />
          </el-select>
          <error-alert name="category_id" />
        </el-form-item>
        <el-form-item label="帖子标题">
          <el-input v-model="topicDetail.title" placeholder="请输入帖子标题" @focus="clearError('title')" />
          <error-alert name="title" />
        </el-form-item>
        <el-form-item label="帖子内容">
          <MarkdownEditor v-model="topicDetail.content" />
          <error-alert name="content" />
        </el-form-item>
        <el-form-item label="帖子排序">
          <el-input v-model="topicDetail.sort" placeholder="请输入帖子排序" @focus="clearError('sort')" />
          <error-alert name="sort" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="edit">
            确认修改
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </main>
</template>

<style scoped></style>
