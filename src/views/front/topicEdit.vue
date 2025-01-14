<script setup lang="ts">
import myTopic from '@/composables/myTopic';
import { useRoute, useRouter } from 'vue-router';
import errorsStore from '@/store/errorsStore';
const router = useRouter();
const route = useRoute();
const t_id = route.params?.t_id;
const { topicDetail, editTopic, getTopicDetail, getCategories, categories } = myTopic();
await getTopicDetail(t_id);
await getCategories();
const edit = async () => {
  const res = await editTopic(topicDetail.value);
  router.push({ name: 'front.topic.show', params: { t_id: res.data.id } });
};
const clearError = (name: string) => {
  errorsStore().clearError(name);
};
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
      <el-form label-width="120px">
        <el-form-item v-if="categories" label="帖子大类">
          <el-select
            v-model="topicDetail.category_id"
            @change="clearError('category_id')"
            placeholder="请选择帖子大类"
            style="width: 180px"
          >
            <el-option
              v-for="(category, index) in categories"
              :key="index"
              :selected="category.id === topicDetail.category.id"
              :label="category.title"
              :value="category.id"
            />
          </el-select>
          <error-alert name="category_id" />
        </el-form-item>
        <el-form-item label="帖子标题">
          <el-input v-model="topicDetail.title" @focus="clearError('title')" placeholder="请输入帖子标题" />
          <error-alert name="title" />
        </el-form-item>
        <el-form-item label="帖子内容">
          <markdown-editor v-model="topicDetail.content" />
          <error-alert name="content" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="edit">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </main>
</template>

<style scoped></style>
