<template>
  <div
    v-swiper:mySwiper="swiperOption"
    class="swiper-container"
  >
    <div class="swiper-wrapper">
      <div
        v-for="(item,index) in hotelList"
        :key="index"
        class="swiper-slide"
      >
        <img
          :src="item.src"
          alt=""
        >
        <div class="hotel-location">
          {{ item.location }}
        </div>
        <div class="hotel-name">
          {{ item.name }}
        </div>
        <div class="hotel-price">
          <span>${{ item.price }}</span>/night
          {{ item.star }}
        </div>
        <div class="stars">
          <i
            v-for="(star,i) in item.star"
            :key="i"
            class="el-icon-star-on"
          />
          <i
            v-for="(star,i) in (5-item.star)"
            :key="i+'-star'"
            class="el-icon-star-off"
          />
        </div>
      </div>
    </div>
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
import 'swiper/dist/css/swiper.css'
import hotelImg from '../images/homepage/Hotel Image@3x.png'
import hotelImg2 from '../images/homepage/Hotel Image2@3x.png'

export default {
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
      hotelList: [
        {
          src: hotelImg,
          location: 'Westminster Borough  London',
          name: 'London Marriott Hotel',
          price: '99',
          star: 3,
          id: 1,
        }, {
          src: hotelImg2,
          location: 'Kensington and Chelsea  London',
          name: 'The Kensingotn Hotel',
          price: '199',
          star: 5,
          id: 1,
        }, {
          src: hotelImg,
          location: 'Lambeth  London',
          name: 'Plaza on the River',
          price: '299',
          star: 4,
          id: 1,
        },
        {
          src: hotelImg2,
          location: 'Lambeth  London',
          name: 'London Marriott Hotel',
          price: '399',
          star: 5,
          id: 1,
        },
        {
          src: hotelImg2,
          location: 'Lambeth  London',
          name: 'Plaza on the River',
          price: '499',
          star: 5,
          id: 1,
        },
      ],
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
