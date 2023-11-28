import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PropsSlots from '../views/PropsSlots.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/students',
    name: 'students',
    //lazy loading
    component: () => import('../views/StudentView.vue')
  },
  {
    path: '/props',
    name: 'props',
    component: PropsSlots
  }
]

//create router
const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router
