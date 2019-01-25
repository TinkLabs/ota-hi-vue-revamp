<template>
  <div
    v-show="!hidemenu"
    class="menu-wrapper"
  >
    <div
      class="menu-mask"
      @click="maskClick"
    />
    <div class="menu-page">
      <user-brief />
      <Menu />
    </div>
  </div>
</template>

<script>
import UserBrief from './UserBrief.vue'
import Menu from './Menu.vue'

export default {
  components: {
    UserBrief,
    Menu,
  },
  props: {
    hidemenu: {
      type: Boolean,
    },
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    maskClick() {
      this.$emit('maskClick', true)
    },
  },
}
</script>

<style lang='scss'>
.menu-wrapper {
  font-family: Rubik;
  width: 720px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y:scroll;
  overflow-x:hidden;
  height:890px;
  .menu-mask {
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0,0,0, 0.1);
  }
  .menu-page {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    width: 580px;
    height: 100%;
    background: #fff;
  }
}
</style>
