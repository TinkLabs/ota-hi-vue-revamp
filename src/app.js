import Vue from 'vue'
import { createRouter } from './routes'
import { createStore } from './store'
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import en from '../locales/en'
import zh from '../locales/zh'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import App from './index.vue'
Vue.use(VueI18n);
Vue.prototype.axios = axios;

const messages = {
  en: {
    ...en,
    ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
  },
  zh: {
    ...zh,
    ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
  }
};

const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages, // set locale messages
});

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
});

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
    render: h => h(App),
    i18n
  });


  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}