<template>
  <div class="mobile-container">
    <div class="header">
      <i class="fas fa-bars" />
      <div class="logo">
        <img
          src="../../../desktop/images/homepage/hi_DotComLogo@3x.png"
          alt="hi.com logo"
        >
      </div>
      <i class="fas fa-user" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style lang='scss' scoped>
  @import '../../common/main.scss';
  .header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:$darkblue;
    font-size:30px;
    svg{
      display:inline-block;
    }
    .logo{
      width:100px;
      height:100px;
      line-height:100px;
      text-align: center;
      border-radius:50%;
      img{
        width:100%;
      }
    }
  }
</style>
