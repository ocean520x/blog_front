<script setup lang="ts">
import myTopic from '@/composables/myTopic';
import myAuth from '@/composables/myAuth';
import myLocalStore from '@/composables/myLocalStore';
import { useRoute } from 'vue-router';
import dayjs from 'dayjs';
import MarkdownPreview from '@/components/markdown/markdownPreview.vue';
import myUser from '@/composables/myUser';
const { isLogin, isSuperAdmin } = myAuth();
const { isFavorite, getIsFavorite, toggleFavorite } = myUser();
const userInfo = myLocalStore().get('userInfo');
const u_id = userInfo?.id;
const route = useRoute();
const t_id = route.params?.t_id;
const { topicDetail, getTopicDetail, delTopic } = myTopic();
await getTopicDetail(t_id);
await getIsFavorite(u_id, t_id);
const toggle_favorite = async () => {
  isFavorite.value = !isFavorite.value;
  await toggleFavorite(t_id);
};
</script>

<template>
  <main class="flex flex-col justify-start items-center min-h-screen" v-if="topicDetail">
    <h4 class="font-bold text-slate-700 p-3 text-[18px]">{{ topicDetail.title }}</h4>
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
          >{{ topicDetail.category.title }}</router-link
        >
      </div>
      <div v-if="u_id" class="flex gap-1 text-xs items-center p-3 text-slate-500 cursor-pointer">
        <icon-star @click="toggle_favorite" size="16" :class="{ 'text-amber-600': isFavorite }" />
      </div>
    </section>
    <section class="pb-3">
      <el-button-group size="small" class="">
        <el-button v-if="isLogin()" @click="$router.push({ name: 'front.topic.add' })" type="success"
          ><icon-add />&nbsp;新增</el-button
        >
        <el-button
          v-if="isSuperAdmin() || topicDetail.user.id === userInfo?.id"
          @click="$router.push({ name: 'front.topic.edit', params: { t_id } })"
          type="primary"
          ><icon-editor />&nbsp;编辑</el-button
        >
        <el-button
          v-if="isSuperAdmin() || topicDetail.user.id === userInfo?.id"
          @click="delTopic(topicDetail.id)"
          type="danger"
          ><icon-delete />&nbsp;删除</el-button
        >
        <el-button @click="$router.push({ name: 'home' })" type="warning"><icon-back />&nbsp;返回</el-button>
      </el-button-group>
    </section>
    <section class="w-full border border-slate-300 rounded p-3">
      <markdown-preview :text="topicDetail.html" />
    </section>
    <comment-list :t_id="topicDetail.id" />
  </main>
</template>

<style scoped></style>
