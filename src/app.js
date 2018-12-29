import Vue from 'vue'
import { createRouter } from './routes'
import { createStore } from './store'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import App from './index.vue'
Vue.use(ElementUI);

Vue.prototype.axios = axios;

export function createApp (context = null) {
  // create store and router instances
  let store, router;
  store = createStore(context);
  router = createRouter(store.getters.getIsMobile);
  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });


  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}