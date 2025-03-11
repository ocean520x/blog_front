<script setup lang="ts">
import type { UserModel } from '@/interfaces/apiResponse'
import LayoutBreadcrumb from '@/components/layout/breadcrumb.vue'
import LayoutHistory from '@/components/layout/history.vue'
import LayoutMenu from '@/components/layout/menu.vue'
import myLocalStore from '@/composables/myLocalStore'
import router from '@/router'
import menuStore from '@/store/menuStore'
import showHideMenu from '@/store/showHideMenu'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const menu = menuStore()
menu.init()
const route = useRoute()
watch(
  route,
  () => {
    menu.addHistoryMenus(route)
    menu.setCurrentMenu(route)
  },
  { immediate: true },
)
const info: UserModel = myLocalStore().get('userInfo')
if (info.is_super_admin === 'no' || !info.is_super_admin)
  router.push({ name: 'home' })
</script>

<template>
  <div class="h-screen w-screen grid grid-cols-[auto_1fr]">
    <LayoutMenu />
    <div class="bg-slate-200 text-gray-700 grid grid-rows-[auto_1fr]" :class="{ 'w-screen': !showHideMenu().show }">
      <div class="top">
        <LayoutBreadcrumb />
        <LayoutHistory />
      </div>
      <div class="relative overflow-y-auto mt-2 bg-white ">
        <router-view v-slot="{ Component, route: routePath }">
          <component :is="Component" :key="routePath.fullPath" class="absolute w-full" />
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
