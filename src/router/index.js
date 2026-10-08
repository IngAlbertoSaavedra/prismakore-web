import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import('../views/NosotrosView.vue')
  },
  {
    path: '/connect2026',
    name: 'connect2026',
    component: () => import('../views/Connect2026.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      return {
        el: to.hash,
        top: 92,
        behavior: 'smooth'
      }
    }

    return { top: 0 }
  }
})

export default router
