<template>
  <div class="home-view">
    <div class="h-container">
      <div class="top-hotel">
        <h1 class="title">
          {{ $t("Top Hotel Destinations") }}
        </h1>
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <TopHotel />
      </div>
      <div class="featured-hotel">
        <h1 class="title">
          {{ $t("Find your perfect stay") }}
        </h1>
        <FeaturedHotel />
      </div>
    </div>
  </div>
</template>

<script>
import TopHotel from './includes/topHotel.vue'
import FeaturedHotel from './includes/featuredHotel.vue'

export default {
  name: 'Home',
  components: {
    TopHotel,
    FeaturedHotel,
  },
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

<style lang='scss'>
@import '../common/main.scss';
.h-container{
  h1.title {
    @include font(26px, 600, #333333, Montserrat);
  }
  .top-hotel{
    padding-top:50px;
    .content{
      margin-bottom:30px;
    }
    ul{
      li{
        width:49%;
        img{
          width:100%;
        }
      }
    }

  }
  .featured-hotel{
    padding-bottom:40px;
    .title{
      margin:0 0 30px 0;
    }
    .swiper-wrapper{
      flex-wrap: wrap;
      .swiper-slide{
        margin-bottom:60px;
      }

    }
  }
}
</style>
