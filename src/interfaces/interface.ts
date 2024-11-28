import { IconType } from '@icon-park/vue-next/es/all';

interface Menu {
  title: string;
  isChoose?: boolean;
  sort?: number;
  routeName?: string;
  icon?: IconType;
}

export interface MyMenu extends Menu {
  children?: Menu[];
}

export interface MyLocalData {
  data: any;
  expire?: number;
}

export interface MenuStore {
  menus: MyMenu[];
  historyMenus: MyMenu[];
  breadcrumbRoute: null | RouteLocationNormalizedLoadedGeneric;
  init: () => void;
  getMenuByRoutes: () => void;
  addHistoryMenus: (route: RouteLocationNormalizedLoadedGeneric) => void;
  removeHistoryMenus: (menu: MyMenu) => void;
  setCurrentMenu: (route: RouteLocationNormalizedLoadedGeneric) => void;
}
