<script setup lang="ts">
import myConfig from '@/composables/myConfig'

const { config, getConfig, setConfig } = myConfig()
await getConfig('data')
</script>

<template>
  <main v-if="config">
    <el-card shadow="never">
      <template #header>
        编辑系统配置
      </template>
      <el-form label-width="auto" style="min-width: 600px;">
        <el-form-item label="系统名称">
          <el-input v-model="config.site_name" />
        </el-form-item>
        <el-form-item label="ICP">
          <el-input v-model="config.ICP" />
        </el-form-item>
        <el-form-item label="站长手机">
          <el-input v-model="config.tel" />
        </el-form-item>
        <el-form-item label="版权信息">
          <el-input v-model="config.copyright" />
        </el-form-item>
        <el-form-item label="ali-key">
          <el-input v-model="config.aliyun_pay" />
        </el-form-item>
        <el-form-item label="wechat-key">
          <el-input v-model="config.wechat_pay" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="setConfig('data', config)">
            确认修改
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </main>
</template>

<style scoped>

</style>
