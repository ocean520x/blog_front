import myAxios from '@/plugins/axios';
import { ApiData, LoginData } from '@/interfaces/apiResponse';
import myLocalStore from '@/composables/myLocalStore';
import router from '@/router';

export default () => {
  const form = reactive({
    phone: '18688226300',
    password: '123456',
  });

  const login = async (data: any) => {
    try {
      const res = await myAxios.request<ApiData<LoginData>>({
        url: 'auth/login',
        method: 'POST',
        data,
      });
      myLocalStore().set('token', res.data.token);
      router.push({ name: 'admin' });
    } catch (error) {}
  };

  return { form, login };
};
