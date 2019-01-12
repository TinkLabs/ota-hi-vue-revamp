<template>
  <div class="loading-wrapper">
    <img
      :src="load"
      alt="loading"
    >
    <div class="loading" />
  </div>
</template>

<script>
import loading from '../../images/homepage/hi_DotComLogo.png'

export default {
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
  .loading {
    width: 30px;
    margin:0 auto;
    height: 30px;
    border: 4px solid #efefef;
    border-right: 4px solid #bfbfbf;
    border-radius: 100%;
    animation: mymove 1s infinite linear;
  }
  @keyframes mymove {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
