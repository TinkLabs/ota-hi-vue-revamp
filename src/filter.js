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
