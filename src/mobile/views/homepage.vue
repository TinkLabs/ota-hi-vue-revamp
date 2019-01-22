<template>
  <div class="home-container">
    <Header />
    <div class="mobile-container">
      <!-- search bar -->
      <div class="search-container">
        <div class="search-bar">
          <div class="location-input">
            <input
              ref="location"
              type="text"
              placeholder="Anywhere"
              :value="location"
              @focus="startInput"
            >
            <i class="el-icon-third-search" />
          </div>
          <div class="date-input">
            <input
              type="text"
              value="26 Nov 2018 - 27 Nov 2018"
            >
            <i class="el-icon-third-calendar" />
          </div>
          <div class="guest-input">
            <input
              type="text"
              :value="guestNum"
              @focus="selectGuestNum"
            >
            <i class="el-icon-third-user1" />
          </div>
          <div class="search">
            SEARCH
          </div>
        </div>
      </div>
      <div class="popular-search">
        <div class="title">
          {{ $t("POPULAR SEARCHES") }}
        </div>
        <ul class="popular-city">
          <li
            v-for="(item,index) in popular"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <!-- featrued -->
      <div class="items">
        <div class="featured">
          <h2 class="title">
            {{ $t("Featured") }}
          </h2>
          <h1>{{ $t("4000 best hotels around the world") }}</h1>
          <!-- <div class="view-hotel">
              {{ $t("View hotels now") }}
            </div> -->
        </div>
        <div class="featured-right">
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
      </div>

      <!-- Top Destinations -->
      <div class="top-destination">
        <h1 class="title">
          {{ $t("Top Destinations") }}
        </h1>
        <ul>
          <li
            v-for="(item,index) in destinationData"
            :key="index"
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
          <span>{{ $t("Where to Stay") }}</span>
          <span
            class="show-all"
          >
            {{ $t("SHOW ALL") }}
          </span>
        </h1>
        <WhereToStay />
      </div>

      <!--  Featured Hotels-->
      <div class="featured-hotels">
        <h1 class="title">
          {{ $t("Featured Hotels") }}
        </h1>
        <FeaturedHotel />
      </div>
    </div>

    <Footer />
    <SearchBox
      v-show="showSearchBox"
      ref="searchbox"
      @hideSearchBox="hideSearchBox"
    />
    <RoomPicker
      v-show="showRoomPicker"
      @hideSearchBox="hideSearchBox"
    />
  </div>
</template>

<script>
import Header from './includes/header.vue'
import Footer from './includes/footer.vue'
import SearchBox from './includes/searchBox.vue'
import RoomPicker from './includes/roomPicker.vue'

import WhereToStay from './includes/whereToStay.vue'
import FeaturedHotel from './includes/featuredHotel.vue'

const locationImg = '/images/homepage/Location Image2@3x.png'
const locationImg1 = '/images/homepage/Location Image4@3x.png'
const locationImg2 = '/images/homepage/Location Image3@3x.png'

