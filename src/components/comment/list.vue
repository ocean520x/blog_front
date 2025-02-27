<script setup lang="ts">
import MarkdownEditor from '@/components/markdown/editor.vue'
import myAuth from '@/composables/myAuth.js'
import myComment from '@/composables/myComment.js'
import { reactive } from 'vue'
import CommentItem from './item.vue'

const { tId } = defineProps<{
  tId: string | number
}>()
const { isLogin } = myAuth()
const { comments, getComments, addComment, addReply, delComment } = myComment()
const form = reactive({
  content: '',
  topic_id: tId,
})
await getComments(tId)
async function onPublish() {
  try {
    await addComment(form)
    form.content = ''
    await getComments(tId)
  }
  catch {

  }
}
</script>

<template>
  <main class="w-full my-3">
    <div class="">
      <el-card shadow="hover">
        <template #header>
          评论列表
        </template>
        <div v-if="comments" class="p-1">
          <CommentItem
            v-for="comment in comments"
            :key="comment.id"
            :comments="comments"
            :comment="comment"
            :add-reply="addReply"
            :del-comment="delComment"
            type="main"
            @refresh="getComments(tId)"
          >
            <CommentItem
              v-for="reply in comment?.reply_comments"
              :key="reply.id"
              :comments="comments"
              :comment="reply"
              :add-reply="addReply"
              :del-comment="delComment"
              type="item"
              class="ml-5 bg-green-100"
              @refresh="getComments(tId)"
            />
          </CommentItem>
        </div>
        <div v-else class="">
          <icon-info fill="#f5a623" size="16" />&nbsp;暂无评论
        </div>
      </el-card>
    </div>
    <div class="mt-3">
      <el-card shadow="hover">
        <template #header>
          添加评论
        </template>
        <template v-if="isLogin()">
          <MarkdownEditor v-model="form.content" />
          <div class="flex justify-center items-center mt-3">
            <el-button type="primary" @click="onPublish">
              <icon-editor />&nbsp;发布
            </el-button>
          </div>
        </template>
        <template v-else>
          <div class="flex justify-center items-center">
            <el-button type="primary" @click="$router.push({ name: 'login' })">
              <icon-me />&nbsp;登陆
            </el-button>
          </div>
        </template>
      </el-card>
    </div>
  </main>
</template>

<style scoped></style>
