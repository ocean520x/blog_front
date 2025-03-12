<script setup lang="ts">
import type { UserModel } from '@/interfaces/apiResponse'
import myLocalStore from '@/composables/myLocalStore'
import myUser from '@/composables/myUser'
import { ref } from 'vue'

const { updateCurrentUserNick } = myUser()
const userInfo: UserModel = myLocalStore().get('userInfo')
const user = ref<UserModel>(userInfo)
</script>

<template>
  <main class="min-h-screen grid grid-cols-12 border border-slate-300 rounded">
    <div class="col-span-2 p-3 border-r border-rose-950 bg-slate-800 flex flex-col justify-start items-center">
      <el-avatar shape="square" :size="180" :src="user?.avatar" />
      <router-link
        :to="{ name: 'member.me' }"
        class="bg-slate-100 w-full mt-2 rounded p-2 text-sm text-center hover:bg-slate-300 duration-300 text-slate-800" :class="{ active: $route.name === 'member.me' }"
      >
        修改昵称
      </router-link>
      <router-link
        :to="{ name: 'member.avatar' }"
        class="bg-slate-100 w-full mt-2 rounded p-2 text-sm text-center hover:bg-slate-300 duration-300 text-slate-800"
        :class="{ active: $route.name === 'member.avatar' }"
      >
        修改头像
      </router-link>
    </div>
    <div class="col-span-10">
      <el-card>
        <template #header>
          修改昵称
        </template>
        <el-form label-width="120px">
          <el-form-item label="昵称">
            <el-input v-model="user.name" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateCurrentUserNick(user)">
              确认
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </main>
</template>

<style scoped>
@reference "tailwindcss";
a.active {
  @apply bg-green-600 text-slate-100;
}
</style>
