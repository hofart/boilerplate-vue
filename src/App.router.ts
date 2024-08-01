import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import { FormRoutes } from './modules/captures/Form'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/form'
  },
  ...FormRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Verificar a autenticação
router.beforeEach(async () => {
  /*  if (!isInitialized()) {
     const token = await initialize();
     setBearerToken(token);
   } */
});

export default router
