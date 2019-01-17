<template>
  <div class="search-container">
    <div class="search-bar">
      <div class="location-input">
        <input
          type="text"
          placeholder="Anywhere"
        >
        <i class="far fa-search" />
      </div>
      <div class="date-input">
        <input
          type="text"
          value="26 Nov 2018 - 27 Nov 2018"
        >
        <i class="far fa-calendar-day" />
      </div>
      <div class="guest-input">
        <input
          type="text"
          value="2 adults, 0 children"
        >
        <i class="far fa-user" />
      </div>
      <div class="search">
        SEARCH
      </div>
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
  .search-bar{
    >div{
      position: relative;
      margin-top:25px;
      svg{
        position: absolute;
        left:40px;
        top:50%;
        transform:translate(0,-50%);
        color:#888888;
        font-size:30px;
      }
    }
    input,div.search{
      width:100%;
      height:110px;
      background-color:#fafafa;
      border-radius:10px;
      @include font(30px, bold, #333, Montserrat);
      padding:0 30px 0 100px;
    }
    div.search{
      text-align: center;
      line-height:110px;
      background-color: #cba052;
      letter-spacing: 2px;
      color:#fff;
      margin-top:25px;
      padding:0;

    }
  }

</style>
