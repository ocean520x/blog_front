import type { MyCaptcha } from '@/interfaces/apiResponse'
import { getCaptcha } from '@/apis/captcha'
import { ref } from 'vue'

const captcha = ref<MyCaptcha>()

export default () => {
  const showCaptcha = async () => {
    captcha.value = await getCaptcha()
  }

  return { captcha, showCaptcha }
}
