import myAxios from '@/plugins/axios';
import { ApiData, UserModel } from '@/interfaces/apiResponse';

export default () => {
  const user = ref<UserModel>();
  async function getCurrentUser() {
    const res = await myAxios.request<ApiData<UserModel>>({
      url: 'get_current_user',
    });
    return res.data;
  }

  async function getOneUser(u_id: any) {
    const res = await myAxios.request<ApiData<UserModel>>({
      url: `user/${u_id}`,
    });
    user.value = res.data;
  }

  return { getCurrentUser, user, getOneUser };
};
