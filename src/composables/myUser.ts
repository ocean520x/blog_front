import myAxios from '@/plugins/axios';
import { ApiData, MyComment, MyTopic, PageData, UserModel } from '@/interfaces/apiResponse';

export default () => {
  const user = ref<UserModel>();
  const topics = ref<PageData<MyTopic>>();
  const comments = ref<PageData<MyComment>>();

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
    const paramsStr = Object.entries(arg)
      .map((e) => e.join('='))
      .join('&');
    topics.value = await myAxios.request<PageData<MyTopic>>({
      url: `get_one_user_topics?${paramsStr}`,
    });
  }

  async function getOneUserComments(arg: Record<string, any>) {
    const paramsStr = Object.entries(arg)
      .map((e) => e.join('='))
      .join('&');
    comments.value = await myAxios.request<PageData<MyComment>>({
      url: `get_one_user_comments?${paramsStr}`,
    });
  }

  return { getCurrentUser, user, getOneUser, topics, getOneUserTopics, comments, getOneUserComments };
};
