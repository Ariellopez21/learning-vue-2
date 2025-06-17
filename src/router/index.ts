import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserView from '@/views/UserList.vue'
import Login from '@/views/UserLogin.vue'
import NewUser from '@/views/NewUser.vue'
import { useAuthStore } from '@/stores/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/users',
      name: 'list-users',
      component: UserView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/users/new',
      name: 'new-user',
      component: NewUser,
    }
  ],
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.name !== 'login' && !auth.isAuthenticated) {
    next({ name: 'login' })
  }
  next()
})

export default router
