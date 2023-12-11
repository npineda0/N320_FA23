import { createRouter, createWebHistory } from 'vue-router';
//homeview storing form
import HomeView from '../views/HomeView.vue'

const routes = [
  //sessions
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  //user sessions 
  {
    path: '/userSession',
    name: 'userSession',
    //lazy loading
    component: () => import('../views/UserView.vue')
  }
]

//create router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
