import { ref } from 'vue';
import { ApiData, MyCategory } from '@/interfaces/apiResponse';
import myAxios from '@/plugins/axios';

export default () => {
  const categories = ref<MyCategory[]>();

  async function getCategories() {
    const res = await myAxios.request<ApiData<MyCategory[]>>({
      url: 'category',
    });
    categories.value = res.data;
  }

  return { categories, getCategories };
};
