import myAxios from '@/plugins/axios';
import { ApiData, LoginData, UserModel } from '@/interfaces/apiResponse';
import myLocalStore from '@/composables/myLocalStore';
import router from '@/router';

export default () => {
  const form = reactive({
    phone: '18688226300',
    password: '123456',
  });

  const isSuperAdmin = () => {
    const info: UserModel = myLocalStore().get('userInfo');
    if (info) return info.id == 1;
    return false;
  };

  const login = async (data: any) => {
    try {
      const res = await myAxios.request<ApiData<LoginData>>({
        url: 'auth/login',
        method: 'POST',
        data,
      });
      myLocalStore().set('token', res.data.token);
      myLocalStore().set('userInfo', res.data.user);
      router.push({ name: 'admin' });
    } catch (error) {}
  };

  const logout = () => {
    myLocalStore().remove('token');
    myLocalStore().remove('userInfo');
    router.push({ name: 'home' });
  };

  return { form, login, isSuperAdmin, logout };
};
