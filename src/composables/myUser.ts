import myAxios from '@/plugins/axios';
import { ApiData, MyComment, MyFavorite, MyTopic, PageData, UserModel } from '@/interfaces/apiResponse';

export default () => {
  const user = ref<UserModel>();
  const topics = ref<PageData<MyTopic>>();
  const comments = ref<PageData<MyComment>>();
  const isFavorite = ref<boolean>(false);
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

  async function getIsFavorite(u_id: any, t_id: any) {
    const res = await myAxios.request<ApiData<MyFavorite>>({
      url: `is_favorite/${u_id}/${t_id}`,
    });
    isFavorite.value = res.data.is_favorite;
  }

  async function toggleFavorite(t_id: any) {
    await myAxios.request<ApiData<any>>({
      url: `favorite/toggle/${t_id}`,
    });
  }

  async function getOneUserFavoriteTopics(arg: Record<string, any>) {
    const paramsStr = Object.entries(arg)
      .map((e) => e.join('='))
      .join('&');
    topics.value = await myAxios.request<PageData<MyTopic>>({
      url: `get_one_user_favorite_topics?${paramsStr}`,
    });
  }

  return {
    getCurrentUser,
    user,
    getOneUser,
    topics,
    getOneUserTopics,
    comments,
    getOneUserComments,
    isFavorite,
    getIsFavorite,
    toggleFavorite,
    getOneUserFavoriteTopics,
  };
};
