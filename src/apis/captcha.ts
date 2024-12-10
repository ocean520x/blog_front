import myAxios from '@/plugins/axios';
import { MyCaptcha } from '@/interfaces/apiResponse';

export function getCaptcha() {
  return myAxios.request<MyCaptcha>({
    baseURL: '/captcha/api/math',
  });
}
