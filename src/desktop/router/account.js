const Layout = () => import('../views/account/Layout.vue')
const DashBoard = () => import('../views/account/dashboard')
const Bookings = () => import('../views/account/bookings')
const Preferences = () => import('../views/account/preferences')
export default [
  {
    path: '/account',
    component: Layout,
    redirect: '/account/dashboard',
    name: 'account',
    props: true,
    children: [{
      path: 'dashboard',
      component: DashBoard,
      name: 'dashboard',
    },{
      path: 'bookings',
      component: Bookings,
      name: 'bookings',
    },{
      path: 'preferences',
      component: Preferences,
      name: 'preferences',
    }],
  },
]