import { ref } from 'vue';
import { ApiData, MyCategory, MyTopic, PageData } from '@/interfaces/apiResponse';
import myAxios from '@/plugins/axios';
import myLocalStore from '@/composables/myLocalStore';

export default () => {
  const categories = ref<MyCategory[]>();
  const topics = ref<PageData<MyTopic>>();
  const topicDetail = ref<MyTopic>();

  async function getCategories() {
    const res = await myAxios.request<ApiData<MyCategory[]>>({
      url: 'category',
    });
    categories.value = res.data;
  }

  async function getTopics(page = 1, params = {}) {
    const paramsStr = Object.entries(params)
      .map((e) => e.join('='))
      .join('&');
    topics.value = await myAxios.request<PageData<MyTopic>>({
      url: `topic?page=${page}&` + paramsStr,
    });
  }

  async function getTopicsByCategory(page = 1, params = {}) {
    const c_id = myLocalStore().get('c_id');
    const paramsStr = Object.entries(params)
      .map((e) => e.join('='))
      .join('&');
    topics.value = await myAxios.request<PageData<MyTopic>>({
      url: `per_category/${c_id}?page=${page}&` + paramsStr,
    });
  }

  async function getTopicDetail(t_id: any) {
    const res = await myAxios.request<ApiData<MyTopic>>({
      url: `topic/show/${t_id}`,
    });
    topicDetail.value = res.data;
  }

  return { categories, getCategories, topics, getTopics, getTopicsByCategory, topicDetail, getTopicDetail };
};
