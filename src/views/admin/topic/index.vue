<script setup lang="ts">
import myTopic from '@/composables/myTopic'
import dayjs from 'dayjs'

const { topics, getTopics, adminDelTopic } = myTopic()
await getTopics()
const columns = [
  { id: 'id', label: 'ID', width: 50 },
  { id: 'category.title', label: '所属大类', width: 120 },
  { id: 'title', label: '帖子标题', type: 'substr' },
  { id: 'user.name', label: '作者', width: 100 },
  { id: 'created_at', label: '创建时间', width: 120, type: 'date' },
  { id: '', label: '操作', type: 'buttons', width: 160 },
]
</script>

<template>
  <main v-if="topics" class="">
    <el-card shadow="never">
      <el-table :data="topics?.data" border stripe style="width: 100%" table-layout="fixed">
        <el-table-column v-for="col in columns" :key="col.id" v-slot="{ row }" :prop="col.id" :label="col.label" :width="col.width" align="center">
          <template v-if="col.type === 'image'">
            <el-avatar :src="row[col.id]" shape="square" :size="80" fit="fit" />
          </template>
          <template v-if="col.type === 'substr'">
            <span class="whitespace-nowrap overflow-hidden overflow-ellipsis">{{ row[col.id] }}</span>
          </template>
          <template v-if="col.type === 'date'">
            <span>{{ dayjs(row[col.id]).format('YYYY-MM-DD') }}</span>
          </template>
          <template v-if="col.type === 'buttons'">
            <el-button-group size="small">
              <el-button type="primary" @click="$router.push({ name: 'front.topic.show', params: { t_id: row.id } })">
                <icon-doc-detail />
              </el-button>
              <el-button type="success" @click="$router.push({ name: 'topic.edit', params: { t_id: row.id } })">
                <icon-editor />
              </el-button>
              <el-button type="danger" @click="adminDelTopic(row.id)">
                <icon-delete />
              </el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="p-3 mt-3 flex justify-end">
      <el-pagination
        :current-page="topics?.meta.current_page"
        :hide-on-single-page="true"
        :page-size="topics?.meta.per_page"
        :total="topics?.meta.total"
        background
        layout="prev, pager, next,total"
        @current-change="getTopics"
      />
    </div>
  </main>
</template>

<style scoped></style>
