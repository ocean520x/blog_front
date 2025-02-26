import type { MyCaptcha } from '@/interfaces/apiResponse'
import myAxios from '@/plugins/axios'

export function getCaptcha() {
  return myAxios.request<MyCaptcha>(
    {
      baseURL: '/captcha/api/math',
    },
    { clearValidateError: false },
  )
}
