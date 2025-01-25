import myAxios from '@/plugins/axios';
import { ApiData, UserModel } from '@/interfaces/apiResponse';

export default () => {
  async function getCurrentUser() {
    const res = await myAxios.request<ApiData<UserModel>>({
      url: 'get_current_user',
    });
    return res.data;
  }

  return { getCurrentUser };
};
