import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: '/uiux',
    children: [
      {
        path: '/uiux',
        component: () => import('pages/uiux/index.vue'),
      },
      {
        path: '/visualDesign',
        component: () => import('pages/visualDesign/index.vue'),
      },
      {
        path: '/afterHour',
        component: () => import('pages/afterHour/index.vue'),
      },
      {
        path: '/about',
        component: () => import('pages/about/index.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
