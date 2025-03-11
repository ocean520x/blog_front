import type { ApiData, MyCategory, MyTopic, PageData } from '@/interfaces/apiResponse'
import myLocalStore from '@/composables/myLocalStore'
import myAxios from '@/plugins/axios'
import router from '@/router'
import { ElMessageBox } from 'element-plus'
import { reactive, ref } from 'vue'

export default () => {
  const categories = ref<MyCategory[]>()
  const category = ref<MyCategory>()
  const topics = ref<PageData<MyTopic>>()
  const topicDetail = ref<MyTopic>()
  const form = reactive({
    title: '',
    content: '',
    category_id: '',
  })

  async function getCategories() {
    const res = await myAxios.request<ApiData<MyCategory[]>>({
      url: 'category',
    })
    categories.value = res.data
  }

  async function getTopics(page = 1, params = {}) {
    const paramsStr = Object.entries(params)
      .map(e => e.join('='))
      .join('&')
    topics.value = await myAxios.request<PageData<MyTopic>>({
      url: `topic?page=${page}&${paramsStr}`,
    })
  }

  async function getTopicsByCategory(page = 1, params = {}) {
    const c_id = myLocalStore().get('c_id')
    const paramsStr = Object.entries(params)
      .map(e => e.join('='))
      .join('&')
    topics.value = await myAxios.request<PageData<MyTopic>>({
      url: `per_category/${c_id}?page=${page}&${paramsStr}`,
    })
  }

  async function getTopicDetail(t_id: any) {
    const res = await myAxios.request<ApiData<MyTopic>>({
      url: `topic/${t_id}`,
    })
    topicDetail.value = res.data
  }

  async function addTopic(data: any) {
    return await myAxios.request<ApiData<MyTopic>>({
      url: `topic`,
      method: 'POST',
      data,
    })
  }

  async function editTopic(data: any) {
    return await myAxios.request<ApiData<MyTopic>>({
      url: `topic/${data.id}`,
      method: 'PUT',
      data,
    })
  }

  async function delTopic(t_id: any) {
    try {
      await ElMessageBox.confirm('您确认要删除该帖子吗？', '删除提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
      })
      await myAxios.request<ApiData<null>>({
        url: `topic/${t_id}`,
        method: 'DELETE',
      })
      // 跳转
      const route = router.resolve({ name: 'home' })
      location.href = route.fullPath
    }
    catch {

    }
  }

  async function addCategory(data: any) {
    return await myAxios.request<ApiData<MyCategory>>({
      url: 'category',
      method: 'POST',
      data,
    })
  }

  async function getCategory(c_id: any) {
    const res = await myAxios.request<ApiData<MyCategory>>({
      url: `category/${c_id}`,
    })
    category.value = res.data
  }

  async function editCategory(data: any) {
    return await myAxios.request<ApiData<MyCategory>>({
      url: `category/${data.value.id}`,
      method: 'PUT',
      data:data.value,
    })
  }

  return {
    categories,
    getCategories,
    topics,
    getTopics,
    getTopicsByCategory,
    topicDetail,
    getTopicDetail,
    form,
    addTopic,
    editTopic,
    delTopic,
    category,
    addCategory,
    getCategory,
    editCategory,
  }
}
