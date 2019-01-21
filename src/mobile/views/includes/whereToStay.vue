<template>
  <!-- where to stay -->
  <ul>
    <li
      v-for="(item,index) in hotelList"
      :key="index"
    >
      <img
        :src="item.src"
        alt=""
      >
      <div class="title">
        {{ item.title }}
      </div>
      <h2>
        <span class="hotel-type">
          {{ item.type }}
        </span>
        <span class="hotel-num">
          {{ item.num }} Hotels
        </span>
      </h2>

      <div class="content">
        <span>{{ item.desc }}</span>
      </div>
    </li>
    <!-- <li class="city-life">
      <img
        src="../../images/homepage/stay2@3x.png"
        alt=""
      >
      <div class="title">
        City LIFE
      </div>
      <h2>City Life</h2>
      <div class="hotel-num">
        45 Hotels
      </div>
      <div class="content">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut</span>
        <span>condimentum ligula felis, tempor volutpat orci fermentum sagittis.</span>
      </div>
    </li> -->
  </ul>
</template>

<script>
import hotelImg from '../../../desktop/images/homepage/stay@3x.png'
import hotelImg2 from '../../../desktop/images/homepage/stay2@3x.png'

const homeHotelList = [{
  src: hotelImg,
  title: 'Tropical',
  type: 'Tropical',
  num: '99',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum ligula felis, tempor volutpat orci fermentum sagittis.',
}, {
  src: hotelImg2,
  title: 'City Life',
  type: 'City Life',
  num: '99',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum ligula felis, tempor volutpat orci fermentum sagittis.',
}]

export default {
  data() {
    return {
      hotelList: [
        {
          src: hotelImg,
          title: 'Tropical',
          type: 'Tropical',
          num: '99',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum ligula felis, tempor volutpat orci fermentum sagittis.',
        }, {
          src: hotelImg2,
          title: 'City Life',
          type: 'City Life',
          num: '99',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum ligula felis, tempor volutpat orci fermentum sagittis.',
        }, {
          src: hotelImg,
          title: '',
          type: 'Tropical',
          num: '99',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum ligula felis, tempor volutpat orci fermentum sagittis.',
        },
        {
          src: hotelImg2,
          title: '',
          type: 'Tropical',
          num: '99',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum ligula felis, tempor volutpat orci fermentum sagittis.',
        },
        {
          src: hotelImg,
          title: '',
          type: 'Tropical',
          num: '99',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum ligula felis, tempor volutpat orci fermentum sagittis.',
        },
        {
          src: hotelImg,
          title: '',
          type: 'Tropical',
          num: '99',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum ligula felis, tempor volutpat orci fermentum sagittis.',
        },
      ],

    }
  },
  mounted() {
    console.log(this.$route.name)
    if (this.$route.name === 'homepage') {
      this.hotelList = homeHotelList
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
  @import '../../common/main.scss';
// where to stay
  ul {
    width:100%;
    display:flex;
    justify-content: flex-start;
    overflow-x: scroll;
    height:auto;
    &::-webkit-scrollbar{
      display:none;
    }
    li {
      position: relative;
      margin-bottom:20px;
      margin-right:3%;
      img{
        width:100%;
      }
      .title {
        position: absolute;
        width: 100%;
        left: 0;
        top: 24%;
        text-align: center;
        font-size: 90px;
        color: #fff;
        font-weight: lighter;
        font-family: Bonita;
      }
      h2 {
        margin: 26px 0 14px 0;
        @include font(34px, bolder, #333, Montserrat);
        width:580px;
      }
      .hotel-num {
        display:inline-block;
        @include font(24px, bold, #888, Montserrat);
        // margin: 10px 0;
      }
      .content {
        @include font(28px, normal, #333, MerriweatherSans);
      }
      img{
        width:100%;
      }
    }
  }
  .city-life {
    .title {
      font-size: 80px;
    }
  }
</style>
