<script setup lang="ts">
import CaptchaImg from '@/components/captcha/img.vue'
import ErrorAlert from '@/components/error/alert.vue'
import LayoutAuthFooter from '@/components/layout/authFooter.vue'
import myAuth from '@/composables/myAuth'

const { form, login } = myAuth()
async function onSubmit() {
  await login(form)
}
</script>

<template>
  <div class="bg-login flex h-screen w-full items-center justify-center bg-cover bg-no-repeat">
    <div class="rounded-xl bg-gray-800/50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div class="text-white">
        <div class="mb-8 flex flex-col items-center">
          <icon-book-open theme="multi-color" size="80" :fill="['#333', '#ff362f', '#FFF', '#43CCF8']" />
          <h1 class="mb-2 text-2xl">
            Ocean's Blog
          </h1>
          <span class="text-gray-300">Enter Login Details</span>
        </div>
      </div>
      <form action="#">
        <div class="mb-4 text-lg">
          <el-input v-model="form.phone" v-clearError="'phone'" placeholder="id@email.com" clearable />
          <ErrorAlert name="phone" />
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
          <ErrorAlert name="password" />
        </div>
        <CaptchaImg
          v-model:captcha-code="form.captcha_code"
          v-model:captcha-key="form.captcha_key"
          v-clearError="'captcha_code'"
        />
        <ErrorAlert name="captcha_code" />
        <div class="mt-8 flex justify-center text-lg text-black">
          <el-button round type="primary" size="large" @click="onSubmit">
            登陆
          </el-button>
        </div>
      </form>
      <LayoutAuthFooter />
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

:deep(.el-input__wrapper) {
  @apply rounded-3xl px-5 py-2;
}
</style>
