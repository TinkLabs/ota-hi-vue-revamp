<template>
  <div class="home-view">
    <!--header  -->
    <Header />
    <div class="container-box">
      <div class="content-left book-confirm-msg">
        <p class="safety-notice">All card information is fully encrypted,secure and protected.</p>
      </div>
      <div class="content-right book-detail-msg">

      </div>
    </div>
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
$light-blue:#4574eb;
.container-box{
  width:76%;
  height:12px;
  margin:0 auto;
  .content-left{
    width:57%;
    height:343px;
    float:left;
    margin-right:5%;
    .safety-notice{
      width:100%;
      height:44px;
      line-height:44px;
      @include font(12px,normal,$main_color4,MerriweatherSans);
      border-radius: 5px;
      background:$light-blue;
    }
  }
  .content-right{
    width:38%;
    height:343px;
    float:left;
    background-color: #000;
  }
}
</style>

