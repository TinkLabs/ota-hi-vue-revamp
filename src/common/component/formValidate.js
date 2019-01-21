export default {
  install(Vue, option) {
    const $t = option.i18n
    Vue.prototype.$v = {
      onlyLetterSpace: (rule, value, callback) => {
        console.log(this)
        if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(value)) {
          callback(new Error($t('Please use character (A-Z, a-z) values only')))
        } else {
          callback()
        }
        return null
      },
    }
  },
}
