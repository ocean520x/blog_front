<script setup lang="ts">
import { ref } from 'vue';
import myLocalStore from '@/composables/myLocalStore';
import { UserModel } from '@/interfaces/apiResponse';
import myAuth from '@/composables/myAuth';
const props = withDefaults(defineProps<{ backgroundColor?: string; type: 'front' | 'admin' }>(), {
  backgroundColor: 'white',
});
const emit = defineEmits(['logout']);
const show = ref(false);
const isFullScreen = ref<boolean>(false);
const info = ref<UserModel>(myLocalStore().get('userInfo'));
const toggleFullScreen = () => {
  isFullScreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen();
  isFullScreen.value = !isFullScreen.value;
};

const handleFullScreenChange = () => {
  isFullScreen.value = document.fullscreenElement !== null;
};

const logout = async () => {
  await myAuth().logout();
  info.value = null;
  emit('logout');
};
const u_id = info.value?.id;
onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullScreenChange);
});
onUnmounted(() => {
  document.removeEventListener('fullscreenchange', handleFullScreenChange);
});
</script>

<template>
  <div class="relative">
    <div class="flex items-center justify-center gap-2" v-if="info">
      <icon-full-screen-one size="20" fill="#7ed321" v-if="!isFullScreen" @click="toggleFullScreen" />
      <icon-off-screen-one size="20" fill="#7ed321" v-else @click="toggleFullScreen" />
      <el-avatar shape="square" :size="32" :src="info?.avatar ? info.avatar : '/images/avatar.png'" />
      <span class="text-xs hover:text-green-600 duration-300 cursor-pointer" @click="show = !show">{{
        info.name
      }}</span>
    </div>
    <div
      v-show="show"
      :style="{ backgroundColor: backgroundColor }"
      class="flex flex-col absolute top-[30px] left-6 px-1 py-2 z-50 border border-slate-400 shadow rounded"
    >
      <span @click="$router.push({ name: 'person.me', params: { u_id } })" class="span-item">个人中心</span>
      <span @click="$router.push({ name: 'member.me' })" class="span-item">编辑个资</span>
      <router-link v-if="myAuth().isSuperAdmin() && type != 'admin'" :to="{ name: 'admin' }" class="span-item"
        >进入后台</router-link
      >
      <span class="span-item" @click="logout">退出登录</span>
    </div>
  </div>
</template>

<style scoped>
.span-item {
  @apply whitespace-nowrap text-xs py-1 px-3 border-b border-slate-300 cursor-pointer hover:text-green-600 duration-300;
}
</style>
