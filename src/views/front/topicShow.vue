<script setup lang="ts">
import myTopic from '@/composables/myTopic';
import myAuth from '@/composables/myAuth';
import myLocalStore from '@/composables/myLocalStore';
import { useRoute } from 'vue-router';
import dayjs from 'dayjs';
const { isLogin, isSuperAdmin } = myAuth();
const userInfo = myLocalStore().get('userInfo');
const route = useRoute();
const t_id = route.params?.t_id;
const { topicDetail, getTopicDetail } = myTopic();
await getTopicDetail(t_id);
</script>

<template>
  <main class="flex flex-col justify-start items-center min-h-screen" v-if="topicDetail">
    <h4 class="font-bold text-slate-700 p-3 text-[18px]">{{ topicDetail.title }}</h4>
    <section class="flex items-center justify-center gap-5">
      <div class="flex gap-1 text-xs items-center p-3 text-slate-500">
        <icon-me />
        <span>{{ topicDetail.user.name }}</span>
      </div>
      <div class="flex gap-1 text-xs items-center p-3 text-slate-500">
        <icon-stopwatch-start theme="outline" size="18" fill="#7ed321" />
        <span>{{ dayjs(topicDetail.created_at).fromNow() }}</span>
      </div>
    </section>
    <section class="pb-3">
      <el-button-group size="small" class="">
        <el-button v-if="isLogin()" @click="$router.push({ name: 'front.topic.add' })" type="success"
          ><icon-add />&nbsp;新增</el-button
        >
        <el-button v-if="isSuperAdmin() || topicDetail.user.id === userInfo?.id" type="primary"
          ><icon-editor />&nbsp;编辑</el-button
        >
        <el-button v-if="isSuperAdmin() || topicDetail.user.id === userInfo?.id" type="danger"
          ><icon-delete />&nbsp;删除</el-button
        >
        <el-button @click="$router.push({ name: 'home' })" type="warning"><icon-back />&nbsp;返回</el-button>
      </el-button-group>
    </section>
    <section class="w-full border border-slate-300 rounded p-3">
      {{ topicDetail.content }}
    </section>
  </main>
</template>

<style scoped></style>
