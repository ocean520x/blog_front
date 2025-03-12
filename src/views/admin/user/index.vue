<script setup lang="ts">
import MyPagination from '@/components/me/pagination.vue'
import myUser from '@/composables/myUser'
import dayjs from 'dayjs'
import { useRoute } from 'vue-router'

const route = useRoute()
const { users, getUsers, switchFreeze, delUser } = myUser()
await getUsers({ page: route.query.page || 1 })
const columns = [
  { id: 'id', label: 'ID', width: 50 },
  { id: 'avatar', label: '头像', type: 'image' },
  { id: 'name', label: '用户名' },
  { id: 'email', label: '邮箱', type: 'substr' },
  { id: 'phone', label: '手机' },
  { id: 'created_at', label: '创建时间', type: 'date' },
  { id: '', label: '操作', type: 'buttons' },
]
</script>

<template>
  <main v-if="users" class="">
    <el-card shadow="never">
      <el-table :data="users?.data" border stripe style="width: 100%" table-layout="fixed">
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
            <el-button-group v-if="row.id != 1" size="small">
              <el-button type="primary" @click="$router.push({ name: 'admin.user.detail', params: { u_id: row.id } })">
                <icon-doc-detail />
              </el-button>
              <el-button v-if="row.is_freeze === 'no'" type="warning" @click="switchFreeze(row.id, 'no')">
                <icon-lock />
              </el-button>
              <el-button v-else type="success" @click="switchFreeze(row.id, 'yes')">
                <icon-unlock />
              </el-button>
              <el-button type="danger" @click="delUser(row.id)">
                <icon-delete />
              </el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <MyPagination :per-page="users.meta.per_page" :total="users.meta.total" @current-change="$router.push({ name: 'user.index', params: { u_id: $route.params?.u_id }, query: { page: $event } })" />
  </main>
</template>

<style scoped></style>
