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
const hotelImg = '/images/homepage/Hotel Image@3x.png'
const hotelImg2 = '/images/homepage/Hotel Image2@3x.png'

export default {
  data() {
    return {
      hotelList: [
        {
          src: hotelImg,
          location: 'Country • City ',
          name: 'London Marriott Hotel',
          price: '99',
          star: 3,
          id: 1,
        }, {
          src: hotelImg2,
          location: 'Kensington London',
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
  @import '../../../common/style/mobile_main.scss';
  .swiper-wrapper{
    width:100%;
    display:flex;
    justify-content: flex-start;
    overflow-x: scroll;
    &::-webkit-scrollbar{
      display:none;
    }
    .swiper-slide{
      // width: 24%;
      margin-right:3%;
    }
    img{
      // width:100%;
      width:280px;
    }
    .hotel-location {
      @include font(24px, normal, #888, MerriweatherSans);
      margin-top: 4px;
    }
    .hotel-name {
      @include font(34px, bold, #333, Montserrat);
    }
    .hotel-price {
      @include font(26px, normal, #333, MerriweatherSans);
    }
    .stars {
      color: #fec800;
      i{
        font-size:25px;
      }
    }
  }
</style>
