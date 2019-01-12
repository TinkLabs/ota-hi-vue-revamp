<template>
  <div
    id="app"
    ref="total_view"
  >
    <router-view class="view" />
  </div>
</template>

<script>
export default {
  name: 'Index',
  mounted() {
  },
}
</script>

<<<<<<< HEAD
<style >
=======
<style scoped>
  @import '../public/style/font/iconfont.css';
>>>>>>> staging
  body, html {
    padding: 0;
    margin: 0;
    height: 100%;
    /* overflow: hidden; */
  }

  #app {
    height: 100%;
    overflow: auto;
  }
</style>
