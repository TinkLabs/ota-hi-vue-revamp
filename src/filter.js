import Vue from 'vue'

Vue.filter('calendar', (date) => {
  if (!date) return ''
  const tempDate = new Date(date)
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][tempDate.getDay()]
  const dayday = tempDate.getDate()
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][tempDate.getMonth()]
  return `${day} ${dayday} ${month}`
})

Vue.filter('checkDate', (date) => {
  if (!date) return ''
  const tempDate = new Date(date)
  const y = tempDate.getFullYear()
  let m = tempDate.getMonth() + 1
  m = m < 10 ? `0${m}` : m
  const d = tempDate.getDate() < 10 ? `0${tempDate.getDate()}` : tempDate.getDate()
  return `${y}-${m}-${d}`
})
