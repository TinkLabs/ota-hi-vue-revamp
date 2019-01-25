<template>
  <div class="mobile-wrapper">
    <div class="content-wrapper">
      <!-- <Header :homepage="isHomepage" /> -->
      <div class="app-main">
        <slot v-if="isSlot" />
        <router-view v-if="!isSlot" />
      </div>
      <Footer />
    </div>
    <!-- MENU -->
    <Menu
      :hidemenu="hideMenu"
      @maskClick="toggleMenu"
    />
  </div>
</template>
<script>
import Footer from '../includes/footer.vue'
import Menu from '../../component/Menu/index.vue'

export default {
  components: {
    Footer,
    Menu,
  },
  props: {
    isSlot: {
      type: Boolean,
    },
  },
  data() {
    return {
      hideMenu: true,
    }
  },
  methods: {
    toggleMenu() {
      this.hideMenu = !this.hideMenu
    },
  },
}
</script>
<style lang='scss'>
  html, body{
    margin: 0;
    padding: 0;
  }
</style>
