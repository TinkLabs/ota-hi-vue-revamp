<template>
  <div class="home-view">
    <!--header  -->
    <Header />
    <div class="container-box">
      <div class="content-left book-confirm-msg">
        <!-- <p class="safety-notice">All card information is fully encrypted,secure and protected.</p>
        <p>Secure Payment</p>
        <p>Available payment methods</p> -->
        <div class="sign-notice">
          <div class="warm-text">
            <p>We will fill in the blanks for you</p>
            <p>Connect with Facebook for Sitn in for faster,easier booking</p>
          </div>
          <div class="sign-in-area">
            <button class="sign-in-btn">Sign In</button>
          </div>
        </div>
        <!-- checkout-item msg area-->
        <div class="checkout-item">
          <p class="item-title">Your Details</p>
          <div class="msg-ipt">
                <input type="text" autocomplete="off" placeholder="Please input" class="el-input__inner">
          </div>
          <div class="msg-ipt">
                <input type="text" autocomplete="off" placeholder="Please input" class="el-input__inner">
          </div>
          <div class="msg-ipt">
                <input type="text" autocomplete="off" placeholder="Please input" class="el-input__inner">
          </div>
          <p class="confirm-notice">Confirmation will be sent to this email address</p>
          <div class="msg-ipt">
                <input type="text" autocomplete="off" placeholder="Please input" class="el-input__inner countryCode">
                <input type="text" autocomplete="off" placeholder="Please input" class="el-input__inner phoneNum">
          </div>
          <div class="msg-ipt">
                <span class="el-checkbox__inner checkout-fake"></span>
                <span class="check-detail">I am booking this for someone else</span>
          </div>
        </div>

        <div class="checkout-item">
          <p class="item-title">Special requirements</p>
          <p class="requirement-notice">Requests are fulfiled on a first come,first served basis.We'll send your right after your book is confirmed.</p>
          <div class="add-requirements">
            <i class="el-icon-plus"></i>
            <span>Add Special requirements</span>
          </div>
        </div>

        <div class="checkout-item">
          <p class="item-title">Arrival time</p>
          <p class="requirement-notice">We'll let the property or host know when to expect you.</p>
          <div class="msg-ipt">
                <input type="text" autocomplete="off" placeholder="Please input" class="el-input__inner">
          </div>
        </div>
        <p class="term-and-policy">By procedding wiht this booking,I agree to hi.com's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
        <p class="left-notice">Don.t miss this!We have only 4 rooms left!</P>
        <button class="next-btn" href="#">NEXT</button>
   </div>
      <div class="content-right book-detail-msg">
        <div class="extra-msg-item">
          <div class="book-info-detail">
            <p class="hotel-name">The Bailey's Hotel London</p>
            <ul class="hotel-level">
              <li v-for="index in 5" :key="index" class="el-icon-star-on"></li>
            </ul>
            <p class="hotel-location">Westminster Borough,London</p>
            <div class="warm-area">
              <i class="el-icon-bell"></i>
              <span>Don't miss out!There are only 4 rooms left at this hotel.</span>
            </div>
            <p class="book-time"><span class="book-date">Mon 27 Dec - Tue 28 Dec</span><span class="book-days">2 Nightd</span></p>
            <div v-for="(item,index) in suiteItems" :key="index" class="suiteItems">
              <div class="detail-list-group">
                <div class="info-title">{{item.title}}</div>
                <ul class="info-list">
                  <li>{{item.roomType}}</li>
                  <li>{{item.members}}</li>
                </ul>
              </div>
              <a class="changeBtn">Charge</a>
            </div>
          </div>
        </div>
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
  },
  data() {
    return {
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
      suiteItems:[{
        title:"One Bedroom Suite1",
        roomtype:"Double bed",
        members:"2 Adults,0 Children"
      },{
        title:"One Bedroom Suite2",
        roomtype:"Double bed",
        members:"2 Adults,0 Children "
      }]
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
@import '../../common/checkout/checkoutpage.scss';
</style>

