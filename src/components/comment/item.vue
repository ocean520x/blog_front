<script setup lang="ts">
import dayjs from 'dayjs';
import MarkdownPreview from '@/components/markdown/markdownPreview.vue';
import { MyComment } from '@/interfaces/apiResponse';
import { reactive } from 'vue';
import myAuth from '@/composables/myAuth';
import myLocalStore from '@/composables/myLocalStore';

const { comment, type, addReply, delComment } = defineProps<{
  comment: MyComment;
  type: 'main' | 'item';
  addReply?: (data: any) => Promise<MyComment>;
  delComment: (c_id: string | number) => Promise<void>;
}>();
const emit = defineEmits(['refresh']);
const user_id = myLocalStore().get('userInfo')?.id;
const showReply = ref<boolean>(false);
const form = reactive({
  content: '',
  topic_id: comment.topic_id,
  comment_id: comment.id,
});
const onAddReply = async () => {
  await addReply(form);
  emit('refresh');
  showReply.value = false;
  form.content = '';
};
</script>

<template>
  <main>
    <section class="mt-3 border slate-300 rounded shadow">
      <div class="p-2 border border-b-slate-200 flex justify-between items-center">
        <div class="flex items-center justify-between gap-1">
          <div>
            <el-avatar
              @click="$router.push({ name: 'person.me', params: { u_id: comment.user.id } })"
              :src="comment.user.avatar"
              shape="square"
              :size="42"
              class="hover:scale-105 duration-300 cursor-pointer"
            />
          </div>
          <div class="flex flex-col gap-1 justify-center">
            <span class="flex items-center justify-start text-xs text-slate-600 gap-1">
              <icon-me fill="#9013fe" />
              <router-link :to="{ name: 'person.me', params: { u_id: comment.user.id } }">{{
                comment.user.name
              }}</router-link></span
            >
            <span class="flex items-center justify-start text-xs text-slate-600 gap-1">
              <icon-stopwatch-start fill="#7ed321" />
              {{ dayjs(comment.created_at).fromNow() }}
            </span>
          </div>
        </div>
        <div class="flex gap-2 items-center justify-center">
          <icon-comment
            v-if="myAuth().isLogin()"
            @click="showReply = !showReply"
            theme="outline"
            size="16"
            class="hover:text-green-700 cursor-pointer"
          />
          <icon-delete
            v-if="myAuth().isSuperAdmin() || comment?.user_id === user_id"
            @click="delComment(comment.id)"
            theme="outline"
            size="16"
            class="hover:text-amber-700 cursor-pointer"
          />
        </div>
      </div>
      <div class="p-3 text-slate-600">
        <template v-if="type === 'main'">
          <markdown-preview :text="comment.html" />
        </template>
        <template v-else>
          <div class="flex justify-start items-center text-xs gap-1">
            <icon-circle-double-right theme="outline" size="14" fill="#7ed321" />
            <span
              @click="$router.push({ name: 'person.me', params: { u_id: comment.reply_user.id } })"
              class="hover:underline cursor-pointer"
              >{{ comment.reply_user?.name }}:</span
            >
          </div>
          <div class="text-xs text-slate-600">{{ comment.content }}</div>
        </template>
        <div v-if="showReply" class="mt-2">
          <el-input
            v-model="form.content"
            v-clearError="'content'"
            :rows="2"
            type="textarea"
            style="font-size: 12px"
            placeholder="请输入回复内容"
          />
          <error-alert name="content" />
          <el-button @click="onAddReply" type="success" size="small" class="mt-2">
            <icon-comment />&nbsp;回复
          </el-button>
        </div>
      </div>
    </section>
    <slot />
  </main>
</template>

<style scoped></style>
