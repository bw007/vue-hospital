import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import { menu } from '@/stores/utils/menu'
import { userStore } from '@/stores/auth/user'

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

router.beforeEach((to, from, next) => {
  if (to.name !== "Auth") {
    const user_store = userStore()
    user_store.findUser()
  } else {
    console.log(to.name);
  }
  next()
})

export default router
