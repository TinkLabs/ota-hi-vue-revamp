<template>
  <div id="app" ref="total_view">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
  import Bus from '../component/bus'
  export default {
    name: "index",
    mounted() {
      const that = this;
      this.$refs.total_view.addEventListener('scroll', () => {
        Bus.$emit('scroll', that.$refs.total_view.scrollTop);
      }, false)
    }
  }
</script>

<style>
  body, html {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow: hidden;
  }

  #app {
    height: 100%;
    overflow: auto;
  }
</style>