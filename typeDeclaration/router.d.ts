import 'vue-router';
import { MyMenu } from '@/interfaces/interface';

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean;
    guest?: boolean;
    menu?: MyMenu;
  }
}
