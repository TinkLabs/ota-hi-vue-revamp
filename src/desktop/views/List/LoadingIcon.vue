<template>
  <div class="loading" />
</template>

<script>
export default {

}
</script>

<style lang='scss'>
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
</style>
