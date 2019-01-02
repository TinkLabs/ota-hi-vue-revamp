<template>
    <div  class="home-view">
        <Header></Header>
    </div>
</template>

<script>
  import Bus from '../component/bus'
  import Header from './includes/header.vue'
  export default {
    name: "home",
    data(){
      return {
      }
    },
    components:{
      Header
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
  html,body{
    width:100%;
  }

</style>