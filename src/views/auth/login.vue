<template>
  <div class="bg-login flex h-screen w-full items-center justify-center bg-cover bg-no-repeat">
    <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div class="text-white">
        <div class="mb-8 flex flex-col items-center">
          <icon-book-open theme="multi-color" size="80" :fill="['#333', '#ff362f', '#FFF', '#43CCF8']" />
          <h1 class="mb-2 text-2xl">Ocean's Blog</h1>
          <span class="text-gray-300">Enter Login Details</span>
        </div>
      </div>
      <form action="#">
        <div class="mb-4 text-lg">
          <el-input v-model="form.phone" v-clearError="'phone'" placeholder="id@email.com" clearable />
          <error-alert name="phone" />
        </div>

        <div class="mb-4 text-lg">
          <el-input
            v-model="form.password"
            v-clearError="'password'"
            type="password"
            show-password
            placeholder="*********"
            clearable
          />
          <error-alert name="password" />
        </div>
        <captcha-img
          v-model:captchaCode="form.captcha_code"
          v-model:captchaKey="form.captcha_key"
          v-clearError="'captcha_code'"
        />
        <error-alert name="captcha_code" />
        <div class="mt-8 flex justify-center text-lg text-black">
          <el-button round type="primary" size="large" @click="onSubmit">登陆</el-button>
        </div>
      </form>

      <div class="flex items-center justify-center text-white text-xs gap-3 mt-8">
        <a href="#" class="flex items-center gap-1 hover:text-pink-300 duration-300">
          <icon-home />
          进入首页</a
        >
        <a href="#" class="flex items-center gap-1 hover:text-pink-300 duration-300">
          <icon-user />
          注册用户</a
        >
        <a href="#" class="flex items-center gap-1 hover:text-pink-300 duration-300">
          <icon-face-recognition />
          找回密码</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import myAuth from '@/composables/myAuth';
const { form, login } = myAuth();
const onSubmit = async () => {
  await login(form);
};
</script>

<style scoped>
:deep(.el-input__wrapper) {
  @apply rounded-3xl px-5 py-2;
}
</style>
