import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const userId = localStorage.getItem('userId');
  localStorage.setItem('lastPath', to.path); // De este modo grabamos en LocalStorage de donde viene y a donde va
  console.log(to.path);

  if (!userId) {
    return next({
      name: 'login',
    });
  }

  return next();
};

export default isAuthenticatedGuard;
