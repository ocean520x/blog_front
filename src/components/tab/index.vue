<script setup lang="ts">
import type { MyTab } from '@/interfaces/apiResponse'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { tabs } = defineProps<{
  tabs: MyTab[]
}>()
const route = useRoute()
const router = useRouter()
const active = ref(`name${tabs?.findIndex(tab => tab.routeName === route.name)}`)
function change(pane: any) {
  const tab = tabs[pane.index]
  if (tab?.event) {
    tab.event()
  }
  if (tab?.routeName) {
    router.push({ name: tab.routeName })
  }
}
</script>

<template>
  <el-tabs v-model="active" class="demo-tabs" @tab-click="change">
    <el-tab-pane v-for="(tab, index) in tabs" :key="tab.label" :label="tab.label" :name="`name${index}`" />
  </el-tabs>
</template>

<style scoped>

</style>
