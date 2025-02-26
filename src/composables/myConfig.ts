import type { ApiData, MyConfig } from '@/interfaces/apiResponse'
import myAxios from '@/plugins/axios'
import { ref } from 'vue'

export default () => {
  const config = ref<MyConfig>()

  async function getConfig(fieldName: any) {
    const res = await myAxios.request<ApiData<MyConfig>>({
      url: `get_config/${fieldName}`,
    })
    config.value = res.data
  }
  return { config, getConfig }
}
