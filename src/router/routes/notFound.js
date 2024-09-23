import NotFoundView from '@/views/notFound/NotFoundView.vue'

export default [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
]
