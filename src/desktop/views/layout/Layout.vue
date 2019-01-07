<template>
  <div class="g-container">
    <Header :homepage="isHomepage" />
    <AppMain />
    <Footer />
  </div>
</template>
<script>
import AppMain from './components/AppMian'
import Header from '../includes/header'
import Footer from '../includes/footer'

export default {
  components: {
    Header,
    Footer,
    AppMain,
  },
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
