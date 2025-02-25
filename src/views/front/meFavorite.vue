<script setup lang="ts">
import myUser from '@/composables/myUser';
import dayjs from 'dayjs';
import myAuth from '@/composables/myAuth';
const route = useRoute();
const u_id = route.params?.u_id;
const { getOneUser, user, topics, getOneUserFavoriteTopics } = myUser();
await getOneUser(u_id);
await getOneUserFavoriteTopics({ page: route.query.page || 1, u_id: route.params.u_id });
</script>

<template>
  <main class="min-h-screen p-3">
    <me-avatar :user="user" />
    <div class="mt-2">
      <div class="flex justify-center items-center gap-2">
        <router-link
          :to="{ name: 'person.me' }"
          class="bg-slate-800 text-slate-100 px-2 py-1 text-xs rounded hover:bg-slate-600 duration-300"
          :class="{ active: $route.name === 'person.me' }"
          >TA的帖子</router-link
        >
        <router-link
          :to="{ name: 'person.me_comment' }"
          class="bg-slate-800 text-slate-100 px-2 py-1 text-xs rounded hover:bg-slate-600 duration-300"
          :class="{ active: $route.name === 'person.me_comment' }"
          >TA的评论</router-link
        >
        <router-link
          v-if="myAuth().isMine(u_id)"
          :to="{ name: 'person.me_favorite' }"
          class="bg-slate-800 text-slate-100 px-2 py-1 text-xs rounded hover:bg-slate-600 duration-300"
          :class="{ active: $route.name === 'person.me_favorite' }"
          >我的收藏</router-link
        >
      </div>
      <div v-if="topics && topics.data?.length > 0" class="mt-3">
        <el-card shadow="never">
          <section
            v-for="(topic, index) in topics.data"
            :key="index"
            class="flex justify-between items-center border-b border-b-slate-300"
          >
            <div
              @click="$router.push({ name: 'front.topic.show', params: { t_id: topic.id } })"
              class="flex justify-start items-center gap-2 text-slate-600 p-3 hover:text-green-600 cursor-pointer duration-300"
            >
              <el-tag type="warning">收藏</el-tag>
              <span>{{ topic.title }}</span>
            </div>
            <div class="flex justify-end items-center text-xs text-slate-500 gap-2">
              <icon-timer size="14" fill="#50e3c2" />
              {{ dayjs(topic.created_at).fromNow() }}
            </div>
          </section>
        </el-card>
        <me-pagination
          @currentChange="
            $router.push({ name: 'person.me_favorite', params: { u_id: $route.params.u_id }, query: { page: $event } })
          "
          :per_page="topics.meta.per_page"
          :total="topics.meta.total"
        />
      </div>
      <div v-else class="flex justify-center items-center p-3 text-slate-600 text-sm gap-2">
        <icon-info size="16" fill="#f5a623" /> 我未收藏过帖子
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
a.active {
  --tw-bg-opacity: 1;
  background-color: rgb(71 85 105 / var(--tw-bg-opacity));
}
</style>
