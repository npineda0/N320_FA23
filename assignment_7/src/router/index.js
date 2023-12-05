import { createRouter, createWebHistory } from 'vue-router';
//homeview storing form
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/teams',
    name: 'teams',
    //lazy loading
    component: () => import('../views/TeamView.vue')
  },
  {
    path: '/members',
    name: 'members',
    component: HomeView
  }
]

//create router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
