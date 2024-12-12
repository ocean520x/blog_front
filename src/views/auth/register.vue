<template>
  <div class="bg-login flex h-screen w-full items-center justify-center bg-cover bg-no-repeat">
    <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div class="text-white">
        <div class="mb-8 flex flex-col items-center">
          <icon-book-open theme="multi-color" size="80" :fill="['#333', '#ff362f', '#FFF', '#43CCF8']" />
          <h1 class="mb-2 text-2xl">Ocean's Blog</h1>
          <span class="text-gray-300 text-xl">注册用户</span>
        </div>
      </div>
      <form action="#">
        <div class="mb-4 text-lg">
          <el-input v-model="form.tel" style="width: 300px" placeholder="请输入手机号" clearable />
        </div>

        <div class="mb-4 text-lg">
          <el-input
            v-model="form.password"
            style="width: 300px"
            type="password"
            show-password
            placeholder="请输入密码"
            clearable
          />
        </div>

        <div class="mb-4 text-lg">
          <el-input
            v-model="form.confirmPassword"
            style="width: 300px"
            type="password"
            show-password
            placeholder="确认密码"
            clearable
          />
        </div>

        <div class="mb-4 flex items-center justify-center gap-2">
          <el-input v-model="form.code" placeholder="请输入验证码" />
          <el-button type="primary">发送验证码</el-button>
        </div>
        <div class="mt-8 flex justify-center text-lg text-black">
          <el-button round type="success" size="large">
            <icon-user class="mr-2" />
            确认注册
          </el-button>
        </div>
      </form>
      <layout-auth-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  tel: '',
  password: '',
  confirmPassword: '',
});
</script>

<style scoped>
:deep(.el-input__wrapper) {
  @apply rounded-3xl px-5 py-2;
}
</style>
