<script setup lang="ts">
import CommentList from '@/components/comment/list.vue'
import MarkdownPreview from '@/components/markdown/markdownPreview.vue'
import myAuth from '@/composables/myAuth'
import myLocalStore from '@/composables/myLocalStore'
import myTopic from '@/composables/myTopic'
import myUser from '@/composables/myUser'
import dayjs from 'dayjs'
import { useRoute } from 'vue-router'

const { isLogin, isSuperAdmin } = myAuth()
const { isFavorite, getIsFavorite, toggleFavorite } = myUser()
const userInfo = myLocalStore().get('userInfo')
const u_id = userInfo?.id
const route = useRoute()
const t_id = route.params?.t_id
const { topicDetail, getTopicDetail, delTopic } = myTopic()
await getTopicDetail(t_id)
await getIsFavorite(u_id, t_id)
async function toggle_favorite() {
  isFavorite.value = !isFavorite.value
  await toggleFavorite(t_id)
}
</script>

<template>
  <main v-if="topicDetail" class="flex flex-col justify-start items-center min-h-screen">
    <h4 class="font-bold text-slate-700 p-3 text-[18px]">
      {{ topicDetail.title }}
    </h4>
    <section class="flex items-center justify-center gap-2">
      <div class="flex gap-1 text-xs items-center p-3 text-slate-500 cursor-pointer">
        <icon-me />
        <span>{{ topicDetail.user.name }}</span>
      </div>
      <div class="flex gap-1 text-xs items-center p-3 text-slate-500 cursor-pointer">
        <icon-stopwatch-start theme="outline" size="18" fill="#7ed321" />
        <span>{{ dayjs(topicDetail.created_at).fromNow() }}</span>
      </div>
      <div class="flex gap-1 text-xs items-center p-3 text-slate-500 cursor-pointer">
        <icon-all-application />
        <router-link
          :to="{ name: 'per.category', params: { c_id: topicDetail.category.id } }"
          class="hover:text-green-600"
        >
          {{ topicDetail.category.title }}
        </router-link>
      </div>
      <div v-if="u_id" class="flex gap-1 text-xs items-center p-3 text-slate-500 cursor-pointer">
        <icon-star size="16" :class="{ 'text-amber-600': isFavorite }" @click="toggle_favorite" />
      </div>
    </section>
    <section class="pb-3">
      <el-button-group size="small" class="">
        <el-button v-if="isLogin()" type="success" @click="$router.push({ name: 'front.topic.add' })">
          <icon-add />&nbsp;新增
        </el-button>
        <el-button
          v-if="isSuperAdmin() || topicDetail.user.id === userInfo?.id"
          type="primary"
          @click="$router.push({ name: 'front.topic.edit', params: { t_id } })"
        >
          <icon-editor />&nbsp;编辑
        </el-button>
        <el-button
          v-if="isSuperAdmin() || topicDetail.user.id === userInfo?.id"
          type="danger"
          @click="delTopic(topicDetail.id)"
        >
          <icon-delete />&nbsp;删除
        </el-button>
        <el-button type="warning" @click="$router.push({ name: 'home' })">
          <icon-back />&nbsp;返回
        </el-button>
      </el-button-group>
    </section>
    <section class="w-full border border-slate-300 rounded p-3">
      <MarkdownPreview :text="topicDetail.html" />
    </section>
    <CommentList :t-id="topicDetail.id" />
  </main>
</template>

<style scoped></style>
