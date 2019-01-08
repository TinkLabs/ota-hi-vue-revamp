<template>
  <div class="g-container">
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
    console.log('isSlot', this.isSlot);
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
