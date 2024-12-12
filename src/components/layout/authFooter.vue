<script setup lang="ts"></script>

<template>
  <div class="flex items-center justify-center text-white text-xs gap-3 mt-8">
    <router-link :to="{ name: 'home' }" class="flex items-center gap-1 hover:text-pink-300 duration-300">
      <icon-home />
      进入首页</router-link
    >
    <router-link
      v-if="$route.name != 'register'"
      :to="{ name: 'register' }"
      class="flex items-center gap-1 hover:text-pink-300 duration-300"
    >
      <icon-user />
      注册用户</router-link
    >
    <router-link
      v-if="$route.name != 'login'"
      :to="{ name: 'login' }"
      class="flex items-center gap-1 hover:text-pink-300 duration-300"
    >
      <icon-login />
      返回登陆</router-link
    >
    <router-link
      v-if="$route.name != 'repassword'"
      :to="{ name: 'repassword' }"
      class="flex items-center gap-1 hover:text-pink-300 duration-300"
    >
      <icon-face-recognition />
      找回密码</router-link
    >
  </div>
</template>

<style scoped></style>
