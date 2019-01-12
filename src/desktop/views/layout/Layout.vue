<template>
  <div class="wrapper">
    <Header :homepage="isHomepage" />
    <div class="app-main">
      <slot v-if="isSlot" />
      <router-view v-if="!isSlot" />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../includes/header'
import Footer from '../includes/footer'

export default {
  components: {
    Header,
    Footer,
  },
  props: ['isSlot'],
  data() {
    return {
    }
  },
  computed: {
    isHomepage() {
      return (this.$route.name === 'homepage')
    },
  },
  created() {
    console.log((this.$route.name === 'homepage'))
  },
}
</script>
<style lang='scss'>
  html, body{
    margin: 0;
    padding: 0;
  }
</style>
