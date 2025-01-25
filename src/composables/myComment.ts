import { ApiData, MyComment } from '@/interfaces/apiResponse';
import myAxios from '@/plugins/axios';

export default () => {
  /**
   * 直接放组件
   */
  const comments = ref<MyComment[]>();

  /**
   * 放api文件夹
   * @param t_id
   */
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

  async function delComment(c_id: any) {
    try {
      await ElMessageBox.confirm('您确认要删除该评论吗？', '删除提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
      });
      await myAxios.request<ApiData<null>>({
        url: `comment/${c_id}`,
        method: 'DELETE',
      });
      location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return { comments, getComments, addComment, addReply, delComment };
};
