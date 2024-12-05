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

  const isLogin = () => {
    return !!myLocalStore().get('token');
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
      // 是否超级管理员
      isSuperAdmin() ? router.push({ name: 'admin' }) : router.push({ name: 'home' });
    } catch (error) {}
  };

  const logout = async () => {
    // 处理后端的退出登录业务
    await myAxios.request({
      url: 'logout',
      method: 'POST',
    });
    myLocalStore().remove('token');
    myLocalStore().remove('userInfo');
    router.push({ name: 'home' });
  };

  return { form, login, isSuperAdmin, logout, isLogin };
};
