import Vue from 'vue'
import Router from 'vue-router'
import desktopHomePage from './desktop/router/homepage'

import desktopList from './desktop/router/list'、
import desktopAccountPage from './desktop/router/account'
import mobileHomePage from './mobile/router/homepage'

Vue.use(Router)


export default function createRouter(isMobile) {
  let routes = []
  if (!isMobile) {
    routes = routes.concat(desktopHomePage)
    routes = routes.concat(desktopList)
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
