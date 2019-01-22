/* eslint-disable global-require */
export default [
  {
    path: '/account',
    component: resolve => require(['../views/account/Layout.vue'], resolve),
    redirect: '/account/dashboard',
    name: 'account',
    props: true,
    children: [{
      path: 'dashboard',
      component: resolve => require(['../views/account/dashboard.vue'], resolve),
      name: 'dashboard',
    }, {
      path: 'bookings',
      component: resolve => require(['../views/account/bookings.vue'], resolve),
      name: 'bookings',
    }, {
      path: 'booking/:bookingId',
      props: true,
      component: resolve => require(['../views/account/bookings_details.vue'], resolve),
      name: 'bookingDetail',
    }, {
      path: 'preferences',
      component: resolve => require(['../views/account/preferences.vue'], resolve),
      name: 'preferences',
    }],
  },
]
