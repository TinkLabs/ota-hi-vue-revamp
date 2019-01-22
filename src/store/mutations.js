/* global hiApp */
export default {
  SET_LANG: (state, language) => {
    /**
     * hiApp was defined in entry-client.js
     */
    hiApp.$i18n.locale = language
    const tmpState = state
    tmpState.global.langCode = language
  },
}
