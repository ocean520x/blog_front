import myAxios from '@/plugins/axios';
import { ApiData, LoginData, RegisterData, UserModel } from '@/interfaces/apiResponse';
import myLocalStore from '@/composables/myLocalStore';
import router from '@/router';
import myCaptcha from '@/composables/myCaptcha';
import dayjs from 'dayjs';

export default () => {
  const { showCaptcha } = myCaptcha();
  const form = reactive({
    phone: '18688226300',
    password: '123456',
    password_confirmation: '123456',
    captcha_code: '',
    captcha_key: '',
    code: '952700',
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
    } catch (error) {
      await showCaptcha();
    }
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

  const getRegisterCode = async (phone: any) => {
    await myAxios.request<ApiData<{ code: string }>>({
      url: 'send/code',
      method: 'POST',
      data: { phone },
    });
    // 把发送时间存入本地存储
    myLocalStore().set('codeSendTime', dayjs());
  };

  const getRePasswordCode = async (phone: any) => {
    await myAxios.request<ApiData<{ code: string }>>({
      url: 'send/repassword_code',
      method: 'POST',
      data: { phone },
    });
    // 把发送时间存入本地存储
    myLocalStore().set('codeSendTime', dayjs());
  };

  // 发送验证码与当前时间得差值秒数
  const diffSendTime = () => {
    const time = myLocalStore().get('codeSendTime');
    return time ? 60 - dayjs().diff(time, 'second') : -1;
  };

  const register = async (data: any) => {
    await myAxios.request<ApiData<RegisterData>>({
      url: 'auth/register',
      method: 'POST',
      data,
    });
  };

  const rePassword = async (data: any) => {
    await myAxios.request<ApiData<RegisterData>>({
      url: 'auth/repassword',
      method: 'PUT',
      data,
    });
  };

  return {
    form,
    login,
    isSuperAdmin,
    logout,
    isLogin,
    getRegisterCode,
    register,
    diffSendTime,
    getRePasswordCode,
    rePassword,
  };
};
