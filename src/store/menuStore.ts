import { defineStore } from 'pinia';
import { ref } from 'vue';
import { MyMenu } from '@/interfaces/interface';
import routes from '@/router/routes';

export default defineStore('menu', () => {
  const menus = ref([] as MyMenu[]);

  function init() {
    getMenuByRoutes();
  }

  function getMenuByRoutes() {
    menus.value = routes
      .filter((route) => route.children?.length && route.meta?.menu)
      .map((route) => {
        let menu = route.meta?.menu as MyMenu;
        menu.children = route.children
          ?.filter((route) => route.meta?.menu)
          .map((route) => {
            return { ...route.meta?.menu, routeName: route.name };
          }) as MyMenu[];
        return menu;
      })
      .filter((menu) => menu.children?.length)
      .sort((a, b) => {
        return (a?.sort ?? 0) - (b?.sort ?? 0);
      }) as MyMenu[];
  }

  return { menus, init };
});
