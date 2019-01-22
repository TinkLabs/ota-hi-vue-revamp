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
  {
    path: '/destination',
    component: resolve => require(['../views/layout/Layout.vue'], resolve),
    redirect: 'destination',
    children: [{
      path: '',
      component: resolve => require(['../views/destination.vue'], resolve),
      name: 'destination',
    }],
  },
  {
    path: '/hotel/:hotelId',
    component: resolve => require(['../views/layout/Layout.vue'], resolve),
    redirect: '/hotel/:hotelId',
    children: [{
      path: '',
      component: resolve => require(['../views/hotel/hoteldetail.vue'], resolve),
      name: 'hoteldetail',
    }],
  },
]
