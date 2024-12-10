import { MyCaptcha } from '@/interfaces/apiResponse';
import { ref } from 'vue';
import { getCaptcha } from '@/apis/captcha';
const captcha = ref<MyCaptcha>();

export default () => {
  const showCaptcha = async () => {
    captcha.value = await getCaptcha();
  };

  return { captcha, showCaptcha };
};
