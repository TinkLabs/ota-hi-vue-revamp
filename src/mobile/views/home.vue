<template>
  <div class="home-view">
    {{ $t("hi") }}! ! you view this page on mobile!
  </div>
</template>

<script>
import Bus from '../component/bus'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  mounted() {
    const that = this
    Bus.$on('scroll', (h) => {
      console.log(that)
      that.isTop = !(h > 10)
    })
  },
  methods: {
    toggleModal() {
      console.log(this.display)
      this.display = this.display === 'none' ? 'flex' : 'none'
    },
  },
}
</script>

<style lang='scss' scoped>
</style>
