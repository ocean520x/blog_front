import { RouteLocationNormalized, Router } from 'vue-router';
import myLocalStore from '@/composables/myLocalStore';

class Guard {
  public constructor(private router: Router) {}

  public run() {
    this.router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
      if (to.meta?.auth && !this.isLogin()) return { name: 'login' };
      if (to.meta?.guest && this.isLogin()) return from;
    });
  }

  private getToken() {
    return myLocalStore().get('token');
  }

  private isLogin() {
    return Boolean(this.getToken());
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
