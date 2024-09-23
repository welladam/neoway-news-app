import { createWebHistory, createRouter } from 'vue-router'

import homeRoutes from './routes/home'
import postRoutes from './routes/posts'
import favoritesRoutes from './routes/favorites'
import notFoundRoutes from './routes/notFound'

const routes = [...homeRoutes, ...postRoutes, ...favoritesRoutes, ...notFoundRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
