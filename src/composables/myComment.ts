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

  return { comments, getComments };
};
