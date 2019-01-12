<template>
  <div class="loading-wrapper">
    <img
      :src="load"
      alt="loading"
    >
    <loading-icon />
  </div>
</template>

<script>
import loading from '../../images/homepage/hi_DotComLogo.png'
import LoadingIcon from './LoadingIcon.vue'

export default {
  components: {
    LoadingIcon,
  },
  computed: {
    load() {
      return loading
    },
  },
}
</script>

<style lang="scss">
.loading-wrapper {
  width: 812px;
  height: 187px;
  padding-top: 35px;
  text-align: center;
  margin-bottom:30px;
  box-shadow: 0 12px 33px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  img {
    display: inline-block;
    margin-bottom: 19px;
  }

}
</style>
