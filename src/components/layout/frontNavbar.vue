<script setup lang="ts">
import myAuth from '@/composables/myAuth.js';

const isLogin = ref(false);

function getLoginState() {
  isLogin.value = myAuth().isLogin();
}

getLoginState();
</script>

<template>
  <main class="bg-slate-800">
    <section class="h-[60px] w-full xl:w-web m-auto flex items-center justify-between px-3 box-border text-slate-100">
      <div>
        <router-link to="/" class="flex items-center gap-2">
          <icon-circle-five-line theme="outline" size="24" fill="#7ed321" />
          <span class="font-bold">欧顺论坛</span>
        </router-link>
      </div>

      <div class="flex items-center gap-2">
        <router-link to="/">
          <icon-home theme="outline" size="22" fill="#7ed321" />
        </router-link>
        <template v-if="isLogin">
          <layout-avatar background-color="#726e6e" @logout="getLoginState" type="front" />
        </template>
        <template v-else>
          <el-button @click="$router.push({ name: 'login' })" type="success" size="small">
            <template #icon>
              <icon-me />
            </template>
            登陆/注册
          </el-button>
        </template>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
