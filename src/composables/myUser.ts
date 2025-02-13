import myAxios from '@/plugins/axios';
import { ApiData, MyTopic, PageData, UserModel } from '@/interfaces/apiResponse';

export default () => {
  const user = ref<UserModel>();
  const topics = ref<PageData<MyTopic>>();

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

  async function getOneUserTopics(arg: Record<string, any>) {
    const paramsStr = Object.entries(arg).map(e => e.join('=')).join('&');
    topics.value = await myAxios.request < PageData<MyTopic>({
      url: `get_one_user_topics?${paramsStr}`
    })
  }

  return { getCurrentUser, user, getOneUser, topics, getOneUserTopics };
};
