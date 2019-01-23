/* global hiApp */
import moment from 'moment'
export default {
  SET_LANG: (state, language) => {
    /**
     * hiApp was defined in entry-client.js
     */
    hiApp.$i18n.locale = language
    moment.locale(language)
    const tmpState = state
    tmpState.langCode = language
  },
}
