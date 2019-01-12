<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div
        v-for="(image,index) in images"
        :key="index"
        class="swiper-slide"
      >
        <img :src="image.src">
      </div>
    </div>
    <div
      slot="button-prev"
      class="swiper-button-prev"
    >
      <i class="fas fa-angle-left" />
    </div>
    <div
      slot="button-next"
      class="swiper-button-next"
    >
      <i class="fas fa-angle-right" />
    </div>
    <div class="swiper-pagination swiper-pagination-bullets" />
  </div>
</template>

<script>
const test = [
  {
    src:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
  },
  {
    src:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
  },
  {
    src:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
  },
  {
    src:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
  },
  {
    src:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
  },
]
export default {
  data() {
    return {
      swiperOption: {
        // loop: true,
        // slidesPerView: 'auto',
        // centeredSlides: true,
        autoplay: false,
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          //   dynamicBullets: true,
        },
        on: {
          slideChange() {
            // console.log('onSlideChangeEnd', this)
          },
          tap() {
            // console.log('onTap', this)
          },
        },
      },
    }
  },
  computed: {
    images() {
      return test
    },
  },
  mounted() {
    // console.log(
    //   'This is current swiper instance object',
    //   this.mySwiper,
    //   'I will slideTo banners 3',
    // )
    // this.mySwiper.slideTo(3)
  },
}
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 223px;
  overflow: hidden;
  position: relative;
  .swiper-wrapper {
    width: 10000%;
    .swiper-slide {
      width: 276px;
      height: 223px;
      float: left;
      img {
        max-width: 100%;
        height: 100%;
      }
    }
  }
  .swiper-button-prev ,  .swiper-button-next {
      width:50px;height:50px;
      vertical-align: middle;
  }
  .swiper-button-prev {
            text-align: left;
    i {
        line-height: 50px;
      font-size: 31px;
      color: #ffffff;
    }
    position: absolute;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
  }
  .swiper-button-next {
            text-align: right;
    i {
        line-height: 50px;

      font-size: 31px;
      color: #ffffff;
    }
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
  }
}
</style>
