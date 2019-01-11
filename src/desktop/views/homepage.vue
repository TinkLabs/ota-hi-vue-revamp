<template>
  <div class="home-view">
    <!-- content -->
    <div class="h-container">
      <div class="items">
        <!-- featured -->
        <div class="featured">
          <h2 class="title">
            Featured
          </h2>
          <h1>4000 best hotels around the world</h1>
          <div class="view-hotel">
            View hotels now
          </div>
        </div>
        <!-- eat like locals -->
        <div class="eat-like-locals">
          <h2 class="title">
            Eat Like Locals
          </h2>
          <div class="content">
            Lorem ipsum dolor
          </div>
        </div>
        <!-- find gems -->
        <div class="find-gems">
          <h2 class="title">
            Find Hidden Gems
          </h2>
          <div class="content">
            Lorem ipsum dolor
          </div>
        </div>
        <!-- hot deals -->
        <div class="hot-deals">
          <h2 class="title">
            Hot Deals
          </h2>
          <div class="content">
            Lorem ipsum dolor
          </div>
        </div>
        <!-- handy -->
        <div class="handy">
          <h2 class="title">
            handy
          </h2>
          <div class="content">
            Your travelling companion
          </div>
        </div>
      </div>

      <!-- Top Destinations -->
      <div class="top-destination">
        <h1 class="title">
          Top Destinations
        </h1>
        <ul>
          <li
            v-for="item in destinationData"
            :key="item.location"
          >
            <img :src="item.img">
            <div class="content">
              <h2 class="title">
                {{ item.location }}
              </h2>
              <p>{{ item.price }}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- where to stay -->
      <div class="to-stay">
        <h1 class="title">
          Where to Stay
        </h1>
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <ul>
          <li>
            <img
              src="../images/homepage/stay@3x.png"
              alt=""
            >
            <div class="title">
              Tropical
            </div>
            <h2>Tropical</h2>
            <div class="hotel-num">
              62 Hotels
            </div>
            <div class="content">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut</span>
              <span>condimentum ligula felis, tempor volutpat orci fermentum sagittis.</span>
            </div>
          </li>
          <li class="city-life">
            <img
              src="../images/homepage/stay2@3x.png"
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
          </li>
        </ul>
      </div>

      <!--  Featured Hotels-->
      <div class="featured-hotels">
        <h1 class="title">
          Featured Hotels
        </h1>
        <HotelSwiper/>
      </div>
    </div>

    <!-- subscribe -->
    <Subscribe />
  </div>
</template>

<script>
import Bus from '../component/bus'
import Header from './includes/header.vue'
import Footer from './includes/footer.vue'
import HotelSwiper from './hotelSwiper.vue'
import Subscribe from './includes/subscribe.vue'
import locationImg from '../images/homepage/Location Image2@3x.png'
import locationImg1 from '../images/homepage/Location Image4@3x.png'
import locationImg2 from '../images/homepage/Location Image3@3x.png'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Subscribe,
    HotelSwiper
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

  },
  methods: {

  },
}
</script>

<style lang='scss'>
@import '../common/main.scss';

.h-container {
  h1.title {
    @include font(26px, 600, #002b55, Montserrat);
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
    position: relative;
    top:-40px;
    padding-bottom:10px;
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
      }
    }
  }
  // Featured Hotels
  .featured-hotels {
    position: relative;
  }
}
</style>
