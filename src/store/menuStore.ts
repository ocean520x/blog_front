import { defineStore } from 'pinia';
import { ref } from 'vue';
import { MenuStore, MyMenu } from '@/interfaces/interface';
import routes from '@/router/routes';
import { RouteLocationNormalizedLoadedGeneric } from 'vue-router';
import MyLocalStore from '@/composables/myLocalStore';

export default defineStore('menu', (): MenuStore => {
  const menus = ref<MyMenu[]>([]);
  const historyMenus = ref<MyMenu[]>([]);

  function init() {
    getMenuByRoutes();
    historyMenus.value = MyLocalStore().get('historyMenus') ?? [];
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

  function addHistoryMenus(route: RouteLocationNormalizedLoadedGeneric) {
    if (!route.meta?.menu) return;
    const historyMenu = { ...route.meta?.menu, routeName: route.name } as MyMenu;
    const hasSame = historyMenus.value.some((menu) => menu.routeName === route.name);
    if (!hasSame) historyMenus.value.unshift(historyMenu);
    if (historyMenus.value.length > 10) historyMenus.value.pop();
    MyLocalStore().set('historyMenus', historyMenus.value);
  }

  function removeHistoryMenus(menu: MyMenu) {
    const index = historyMenus.value.indexOf(menu);
    if (index > -1) historyMenus.value.splice(index, 1);
    MyLocalStore().set('historyMenus', historyMenus.value);
  }

  function setCurrentMenu(route: RouteLocationNormalizedLoadedGeneric) {
    menus.value.forEach((pMenu) => {
      pMenu.isChoose = false;
      pMenu.children?.forEach((cMenu) => {
        cMenu.isChoose = false;
        if (route.name === cMenu.routeName) {
          pMenu.isChoose = true;
          cMenu.isChoose = true;
        }
      });
    });
  }

  return { menus, init, historyMenus, addHistoryMenus, removeHistoryMenus, setCurrentMenu };
});