export default {
  name: 'Homepage',
  components: {
    Header,
    Footer,
    SearchBox,
    RoomPicker,
    WhereToStay,
    FeaturedHotel,
  },
  data() {
    return {
      showSearchBox: false,
      showRoomPicker: true,
      location: '',
      date: '',
      guestNum: '2 adults , 0 children',
      popular: [
        'Hong Kong',
        'London',
        'Singapore',
        'Tokyo',
        'Thailland',
        'Korea',
        'Rome',
        'Barcelona',
        'London2',
        'Singapore2',
      ],
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
    startInput() {
      this.showSearchBox = true
      this.$nextTick(() => { this.$refs.searchbox.$refs.keyword.focus() })
    },
    selectGuestNum() {
      this.showRoomPicker = true
    },
    hideSearchBox(target, type) {
      this.showSearchBox = false
      this.showRoomPicker = false
      switch (type) {
        case 1:
          console.log(1)
          this.location = target
          break
        case 2:
          this.date = target
          break
        case 3:
          this.guestNum = target
          console.log(3)
          break
        default:
          break
      }
    },
  },
}
</script>

<style lang='scss'>
@import '../../common/style/mobile_main.scss';

.home-container{
  h1.title{
    @include font(40px, bold, #333, Montserrat);
    letter-spacing: -0.2px;
    margin:40px 0;
  }
  // search bar
  .search-bar{
    >div{
      position: relative;
      margin-top:25px;
      i{
        position: absolute;
        left:40px;
        top:50%;
        transform:translate(0,-50%);
        color:#888888;
        font-size:36px;
      }
    }
    input,div.search{
      width:100%;
      height:110px;
      background-color:#fafafa;
      border-radius:10px;
      @include font(30px, bold, #333, Montserrat);
      padding:0 30px 0 100px;
      outline: none;
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
  // popular search
  .popular-search {
    margin-top:60px;
    padding-bottom:100px;
    .title {
      @include font(28px, bold, #888, MerriweatherSans);
      letter-spacing: 0.6px;
      opacity: 0.5;
    }
    .popular-city {
      width:100%;
      overflow-x: scroll;
      display: flex;
      justify-content: flex-start;
      &::-webkit-scrollbar{
        display:none;
      }
      li {
        margin-right: 40px;
        padding: 12px 0;
        @include font(28px, bold, #505050, MerriweatherSans);
        letter-spacing: 0.6px;
        white-space: nowrap;
      }
    }
  }
  >.content{
    padding:0 45px 100px 45px;
    background-color:#fafafa;
    .items {
      overflow: hidden;
      position: relative;
      top:-40px;
      padding-bottom:10px;
      height:100%;
      position: relative;
      > div {
        width:100%;
        border-radius: 5px;
        h2 {
          @include font(26px, 400, #fff, Montserrat);
          margin:0;
        }
        .content {
          @include font(16px, normal, #fff, Merriweather);
        }
      }
      .featured {
        padding: 30px;
        height:400px;
        background-image: linear-gradient(
          to bottom,
          rgba(22, 46, 172, 0.8),
          rgba(91, 181, 255, 0.8)
        );
        h1 {
          @include font(40px, bold, #fff, Merriweather);
          margin-top: 30px;
          width: 400px;
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
      .featured-right{
        overflow: hidden;
        width:100%;
        display:flex;
        justify-content: flex-start;
        overflow-x: scroll;
        margin-top:25px;
        &::-webkit-scrollbar{
            display:none;
        }
        >div{
          padding: 23%;
          height:300px;
          border-radius:5px;
          box-sizing: border-box;
          margin-right:3%;
          position: relative;
          h2,.content{
            position: absolute;
            top:35px;
            left:20px;
            font-family:Merriweather;
          }
          h2{
            width:160px;
          }
          .content{
            top:130px;
          }
        }
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
      padding-bottom: 66px;
      border-bottom: 1px solid #e7e7e7;
      ul {
        width:100%;
        overflow-x: scroll;
        overflow-y:hidden;
        display: flex;
        margin-top:36px;
        justify-content: flex-start;
        &::-webkit-scrollbar{
          display:none;
        }
        li {
          // width: 300px;
          padding:23%;
          position: relative;
          margin-right:3%;
          height:360px;
          overflow: hidden;
          border-radius:10px;
          img{
            width:100%;
            width:300px;
            height:360px;
            position: absolute;
            left:0;
            top:0;
          }
          .content {
            position: absolute;
            width: 100%;
            bottom: 30px;
            left: 0;
            h2,
            p {
              width: 100%;
              text-align: center;
            }
          }
          h2.title {
            @include font(30px, bold, #fff, Montserrat);
          }
          p {
            @include font(26px, normail, #fff, MerriweatherSans);
            margin-top: 4px;
          }
        }
      }
    }

     // where to stay
    .to-stay {
      margin-top: 50px;
      h1.title{
        display:flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom:40px;
        .show-all{
          @include font(24px, bold, #cba052, MerriweatherSans);
          cursor: pointer;
        }
      }
    }

     // Featured Hotels
  .featured-hotels {
    position: relative;
    h1.title{
      margin:50px 0 40px 0;
    }
  }
  }
}

</style>
