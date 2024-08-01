import { RouteRecordRaw } from 'vue-router'
import FormModule from './FormModule.vue'

const FormViewPage = () => import('./pages/FormViewPage.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/form',
    component: FormModule,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'test',
        component: FormViewPage
      },
    ]
  }
]

export default routes
