<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen grid grid-cols-[auto_1fr]">
    <div class="bg-slate-800 w-[220px]">
      <h2 class="flex items-center justify-center mt-4 text-slate-100 gap-2">
        <icon-circle-four size="22" fill="#7ed321" />
        <span>欧顺论坛后台管理</span>
      </h2>
      <div>
        <section>
          <div class="title">
            <div class="left">
              <icon-every-user />
              <span>用户管理</span>
            </div>
            <div class="right">
              <icon-plus />
            </div>
          </div>
          <div class="per-title">用户列表</div>
          <div class="per-title">添加用户</div>
          <div class="per-title">编辑用户</div>
        </section>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
