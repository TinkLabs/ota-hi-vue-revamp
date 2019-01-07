<template>
  <div class="home-view">
    <!--header  -->
    <Header />

   

  
    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import Bus from '../../component/bus'
import Header from './header.vue'
import Footer from '../includes/footer.vue'
import Subscribe from '../includes/subscribe.vue'
import locationImg from '../../images/homepage/Location Image2@3x.png'
import locationImg1 from '../../images/homepage/Location Image4@3x.png'
import locationImg2 from '../../images/homepage/Location Image3@3x.png'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Subscribe,
  },
  data() {
    return {
      isHomepage: true,
      destinationData: [
        {
          img: locationImg,
          location: 'Sydney',
          price: 'Average $000/night',
        },
        {
          img: locationImg1,
          location: 'Dubai',
          price: 'Average $000/night',
        },
        {
          img: locationImg2,
          location: 'London',
          price: 'Average $000/night',
        },
        {
          img: locationImg1,
          location: 'Tokyo',
          price: 'Average $000/night',
        },
        {
          img: locationImg2,
          location: 'New York',
          price: 'Average $000/night',
        },
      ],
    }
  },
  mounted() {
    const that = this
    Bus.$on('scroll', (h) => {
      console.log(that)
      that.isTop = !(h > 10)
    })
  },
  methods: {
    toggleModal() {
      console.log(this.display)
      this.display = this.display === 'none' ? 'flex' : 'none'
    },
  },
}
</script>

<style lang='scss' scoped>
@import '../../common/main.scss';

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.h-container {
  h1.title {
    @include font(26px, 600, #002b55, Montserrat);
    padding-bottom: 20px;
  }
  .content {
    @include font(16px, normal, #333333, MerriweatherSans);
    padding-bottom: 20px;
  }
  > div {
    padding-bottom: 50px;
    > ul {
      display: flex;
      justify-content: space-between;
      li {
        border-radius: 5px;
        overflow: hidden;
      }
      img {
        width: 100%;
      }
    }
  }

  .items {
    overflow: hidden;
    margin-top: -2.6%;
    // display:flex;
    // justify-content: space-between;
    // flex-wrap: wrap;
    > div {
      float: left;
      margin-left: 1%;
      margin-bottom: 1%;
      border-radius: 5px;
      padding: 2%;
      h2 {
        @include font(26px, 400, #fff, Montserrat);
      }
      .content {
        @include font(16px, normal, #fff, Merriweather);
      }
    }
    .featured {
      width: 46%;
      // height:30%;
      // padding:2%;
      background-image: linear-gradient(
        to bottom,
        rgba(22, 46, 172, 0.8),
        rgba(91, 181, 255, 0.8)
      );
      margin-left: 0;
      h1 {
        @include font(40px, bold, #fff, Montserrat);
        margin-top: 40px;
        width: 320px;
      }
      .view-hotel {
        @include font(16px, bold, #fff, MerriweatherSans);
        margin-top: 30%;
        width: 188px;
        text-align: center;
        padding: 15px 20px;
        box-sizing: border-box;
        border: 2px solid #fff;
        border-radius: 5px;
      }
    }
    .featured ~ div {
      width: 20%;
      height: 200px;
    }
    .eat-like-locals {
      background-image: linear-gradient(
        to top,
        rgba(20, 57, 169, 0.8),
        rgba(23, 7, 58, 0.8)
      );
    }
    .find-gems {
      background-image: linear-gradient(
        to bottom,
        rgba(15, 117, 96, 0.8),
        rgba(66, 184, 135, 0.8)
      );
    }
    .hot-deals {
      background-image: linear-gradient(
        to bottom,
        rgba(78, 16, 75, 0.8),
        rgba(193, 79, 153, 0.8)
      );
    }
    .handy {
      background-image: linear-gradient(
        to bottom,
        rgba(186, 110, 17, 0.8),
        rgba(255, 164, 39, 0.8)
      );
    }
  }
  // Top Destinations
  .top-destination {
    padding-bottom: 50px;
    border-bottom: 2px solid rgba(0, 43, 85, 0.1);
    ul {
      li {
        width: 19%;
        position: relative;
        .content {
          position: absolute;
          width: 100%;
          bottom: 4px;
          left: 0;
          h2,
          p {
            width: 100%;
            text-align: center;
          }
        }
        h2.title {
          @include font(16px, bold, #fff, MerriweatherSans);
        }
        p {
          @include font(12px, bold, #fff, MerriweatherSans);
          margin-top: 4px;
        }
      }
    }
  }
  // where to stay
  .to-stay {
    margin-top: 50px;
    ul {
      li {
        width: 49%;
        position: relative;
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
      }
    }
    .city-life {
      .title {
        font-size: 80px;
        // @include font(80px,200,#fff,HelveticaNeue);
      }
    }
  }
  // Featured Hotels
  .featured-hotels {
    position: relative;
    .arrow-right,
    .arrow-left {
      display: inline-block;
      width: 44px;
      height: 44px;
      line-height: 48px;
      text-align: center;
      position: absolute;
      right: -22px;
      top: 34%;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      cursor: pointer;
      i {
        font-size: 18px;
        font-weight: 900;
      }
    }
    .arrow-left {
      left: -22px;
    }
    ul {
      li {
        width: 24%;
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
  }
}
</style>
