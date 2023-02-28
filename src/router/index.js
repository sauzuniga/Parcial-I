import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/countries',
      name: 'countries',
      component: () => import('../src/components/views/countries/countries.vue')
    },
   
  ]

})

export default router
