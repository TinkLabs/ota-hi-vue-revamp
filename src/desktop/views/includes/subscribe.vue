<template>
    <!-- subscribe -->
    <div class="h-container">
      <div class="subscribe">
      <p>Subscribe to our newsletter</p>
      <h1>Best deals directly to your inbox</h1>
      <div class="subscribe-input">
        <input type="text" placeholder="Enter your email address">
        <button>Join Today</button>
      </div>
    </div>
    </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    mounted() {
    },
    methods:{
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/main.scss';

  // subscribe
  .subscribe{
    width:100%;
    padding:44px 80px;
    box-sizing: border-box;
    background-color: #d8d8d8;
    margin-bottom:60px;
    p{
      @include font(21px,300,#002b55,Roboto);
    }
    h1{
      @include font(21px,bold,#002b55,Roboto);
      margin:10px 0;
    }
    input{
      width:40%;
      height:50px;
      border-radius:4px 0 0 4px;
      outline: none;
      padding:0 18px;
      font-size:14px;
      appearance: none;
      border:none;

    }
    button{
      width:150px;
      height:50px;
      border-radius:0 4px  4px 0;
      background-color: #cba052;
      border:none;
      color:#fff;
      font-size: 14px;
    }
  }


</style>
