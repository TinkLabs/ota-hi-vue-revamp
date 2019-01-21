export default {
  install(Vue, option) {
    const objectVue = Vue
    const $t = option.i18n
    const onlyLetterSpace = (rule, value, callback) => {
      if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(value)) {
        callback(new Error($t('Please use character (A-Z, a-z) values only')))
      } else {
        callback()
      }
      return null
    }
    objectVue.prototype.$v = {
      firstName: [
        {
          required: true,
          message: $t('Please Input Your First Name'),
          trigger: 'blur',
        },
        {
          validator: onlyLetterSpace,
          trigger: 'blur',
        },
      ],
      lastName: [
        {
          required: true,
          message: $t('Please Input Your Last Name'),
          trigger: 'blur',
        },
        {
          validator: onlyLetterSpace,
          trigger: 'blur',
        },
      ],
    }
  },
}
