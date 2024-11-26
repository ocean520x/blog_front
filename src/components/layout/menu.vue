<script setup lang="ts"></script>

<template>
  <div class="bg-slate-800 w-[220px]">
    <h2 class="flex items-center justify-center mt-4 text-slate-100 gap-2">
      <icon-circle-four size="22" fill="#7ed321" />
      <span>欧顺论坛后台管理</span>
    </h2>
    <div class="flex flex-col text-slate-100">
      <section class="mt-2">
        <div class="flex justify-between items-center px-4 py-2">
          <div class="flex items-center gap-1">
            <icon-every-user />
            <span>用户管理</span>
          </div>
          <div class="cursor-pointer hover:text-green-600 duration-300">
            <icon-plus />
          </div>
        </div>
        <div class="text-xs hover:bg-slate-700 duration-300 cursor-pointer p-4 indent-5">用户列表</div>
        <div class="text-xs hover:bg-slate-700 duration-300 cursor-pointer p-4 indent-5">添加用户</div>
        <div class="text-xs hover:bg-slate-700 duration-300 cursor-pointer p-4 indent-5">编辑用户</div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
