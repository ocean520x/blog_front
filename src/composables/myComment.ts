import { ApiData, MyComment } from '@/interfaces/apiResponse';
import myAxios from '@/plugins/axios';

export default () => {
  const comments = ref<MyComment[]>();

  async function getComments(t_id: any) {
    const res = await myAxios.request<ApiData<MyComment[]>>({
      url: `list/comment/${t_id}`,
    });
    comments.value = res.data;
  }

  async function addComment(data: any) {
    const res = await myAxios.request<ApiData<MyComment>>({
      url: `comment/${data.topic_id}`,
      method: 'POST',
      data,
    });
  }

  async function addReply(data: any) {
    const res = await myAxios.request<ApiData<MyComment>>({
      url: `reply/comment/${data.topic_id}/${data.comment_id}`,
      method: 'POST',
      data,
    });
    return res.data;
  }

  return { comments, getComments, addComment, addReply };
};
