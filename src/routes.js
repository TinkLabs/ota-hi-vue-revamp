import Vue from 'vue'
import Router from 'vue-router'
import desktopHomePage from './desktop/router/homepage'
import desktopAccountPage from './desktop/router/account'
import mobileHomePage from './mobile/router/homepage'
import desktopCheckoutPage from './desktop/router/checkoutpage'

Vue.use(Router)


export default function createRouter(isMobile) {
  let routes = []
  if (!isMobile) {
    routes = routes.concat(desktopHomePage)
    // add checkoutpage
    routes = routes.concat(desktopCheckoutPage)
    routes = routes.concat(desktopAccountPage)
  } else {
    routes = routes.concat(mobileHomePage)
  }
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes,
  })
}
