<template>
  <div class="footer">
    <ul class="hi-items">
      <li>
        <img
          src="../../images/homepage/Shape Copy@3x.png"
          alt=""
        >
        <h1>More than 300,000 hotels</h1>
        <p>in 57,000 destinations in 200 countries</p>
      </li>
      <li class="money">
        <img
          src="../../images/homepage/money@3x.png"
          alt=""
        >
        <h1>Save Money</h1>
        <p>95% of our customers save up to 80%</p>
      </li>
      <li>
        <img
          src="../../images/homepage/Combined Shape Copy@3x.png"
          alt=""
        >
        <h1>Our customers are satisfied</h1>
        <p>We are always thinking about your satisfaction!</p>
      </li>
      <li>
        <img
          src="../../images/homepage/team@3x.png"
          alt=""
        >
        <h1>Meet our team</h1>
        <p>Experienced professionals help you all the way</p>
      </li>
    </ul>
    <div class="main-links">
      <div class="logo">
        <img
          src="../../images/homepage/hi_DotComLogo@3x.png"
          alt="hi.com logo"
        >
        <ul>
          <li />
          <li />
          <li />
          <li />
        </ul>
        <div>
          <span>@hi Inc. 2018  </span>
          <span> | </span>
          <a href="#">
            Privacy Policy
          </a>
          <span> | </span>
          <a href="#">
            Terms & Conditions
          </a>
        </div>
      </div>
      <div class="about">
        <div class="title">
          About
        </div>
        <ul>
          <li>
            <a href="#">
              About Us
            </a>
          </li>
          <li>
            <a href="#">
              Sign Up
            </a>
          </li>
          <li>
            <a href="#">
              Careers
            </a>
          </li>
          <li>
            <a href="#">
              Investor Relations
            </a>
          </li>
          <li>
            <a href="#">
              Partners
            </a>
          </li>
        </ul>
      </div>
      <div class="explore">
        <div class="title">
          Explore
        </div>
        <ul>
          <li>
            <a href="#">
              Hotels & Resorts
            </a>
          </li>
          <li>
            <a href="#">
              Deals
            </a>
          </li>
          <li>
            <a href="#">
              Experiences
            </a>
          </li>
          <li>
            <a href="#">
              Gallery
            </a>
          </li>
        </ul>
      </div>
      <div class="contact">
        <div class="title">
          Contact
        </div>
        <ul>
          <li>
            <a href="#">
              Call Us
            </a>
          </li>
          <li>
            <a href="#">
              Email Us
            </a>
          </li>
          <li>
            <a href="#">
              Manage Booking
            </a>
          </li>
          <li>
            <a href="#">
              Global Offices
            </a>
          </li>
        </ul>
      </div>
      <div class="press">
        <div class="title">
          Press
        </div>
        <ul>
          <li>
            <a href="#">
              Newsroom
            </a>
          </li>
          <li>
            <a href="#">
              Press Releases
            </a>
          </li>
          <li>
            <a href="#">
              Press Kity
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style lang="scss" scoped>
  @import '../../common/main.scss';

  .footer{
    .hi-items{
      padding:60px 12%;
      display: flex;
      justify-content: space-between;
      background-color:#fafafa;
      li{
        text-align: center;
        img{
          height:40px;
        }
        h1{
          @include font(16px,bold,#002b55,MerriweatherSans);
          margin-top:38px;
        }
        p{
          width:60%;
          margin-left:20%;
          @include font(14px,normal,#333,Rubik);
        }
      }

    }

    // links
    .main-links{
      padding:50px 12%;
      display: flex;
      justify-content: space-between;
      .logo{
        img{
          width:134px;
        }
        >div{
          margin-top:30px;
          @include font(11px,normal,#999,SFUIText);
        }
        ul{
          display: flex;
          justify-content: flex-start;
          margin-top:30px;
          li{
            width: 35px;
            height: 35px;
            border-radius:50%;
            background-color: rgba(213, 213, 213, 0.6);
            margin-right:16px;
          }
        }

      }
      .logo ~ div{
        @include font(14px,bolder,#888,MerriweatherSans);
        ul{
          li{
            @include font(14px,bold,#333,MerriweatherSans);
            margin:10px 0;
          }
        }
      }
    }

  }
</style>
