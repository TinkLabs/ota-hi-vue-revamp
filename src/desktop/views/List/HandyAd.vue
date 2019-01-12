<template>
  <div
    class="handy-ad"
    @click="jump"
  >
    <img
      src=""
      alt=""
    >
  </div>
</template>

<script>
export default {
  methods: {
    jump() {
      window.open('http://www.baidu.com/', '_blank')
    },
  },
}
</script>

<style lang="scss">
.handy-ad{
    width:812px;
    height: 200px;
    margin:34 auto 56px;
    background: #ccc;
    text-align: center;
    vertical-align: center;
    img{

    }
}
</style>
