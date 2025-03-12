<script setup lang="ts">
import markdownPreview from '@/components/markdown/markdownPreview.vue'
import myComment from '@/composables/myComment'
import dayjs from 'dayjs'

const { pageAllComments, getAllComments, delComment } = myComment()
await getAllComments()
const columns = [
  { id: 'id', label: 'ID', width: 50 },
  { id: 'topic.title', label: '所属帖子' },
  { id: 'html', label: '内容', type: 'html' },
  { id: 'user.name', label: '作者', width: 100 },
  { id: 'created_at', label: '创建时间', width: 120, type: 'date' },
  { id: '', label: '操作', type: 'buttons', width: 160 },
]
</script>

<template>
  <main v-if="pageAllComments" class="">
    <el-card shadow="never">
      <el-table :data="pageAllComments?.data" border stripe style="width: 100%" table-layout="fixed">
        <el-table-column v-for="col in columns" :key="col.id" v-slot="{ row }" :prop="col.id" :label="col.label" :width="col.width" align="center">
          <template v-if="col.type === 'date'">
            <span>{{ dayjs(row[col.id]).format('YYYY-MM-DD') }}</span>
          </template>
          <template v-if="col.type === 'html'">
            <markdownPreview :text="row[col.id]" />
          </template>
          <template v-if="col.type === 'buttons'">
            <el-button-group size="small">
              <el-button type="primary" @click="$router.push({ name: 'front.topic.show', params: { t_id: row.topic.id } })">
                <icon-doc-detail />
              </el-button>
              <el-button type="danger" @click="delComment(row.id)">
                <icon-delete />
              </el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="p-3 mt-3 flex justify-end">
      <el-pagination
        :current-page="pageAllComments?.meta.current_page"
        :hide-on-single-page="true"
        :page-size="pageAllComments?.meta.per_page"
        :total="pageAllComments?.meta.total"
        background
        layout="prev, pager, next,total"
        @current-change="getAllComments"
      />
    </div>
  </main>
</template>

<style scoped></style>
