<template>
  <div class="bg-login flex h-screen w-full items-center justify-center bg-cover bg-no-repeat">
    <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div class="text-white">
        <div class="mb-8 flex flex-col items-center">
          <icon-book-open theme="multi-color" size="80" :fill="['#333', '#ff362f', '#FFF', '#43CCF8']" />
          <h1 class="mb-2 text-2xl">Ocean's Blog</h1>
          <span class="text-gray-300 text-xl">重置密码</span>
        </div>
      </div>
      <form action="#">
        <div class="mb-4 text-lg">
          <el-input
            v-model="form.phone"
            v-clearError="'phone'"
            style="width: 300px"
            placeholder="请输入手机号"
            clearable
          />
        </div>
        <error-alert name="phone" />
        <div class="mb-4 text-lg">
          <el-input
            v-model="form.password"
            v-clearError="'password'"
            style="width: 300px"
            type="password"
            show-password
            placeholder="请输入新密码"
            clearable
          />
        </div>
        <error-alert name="password" />
        <div class="mb-4 text-lg">
          <el-input
            v-model="form.password_confirmation"
            v-clearError="'password_confirmation'"
            style="width: 300px"
            type="password"
            show-password
            placeholder="确认密码"
            clearable
          />
        </div>
        <error-alert name="password_confirmation" />
        <captcha-code v-model="form.code" :phone="form.phone" type="rePassword" />
        <div class="mt-8 flex justify-center text-lg text-black">
          <el-button @click="onSubmit" round type="primary" size="large"
            ><icon-setting-three class="mr-2" />确认</el-button
          >
        </div>
      </form>
      <layout-auth-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import myAuth from '@/composables/myAuth';
import { useRouter } from 'vue-router';
const router = useRouter();
const { form, rePassword } = myAuth();
const onSubmit = async () => {
  await rePassword(form);
  await router.push({ name: 'login' });
};
</script>

<style scoped>
:deep(.el-input__wrapper) {
  @apply rounded-3xl px-5 py-2;
}
</style>
