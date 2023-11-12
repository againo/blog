import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SamView from '@/views/SamView.vue'
import RoxasView from '@/views/RoxasView.vue'
import MarkdownTest from "@/components/ShowMarkdown.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sam',
      name: 'sam',
      component: SamView
    },
    {
      path: '/roxas',
      name: 'roxas',
      component: RoxasView
    }
  ]
})

export default router
