<script lang="ts" setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <Suspense>
    <router-view />
  </Suspense>
  </el-config-provider>
</template>

<style lang="scss" scoped>

</style>
