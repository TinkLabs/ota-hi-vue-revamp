<template>
  <div class="home-view">
    {{ $t("hi") }}! you view this page on desktop?!
    <Header />
  </div>
</template>

<script>
import Bus from '../component/bus'
import Header from './includes/header.vue'

export default {
  name: 'Home',
  components: {
    Header,
  },
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
