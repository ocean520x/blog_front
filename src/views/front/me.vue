<script setup lang="ts">
import myUser from '@/composables/myUser';
const route = useRoute();
const u_id = route.params?.u_id;
const { getOneUser, user, topics, getOneUserTopics } = myUser();
await getOneUser(u_id);
await getOneUserTopics({ page: route.query.page || 1, u_id: route.params.u_id });
</script>

<template>
  <main class="min-h-screen p-3">
    <me-avatar :user="user" />
    <div class="mt-2">
      <div class="flex justify-center items-center gap-2">
        <router-link
          to="#"
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
      </div>
      <div v-if="topics" class="mt-3">
        <el-card shadow="never">
          <section class="">
            <div
              v-for="(topic, index) in topics.data"
              :key="index"
              @click="$router.push({ name: 'front.topic.show', params: { t_id: topic.id } })"
              class="flex justify-start items-center gap-2 text-slate-600 p-3 border-b border-b-slate-300 hover:text-green-600 cursor-pointer duration-300"
            >
              <el-tag type="primary">帖子</el-tag>
              <span>{{ topic.title }}</span>
            </div>
            <div class="right"></div>
          </section>
        </el-card>
        <me-pagination
          @currentChange="
            $router.push({ name: 'person.me', params: { u_id: $route.params.u_id }, query: { page: $event } })
          "
          :per_page="topics.meta.per_page"
          :total="topics.meta.total"
        />
      </div>
      <div v-else class="flex justify-center items-center p-3 text-slate-600 text-sm gap-2">
        <icon-info size="16" fill="#f5a623" /> 他没有发表过帖子
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
