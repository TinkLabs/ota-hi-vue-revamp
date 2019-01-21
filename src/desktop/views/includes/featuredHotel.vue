<template>
  <!-- featured hotel -->
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
      </div>
      <div class="stars">
        <i
          v-for="(star,i) in item.star"
          :key="i"
          class="el-icon-star-on"
        />
        <!-- <i
          v-for="(star,i) in (5-item.star)"
          :key="i+'-star'"
          class="el-icon-star-off"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import hotelImg from '../../../common/images/homepage/Hotel Image@3x.png'
import hotelImg2 from '../../../common/images/homepage/Hotel Image2@3x.png'

export default {
  data() {
    return {
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
        {
          src: hotelImg2,
          location: 'Lambeth  London',
          name: 'Plaza on the River',
          price: '499',
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

<style lang="scss" scoped>
  @import '../../../common/style/main';
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
</style>
