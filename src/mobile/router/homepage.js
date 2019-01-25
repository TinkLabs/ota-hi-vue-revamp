
// const Home = () => import('../views/home.vue')
// const Homepage = () => import('../views/homepage.vue')


// export default [
//   { path: '', component: Homepage, name: 'homepage' },
// ]

export default [
  {
    path: '',
    component: resolve => require(['../views/layout/Layout.vue'], resolve),
    redirect: 'homepage',
    children: [{
      path: '',
      component: resolve => require(['../views/homepage.vue'], resolve),
      name: 'homepage',
    }],
  },
]
