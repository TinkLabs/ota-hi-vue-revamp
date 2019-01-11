import Vue from 'vue'
import 'es6-promise/auto'
import createApp from './app'

const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')

Vue.use(VueAwesomeSwiper)

// a global mixin that calls `asyncData` when a route component's params change
Vue.mixin({
  beforeRouteUpdate(to, from, next) {
    const { asyncData } = this.$options
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to,
      }).then(next()).catch(next)
    } else {
      next()
    }
  },
})

const { app, router, store } = createApp()

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
// eslint-disable-next-line no-underscore-dangle
if (window.__INITIAL_STATE__) {
  // eslint-disable-next-line no-underscore-dangle
  store.replaceState(window.__INITIAL_STATE__)
}

// wait until router has resolved all async before hooks
// and async components...
router.onReady(() => {
  // Add router hook for handling asyncData.
  // Doing it after initial route is resolved so that we don't double-fetch
  // the data that we already have. Using router.beforeResolve() so that all
  // async components are resolved.
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    let diffed = false
    const activated = matched.filter((c, i) => {
      if (diffed) {
        diffed = (prevMatched[i] !== c)
      }

      return undefined
    })
    const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
    if (!asyncDataHooks.length) {
      return next()
    }

    // bar.start()
    Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))
      .then(() => {
        // bar.finish()
        next()
      })
      .catch(next)

    return undefined
  })

  // actually mount to DOM
  app.$mount('#app')
})

// service worker
function isLocalhost() {
  return /^http(s)?:\/\/localhost/.test(window.location.href)
}
if ((window.location.protocol === 'https:' || isLocalhost()) && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}
