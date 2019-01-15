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
      <h2>{{ item.type }}</h2>
      <div class="hotel-num">
        {{ item.num }} Hotels
      </div>
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
import hotelImg from '../../images/homepage/stay@3x.png'
import hotelImg2 from '../../images/homepage/stay2@3x.png'

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
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 49%;
      position: relative;
      margin-bottom:20px;
      .title {
        position: absolute;
        width: 100%;
        left: 0;
        top: 24%;
        // transform:translate(0,-50%);
        text-align: center;
        font-size: 90px;
        color: #fff;
        font-weight: lighter;
        font-family: Bonita;
        // @include font(90px,200,#fff,Bonita);
      }
      h2 {
        margin-top: 10px;
        @include font(20px, bolder, #333, MerriweatherSans);
      }
      .hotel-num {
        @include font(14px, bold, #333, MerriweatherSans);
        margin: 10px 0;
      }
      .content {
        @include font(14px, normal, #333, MerriweatherSans);
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
