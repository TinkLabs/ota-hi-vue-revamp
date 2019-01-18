<template>
  <div class="mobile-container">
    <div class="header">
      <i
        :class="[isback==true ?'el-icon-third-back':'el-icon-third-menu']"
        @click="backToHomepage"
      />
      <div class="logo">
        <img
          src="../../../desktop/images/homepage/hi_DotComLogo@3x.png"
          alt="hi.com logo"
        >
      </div>
      <i class="el-icon-third-user" />
    </div>
    <h1 class="title">
      <slot>Say hi to your next destination!</slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    isback: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    backToHomepage() {
      this.$emit('hideSearchBox', true)
    },

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
