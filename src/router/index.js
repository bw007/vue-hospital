import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import { menu } from '@/stores/utils/menu'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardLayout,
      children: [
        ...menu
      ]
    },
    {
      path: "/auth",
      name: "Auth",
      component: () => import("@/views/auth/AuthView.vue")
    }
  ]
})

export default router
