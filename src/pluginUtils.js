export default {
  install(Vue, options) {
    // 全局注册混合对象后，会影响到 所有 之后创建的 Vue 实例。
    // 谨慎使用
    Vue.mixin({
      directives: {
        //
      },
      //   data() {
      //     return {
      //       someValue1: 'some value1：mixin的data里的值',
      //     }
      //   },
    })
    // Vue.prototype.someValue2 = 'someValue2：Vue.prototype上的值'
    // Vue.filter('vcntFormat', cnt => (cnt >= 100000 ? `${Math.floor(cnt / 10000)}万` : cnt))
    // Vue.directive('myfocus', {
    //   // 当绑定元素插入到 DOM 中。
    //   inserted(el) {
    //     // 聚焦元素
    //     el.focus()
    //   },
    // })
    Vue.prototype.$fmtPrice = function (str) {
      //
      return str.replace(/[0-9.]+/, (o) => {
        const comp = o.split('.')
        const ending = comp[1] && comp[1].length > 0 ? `.${comp[1]}` : ''
        return comp[0].split('').reverse().join('').replace(/\d{3}/g, n => ((`${n},`)))
          .split('')
          .reverse()
          .join('')
          .replace(/^,/, '') + ending
      })
    },
    Vue.prototype.$thr = function throttle(fn, delay = 300) {
      let can = true
      return function realHandler(...rest) {
        if (can) {
          can = false
          setTimeout(() => {
            fn(...rest)
            can = true
          }, delay)
        }
      }
    }
  },
}
