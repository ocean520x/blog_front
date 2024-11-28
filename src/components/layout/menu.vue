<script setup lang="ts">
import menuStore from '@/store/menuStore';
import { MyMenu } from '@/interfaces/interface';
import * as Icon from '@icon-park/vue-next';
import showHideMenu from '@/store/showHideMenu';
const menus = menuStore().menus;
const router = useRouter();
const resetMenus = () => {
  menus.forEach((menu) => {
    menu.isChoose = false;
    if (menu?.children) {
      menu.children.forEach((childMenu) => {
        childMenu.isChoose = false;
      });
    }
  });
};
const clickMenu = (menu: MyMenu, childMenu?: MyMenu) => {
  resetMenus();
  menu.isChoose = true;
  if (childMenu) {
    childMenu.isChoose = true;
    router.push({ name: childMenu.routeName });
  }
};
</script>

<template>
  <div class="bg-slate-800 w-[220px]" v-show="showHideMenu().show">
    <h2 class="flex items-center justify-center mt-4 text-slate-100 gap-2">
      <icon-circle-four size="22" fill="#7ed321" />
      <span>欧顺论坛后台管理</span>
    </h2>
    <div class="flex flex-col text-slate-100" v-for="(menu, index) in menus" :key="index">
      <section class="mt-2">
        <div class="flex justify-between items-center px-4 py-2" @click="clickMenu(menu)">
          <div class="flex items-center gap-1 cursor-pointer">
            <component :is="Icon[menu.icon]" />
            <span>{{ menu.title }}</span>
          </div>
          <div class="cursor-pointer hover:text-green-600 duration-300">
            <icon-minus v-if="menu.isChoose" />
            <icon-plus v-else />
          </div>
        </div>
        <div v-show="menu.isChoose">
          <div
            class="text-xs hover:bg-slate-700 duration-300 cursor-pointer p-4 indent-5"
            :class="{ active: child.isChoose }"
            v-for="(child, i) in menu.children"
            :key="i"
            @click="clickMenu(menu, child)"
          >
            {{ child.title }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply bg-slate-700;
}
</style>
