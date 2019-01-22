
import countries from 'i18n-iso-countries'

countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
countries.registerLocale(require('i18n-iso-countries/langs/zh.json'))
countries.registerLocale(require('i18n-iso-countries/langs/ja.json'))

export default {
  install(Vue) {
    const objectVue = Vue
    const lang = {
      en: 'en',
      'zh-cn': 'zh',
    }
    const langObj = {}
    Object.keys(lang).forEach((key) => {
      const tempLang = countries.getNames(lang[key])
      // only one china
      tempLang.HK += ` (${tempLang.CN})`
      tempLang.TW += ` (${tempLang.CN})`
      tempLang.MO += ` (${tempLang.CN})`
      langObj[key] = tempLang
    })
    objectVue.prototype.$Countries = langObj
  },
}
