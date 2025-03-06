<script setup lang="ts">
import type { ApiData } from '@/interfaces/apiResponse'
import type { UploadRequestOptions } from 'element-plus'
import myUser from '@/composables/myUser'
import myAxios from '@/plugins/axios'
import { Plus } from '@element-plus/icons-vue'
import { ref } from 'vue'

const props = defineProps<{ modelValue: string | undefined }>()
const emit = defineEmits<{
  (e: 'update:modelValue', url: string): void
}>()
const { updateCurrentUser } = myUser()
const imageUrl = ref(props.modelValue)
function handleAvatarSuccess(response: Record<string, any>) {
  imageUrl.value = response.url
}
async function request(options: UploadRequestOptions) {
  const formData = new FormData()
  formData.append('file', options.file)
  const res = await myAxios.request<ApiData<{ url: string }>>({
    url: 'upload/image',
    method: 'POST',
    data: formData,
  })
  await updateCurrentUser({ avatar: res.data.url })
  emit('update:modelValue', res.data.url)
  return res.data
}
</script>

<template>
  <el-upload
    class="border border-dashed border-[var(--el-border-color)] rounded-md cursor-pointer relative overflow-hidden transition-[var(--el-transition-duration-fast)] hover:border-[var(--el-color-primary)] "
    action=""
    :http-request="request"
    @on-success="handleAvatarSuccess"
  >
    <img v-if="imageUrl" :src="imageUrl" class="h-[178px] block">
    <el-icon v-else class="avatar-uploader-icon">
      <Plus />
    </el-icon>
  </el-upload>
</template>

<style scoped>
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  text-align: center;
}
</style>
