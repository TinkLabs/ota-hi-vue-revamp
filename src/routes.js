import Vue from 'vue'
import Router from 'vue-router'
import desktopHomePage from './desktop/router/homepage'
import mobileHomePage from './mobile/router/homepage'
Vue.use(Router);


export function createRouter (isMobile) {
  let routes = [];
  if(!isMobile){
    routes = routes.concat(desktopHomePage);
  } else {
    routes = routes.concat(mobileHomePage);
  }
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes
  })
}