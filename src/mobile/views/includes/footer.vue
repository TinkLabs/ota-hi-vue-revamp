<template>
  <div class="footer">
    <ul class="hi-items">
      <li>
        <img
          src="/images/homepage/Shape Copy@3x.png"
          alt=""
        >
        <h1>{{ $t("Over 300,000 hotels") }}</h1>
        <p>{{ $t("in 57,000 destinations in 200 countries") }}</p>
      </li>
      <li class="money">
        <img
          src="/images/homepage/money@3x.png"
          alt=""
        >
        <h1>{{ $t("Save Money") }}</h1>
        <p>{{ $t("95% of our customers save up to 80%") }}</p>
      </li>
      <li>
        <img
          src="/images/homepage/Combined Shape Copy@3x.png"
          alt=""
        >
        <h1>{{ $t("Customer satisfaction") }}</h1>
        <p>{{ $t("We are always thinking about your satisfaction!") }}</p>
      </li>
      <li>
        <img
          src="/images/homepage/team@3x.png"
          alt=""
        >
        <h1>{{ $t("Meet our team") }}</h1>
        <p>{{ $t("Experienced professionals help you all the way") }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
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

<style lang="scss" scoped>
  @import '../../../common/style/mobile_main.scss';

  .footer{
    margin-top:40px;
    background-color:#fff;
    .hi-items{
      padding:60px 45px;
      display: flex;
      justify-content: space-between;
      // background-color:#fafafa;
      flex-wrap: wrap;
      li{
        text-align: center;
        width:46%;
        margin-bottom:100px;
        img{
          height:70px;
        }
        h1{
          @include font(24px,bold,#002855,Montserrat);
          margin-top:38px;
        }
        p{
          // width:60%;
          // margin-left:20%;
          @include font(20px,normal,#a0a0a0,Montserrat);
        }
      }

    }

  }
</style>
