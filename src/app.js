import Vue from 'vue'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import en from '../locales/en'
import zhCn from '../locales/zh'
import createStore from './store'
import createRouter from './routes'
import App from './index.vue'
import './filter'
import pluginsUtil from './pluginUtils'
import Validate from './common/component/formValidate'
import Countries from './common/component/Countries'

Vue.use(pluginsUtil)
Vue.use(VueI18n)
Vue.use(Countries)
Vue.prototype.axios = axios

const messages = {
  en: {
    ...en,
    ...enLocale, // 或者用 Object.assign({ message: 'hello' }, enLocale)
  },
  'zh-cn': {
    ...zhCn,
    ...zhLocale, // 或者用 Object.assign({ message: '你好' }, zhLocale)
  },
}

// directive-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted(el) {
    // 聚焦元素
    el.focus()
  },
})

export default function createApp(context = null) {
  // create store and router instances
  const store = createStore(context)
  const router = createRouter(store.getters.getIsMobile)

  const i18n = new VueI18n({
    locale: store.getters.langCode, // set locale
    messages, // set locale messages
  })
  Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value),
  })
  Vue.use(Validate, {
    i18n: (key, value) => i18n.t(key, value),
  })
  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App),
    i18n,
  })


  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
