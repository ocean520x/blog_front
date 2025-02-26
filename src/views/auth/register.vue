<script setup lang="ts">
import CaptchaCode from '@/components/captcha/code.vue'
import ErrorAlert from '@/components/error/alert.vue'
import LayoutAuthFooter from '@/components/layout/authFooter.vue'
import myAuth from '@/composables/myAuth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { form, register } = myAuth()
async function onSubmit() {
  await register(form)
  await router.push({ name: 'login' })
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
          <span class="text-gray-300 text-xl">注册用户</span>
        </div>
      </div>
      <form action="#">
        <div class="mb-4 text-lg">
          <el-input
            v-model="form.phone"
            v-clearError="'phone'"
            style="min-width: 300px"
            placeholder="请输入手机号"
            clearable
          />
        </div>
        <ErrorAlert name="phone" />
        <div class="mb-4 text-lg">
          <el-input
            v-model="form.password"
            v-clearError="'password'"
            style="min-width: 300px"
            type="password"
            show-password
            placeholder="请输入密码"
            clearable
          />
        </div>
        <ErrorAlert name="password" />
        <div class="mb-4 text-lg">
          <el-input
            v-model="form.password_confirmation"
            v-clearError="'password_confirmation'"
            style="min-width: 300px"
            type="password"
            show-password
            placeholder="确认密码"
            clearable
          />
        </div>
        <ErrorAlert name="password_confirmation" />
        <CaptchaCode v-model="form.code" v-clearError="'code'" :phone="form.phone" type="register" />
        <ErrorAlert name="code" />
        <div class="mt-8 flex justify-center text-lg text-black">
          <el-button round type="success" size="large" @click="onSubmit">
            <icon-user class="mr-2" />
            确认注册
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
