<template>
  <div class="mobile-container">
    <div class="header">
      <i class="el-icon-third-menu" />
      <div class="logo">
        <img
          src="../../../desktop/images/homepage/hi_DotComLogo@3x.png"
          alt="hi.com logo"
        >
      </div>
      <i class="el-icon-third-user" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
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
    i{
      color:$darkblue;
      font-size:40px;
    }
    i.el-icon-third-user{
      font-size: 46px;
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
