<script setup lang="ts">
import myAuth from '@/composables/myAuth.js';
import myComment from '@/composables/myComment';
import { reactive } from 'vue';

const { isLogin } = myAuth();
const { t_id } = defineProps<{
  t_id: string | number;
}>();
const { comments, getComments, addComment, addReply, delComment } = myComment();
const form = reactive({
  content: '',
  topic_id: t_id,
});
await getComments(t_id);
const onPublish = async () => {
  try {
    await addComment(form);
    form.content = '';
    await getComments(t_id);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <main class="w-full my-3">
    <div class="">
      <el-card shadow="hover">
        <template #header> 评论列表</template>
        <div class="p-1" v-if="comments">
          <comment-item
            v-for="comment in comments"
            :key="comment.id"
            :comments="comments"
            :comment="comment"
            :add-reply="addReply"
            :del-comment="delComment"
            @refresh="getComments(t_id)"
            type="main"
          >
            <comment-item
              v-for="reply in comment?.reply_comments"
              :key="reply.id"
              :comments="comments"
              :comment="reply"
              :add-reply="addReply"
              :del-comment="delComment"
              @refresh="getComments(t_id)"
              type="item"
              class="ml-5 bg-green-100"
            />
          </comment-item>
        </div>
        <div v-else class=""><icon-info fill="#f5a623" size="16" />&nbsp;暂无评论</div>
      </el-card>
    </div>
    <div class="mt-3">
      <el-card shadow="hover">
        <template #header> 添加评论</template>
        <template v-if="isLogin()">
          <markdown-editor v-model="form.content" />
          <div class="flex justify-center items-center mt-3">
            <el-button @click="onPublish" type="primary"> <icon-editor />&nbsp;发布 </el-button>
          </div>
        </template>
        <template v-else>
          <div class="flex justify-center items-center">
            <el-button @click="$router.push({ name: 'login' })" type="primary"> <icon-me />&nbsp;登陆 </el-button>
          </div>
        </template>
      </el-card>
    </div>
  </main>
</template>

<style scoped></style>
