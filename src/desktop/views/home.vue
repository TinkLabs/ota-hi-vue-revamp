<template>
    <div  class="home-view">
        Hi! you view this page on desktop!
    </div>
</template>

<script>
  import Bus from '../component/bus'
  export default {
    name: "home",
    data(){
      return {
      }
    },
    mounted() {
      const that = this;
      Bus.$on('scroll', (h)=>{
        console.log(that);
        that.isTop = !(h > 10);
      })
    },
    methods:{
      toggleModal(){
        console.log(this.display);
        this.display = "none" === this.display ? "flex" : "none";
      }
    }
  }
</script>

<style lang='less' scoped>
</style>