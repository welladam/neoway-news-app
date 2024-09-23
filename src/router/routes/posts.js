import PostDetailsView from '@/views/posts/PostDetailsView.vue'

export default [
  {
    path: '/post/:source/:timestamp',
    name: 'PostDetails',
    component: PostDetailsView,
    props: true,
  },
]
