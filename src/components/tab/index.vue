<script setup lang="ts">
import type { MyTab } from '@/interfaces/apiResponse'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps<{
  tabs: MyTab[]
}>()
const route = useRoute()
const router = useRouter()
const active = ref(`name${props.tabs?.findIndex(tab => tab.routeName === route.name)}`)
const tabs = computed(()=>{
  return props.tabs.filter(tab=> tab?.switchShow ? tab?.routeName === route.name : true)
})
function change(pane: any) {
  const tab = props.tabs[pane.index]
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
