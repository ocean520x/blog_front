import type { ApiData, MyComment, MyFavorite, MyTopic, PageData, UserModel } from '@/interfaces/apiResponse'
import myAxios from '@/plugins/axios'
import { ElMessageBox } from 'element-plus'
import { ref } from 'vue'
import myAuth from './myAuth'

export default () => {
  const user = ref<UserModel>()
  const users = ref<PageData<UserModel>>()
  const topics = ref<PageData<MyTopic>>()
  const comments = ref<PageData<MyComment>>()
  const isFavorite = ref<boolean>(false)
  async function getCurrentUser() {
    const res = await myAxios.request<ApiData<UserModel>>({
      url: 'get_current_user',
    })
    return res.data
  }

  async function getOneUser(u_id: any) {
    const res = await myAxios.request<ApiData<UserModel>>({
      url: `user/${u_id}`,
    })
    user.value = res.data
  }

  async function getOneUserTopics(arg: Record<string, any>) {
    const paramsStr = Object.entries(arg)
      .map(e => e.join('='))
      .join('&')
    topics.value = await myAxios.request<PageData<MyTopic>>({
      url: `get_one_user_topics?${paramsStr}`,
    })
  }

  async function getOneUserComments(arg: Record<string, any>) {
    const paramsStr = Object.entries(arg)
      .map(e => e.join('='))
      .join('&')
    comments.value = await myAxios.request<PageData<MyComment>>({
      url: `get_one_user_comments?${paramsStr}`,
    })
  }

  async function getIsFavorite(u_id: any, t_id: any) {
    const res = await myAxios.request<ApiData<MyFavorite>>({
      url: `is_favorite/${u_id}/${t_id}`,
    })
    isFavorite.value = res.data.is_favorite
  }

  async function toggleFavorite(t_id: any) {
    await myAxios.request<ApiData<any>>({
      url: `favorite/toggle/${t_id}`,
    })
  }

  async function getOneUserFavoriteTopics(arg: Record<string, any>) {
    const paramsStr = Object.entries(arg)
      .map(e => e.join('='))
      .join('&')
    topics.value = await myAxios.request<PageData<MyTopic>>({
      url: `get_one_user_favorite_topics?${paramsStr}`,
    })
  }

  async function updateCurrentUser(data: any) {
    await myAxios.request<ApiData<UserModel>>({
      url: `update_current_user`,
      method: 'PUT',
      data,
    })
    await myAuth().logout()
  }

  async function updateCurrentUserNick(data: any) {
    await myAxios.request<ApiData<UserModel>>({
      url: `update_current_user_nick`,
      method: 'PUT',
      data,
    })
    await myAuth().logout()
  }

  async function getUsers(arg: Record<string, any>) {
    const paramsStr = Object.entries(arg).map(e => e.join('=')).join('&')
    users.value = await myAxios.request<PageData<UserModel>>({
      url: `get_users?${paramsStr}`,
    })
  }

  async function switchFreeze(u_id: any, type: any) {
    const str = type == 'yes' ? '解冻' : '冻结'
    await ElMessageBox.confirm(
      `您确定要${str}该用户吗？`,
      '提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      },
    )
    await myAxios.request<ApiData<null>>({
      url: `user_freeze/${u_id}`,
      method: 'PUT',
    })
    location.reload()
  }

  async function delUser(u_id: any) {
    try {
      await ElMessageBox.confirm('您确认要删除该用户吗？', '删除提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
      })
      await myAxios.request<ApiData<null>>({
        url: `user_del/${u_id}`,
        method: 'DELETE',
      })
      // 刷新
      location.reload()
    }
    catch {

    }
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
    updateCurrentUser,
    users,
    getUsers,
    switchFreeze,
    delUser,
    updateCurrentUserNick,
  }
}
