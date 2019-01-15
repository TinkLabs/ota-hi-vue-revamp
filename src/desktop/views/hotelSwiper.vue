<template>
  <div
    v-swiper:mySwiper="swiperOption"
    class="swiper-container"
  >
    <FeaturedHotel />
    <div
      slot="button-prev"
      class="swiper-button-prev"
    >
      <i class="el-icon-arrow-left" />
    </div>
    <div
      slot="button-next"
      class="swiper-button-next"
    >
      <i class="el-icon-arrow-right" />
    </div>
    <!-- <div class="swiper-pagination swiper-pagination-bullets" /> -->
  </div>
</template>

<script>
import FeaturedHotel from './includes/featuredHotel.vue'
import 'swiper/dist/css/swiper.css'


export default {
  components: {
    FeaturedHotel,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4, // 设置slider容器能够同时显示的slides数量
        spaceBetween: 20, // slide之间的距离
        slidesPerGroup: 1, // 在carousel mode下定义slides的数量多少为一组
        loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

    }
  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style lang='scss' scoped>
@import '../common/main.scss';
// Featured Hotels swiper
  .swiper-container{
    position: relative;
    .swiper-button-prev,
    .swiper-button-next {
      display: inline-block;
      width: 44px;
      height: 44px;
      line-height: 48px;
      text-align: center;
      position: absolute;
      right: 0;
      top: 34%;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      cursor: pointer;
      i {
        font-size: 18px;
        font-weight: 900;
      }
    }
    .swiper-button-prev {
      left: 0;
    }
    .swiper-wrapper{
      display: flex;
      justify-content: space-between;
      .swiper-slide{
        width: 24%;
      }
      img{
        width:100%;
      }
      .hotel-location {
        @include font(12px, normal, #888, MerriweatherSans);
        margin-top: 4px;
      }
      .hotel-name {
        @include font(20px, bold, #333, MerriweatherSans);
        margin: 6px 0;
      }
      .hotel-price {
        @include font(16px, normal, #888, MerriweatherSans);
      }
      .stars {
        margin-top: 10px;
        color: #fec800;
      }
    }
  }
</style>
