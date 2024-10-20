import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/blog/:id',
      name: 'Blog',
      component: () => import('../views/BlogDetailView.vue'),
    },
  ],
})

export default router
