import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Landing
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/features', // http://localhost:3333/features
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },

        {
          path: '/pokemon/:id',
          name: 'pokemon',
          /* Podemos utilizar la siguiente función para visualizar la utilidad de beforeEnter 
          beforeEnter: [
            (to, from, next) => {
              console.log('temporal');
              console.log({to, from, next})
             return next();
            }
          ],
          */
          beforeEnter: [isAuthenticatedGuard],
            // props: true, // Este true le indica al RouterView que mapee los argumentos recibidos por URL y sean convertidos de string a number
          props: (route) => {
            // console.log({ route });
            const id = +route.params.id;

            return isNaN(id) ? { id: 1 } : { id };
          },

          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },

    // Auth
    {
      path: '/auth',
      redirect: { name: 'login' }, //'/login',
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    // Not Found. En este caso, como es una ruta frecuente, no usaremos la Carga Perezosa
    {
      path: '/:pathMatch(.*)*',
      // redirect: '/',
      component: NotFound404,
    },
  ],
});

export default router; // VUE prefiere hacer exportaciones por defecto pero es más práctico hacerlas en la declaración "export const router =" salvo que haya que intercalar p.e. un middleware
