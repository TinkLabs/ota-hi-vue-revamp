// const Home = () => import('../views/home.vue');
const Homepage = () => import('../views/homepage.vue')
const hoteldetail = () => import('../views/hotel/hoteldetail.vue')
const Layout = () => import('../views/layout/Layout.vue')

export default [
  // { path: '', component: Home },
  // { path: '', component: Homepage },
  {
    path: '',
    component: Layout,
    redirect: 'homepage',
    children: [{
      path: '',
      component: Homepage,
      name: 'homepage',
    }],
  },
  {
    path: '/hotel/:hotelId',
    component: Layout,
    redirect: '/hotel/:hotelId',
    children: [{
      path: '',
      component: hoteldetail,
      name: 'hoteldetail',
    }],
  },
]
