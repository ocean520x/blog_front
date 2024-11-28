import { defineStore } from 'pinia';

export default defineStore('showHideMenu', () => {
  const show = ref<boolean>(true);
  const toggle = () => {
    show.value = !show.value;
  };
  return { show, toggle };
});
