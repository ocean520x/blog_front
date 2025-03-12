<script setup lang="ts">
import myUser from '@/composables/myUser'
import { useRoute } from 'vue-router'

const { user, getOneUser } = myUser()
const route = useRoute()
const u_id = route.params?.u_id
await getOneUser(u_id)
</script>

<template>
  <main v-if="user">
    <el-card shadow="hover">
      <template #header>
        {{ user.name }}的详情
      </template>

      <el-form label-width="auto" style="max-width: 600px">
        <el-form-item label="姓名">
          <el-input v-model="user.name" />
        </el-form-item>
        <el-form-item label="头像">
          <el-avatar :src="user.avatar" shape="square" :size="50" />
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="user.phone" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="user.email" />
        </el-form-item>
        <el-form-item label="冻结">
          <el-input v-model="user.is_freeze" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="$router.push({ name: 'user.index' })">
            返回
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </main>
</template>

<style scoped></style>
