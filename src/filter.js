import Vue from 'vue'
import moment from 'moment'

Vue.filter('calendar', (date) => {
  if (!date) return ''
  // moment 已对非法输入做了错误处理，自动返回 'Invalid date'
  return moment(date).format('ddd DD MMM')
})

Vue.filter('d422', (date) => {
  if (!date) return ''
  return moment(date).format('YYYY-MM-DD')
})
Vue.filter('price', str => (
  // 'HK$ 100000' -> 'HK$ 100,000'
  str.replace(/[0-9.]+/, (o) => {
    const comp = o.split('.')
    const ending = comp[1].length > 0 ? `.${comp[1]}` : ''
    return comp[0].split('').reverse().join('').replace(/\d{3}/g, n => ((`${n},`)))
      .split('')
      .reverse()
      .join('')
      .replace(/^,/, '') + ending
  })
))
