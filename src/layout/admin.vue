<script setup lang="ts">
import menuStore from '@/store/menuStore';
import showHideMenu from '@/store/showHideMenu';
import { useRoute } from 'vue-router';
import { UserModel } from '@/interfaces/apiResponse';
import myLocalStore from '@/composables/myLocalStore';
import router from '@/router';
const menu = menuStore();
menu.init();
const route = useRoute();
watch(
  route,
  () => {
    menu.addHistoryMenus(route);
    menu.setCurrentMenu(route);
  },
  { immediate: true },
);
const info: UserModel = myLocalStore().get('userInfo');
if (info.is_super_admin == 'no' || !info.is_super_admin) router.push({ name: 'home' });
</script>

<template>
  <div class="h-screen w-screen grid grid-cols-[auto_1fr]">
    <layout-menu />
    <div class="bg-slate-200 text-gray-700 grid grid-rows-[auto_1fr]" :class="{ 'w-screen': !showHideMenu().show }">
      <div class="top">
        <layout-breadcrumb />
        <layout-history />
      </div>
      <div class="relative overflow-y-auto mt-2">
        <router-view #default="{ Component }">
          <component class="absolute w-full" :is="Component"></component>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
