import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: '/uiux',
    children: [
      {
        name: 'uiux',
        path: '/uiux',
        component: () => import('pages/uiux/index.vue'),
      },
      {
        name: 'visualDesign',
        path: '/visualDesign',
        component: () => import('pages/visualDesign/index.vue'),
      },
      {
        name: 'afterHour',
        path: '/afterHour',
        component: () => import('pages/afterHour/index.vue'),
      },
      {
        name: 'about',
        path: '/about',
        component: () => import('pages/about/index.vue'),
      },
      {
        name: 'acrylic',
        path: '/afterHour/acrylic',
        component: () => import('pages/afterHour/acrylic/index.vue'),
      },
      {
        name: 'corporate',
        path: '/afterHour/corporate',
        component: () => import('pages/afterHour/corporate/index.vue'),
      },
      {
        name: 'newYear',
        path: '/afterHour/newYear',
        component: () => import('pages/afterHour/newYear/index.vue'),
      },
      {
        name: 'logo',
        path: '/afterHour/logo',
        component: () => import('pages/afterHour/logo/index.vue'),
      },
      {
        name: 'open',
        path: '/uiux/open',
        component: () => import('pages/uiux/openProject/index.vue'),
      },
      {
        name: 'redesign',
        path: '/uiux/redesign',
        component: () => import('pages/uiux/taichungRedesign/index.vue'),
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
