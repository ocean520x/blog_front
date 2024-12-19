<script setup lang="ts"></script>

<template>
  <main class="bg-slate-800">
    <section class="h-[60px] w-full xl:w-web m-auto flex items-center justify-between px-3 box-border text-slate-100">
      <div>
        <router-link to="/" class="flex items-center gap-2">
          <icon-circle-five-line theme="outline" size="24" fill="#7ed321" />
          <span class="font-bold">欧顺论坛</span>
        </router-link>
      </div>

      <div>
        <layout-avatar background-color="#726e6e" />
      </div>
    </section>
  </main>
</template>

<style scoped></style>
