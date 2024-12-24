import { ref } from 'vue';
import { ApiData, MyCategory, MyTopic, PageData } from '@/interfaces/apiResponse';
import myAxios from '@/plugins/axios';

export default () => {
  const categories = ref<MyCategory[]>();
  const topics = ref<PageData<MyTopic>>();

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

  async function getTopicsByCategory(c_id: any, page = 1, params = {}) {
    const paramsStr = Object.entries(params)
      .map((e) => e.join('='))
      .join('&');
    topics.value = await myAxios.request<PageData<MyTopic>>({
      url: `per_category/${c_id}&` + paramsStr,
    });
  }

  return { categories, getCategories, topics, getTopics, getTopicsByCategory };
};
