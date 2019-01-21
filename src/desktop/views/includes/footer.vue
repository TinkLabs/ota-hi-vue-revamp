<template>
  <div class="footer">
    <ul class="hi-items">
      <li>
        <img
          src="../../../common/images/homepage/Shape Copy@3x.png"
          alt=""
        >
        <h1>{{ $t("More than 300,000 hotels") }}</h1>
        <p>{{ $t("in 57,000 destinations in 200 countries") }}</p>
      </li>
      <li class="money">
        <img
          src="../../../common/images/homepage/money@3x.png"
          alt=""
        >
        <h1>{{ $t("Save Money") }}</h1>
        <p>{{ $t("95% of our customers save up to 80%") }}</p>
      </li>
      <li>
        <img
          src="../../../common/images/homepage/Combined Shape Copy@3x.png"
          alt=""
        >
        <h1>{{ $t("Our customers are satisfied") }}</h1>
        <p>{{ $t("We are always thinking about your satisfaction!") }}</p>
      </li>
      <li>
        <img
          src="../../../common/images/homepage/team@3x.png"
          alt=""
        >
        <h1>{{ $t("Meet our team") }}</h1>
        <p>{{ $t("Experienced professionals help you all the way") }}</p>
      </li>
    </ul>
    <div class="main-links">
      <div class="logo">
        <img
          src="../../../common/images/homepage/hi_DotComLogo@3x.png"
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
            {{ $t("Privacy Policy") }}
          </a>
          <span> | </span>
          <a href="#">
            {{ $t("Terms & Conditions") }}
          </a>
        </div>
      </div>
      <div class="about">
        <div class="title">
          {{ $t("About") }}
        </div>
        <ul>
          <li>
            <a href="#">
              {{ $t("About Us") }}
            </a>
          </li>
          <li>
            <a href="#">
              {{ $t("Sign Up") }}
            </a>
          </li>
          <li>
            <a href="#">
              {{ $t("Careers") }}
            </a>
          </li>
          <li>
            <a href="#">
              {{ $t("Investor Relations") }}
            </a>
          </li>
          <li>
            <a href="#">
              {{ $t("Partners") }}
            </a>
          </li>
        </ul>
      </div>
      <div class="explore">
        <div class="title">
          {{ $t("Explore") }}
        </div>
        <ul>
          <li>
            <a href="#">
              {{ $t("Hotels & Resorts") }}
            </a>
          </li>
          <li>
            <a href="#">
              {{ $t("Deals") }}
            </a>
          </li>
          <li>
            <a href="#">
              {{ $t("Experiences") }}
            </a>
          </li>
          <li>
            <a href="#">
              {{ $t("Gallery") }}
            </a>
          </li>
        </ul>
      </div>
      <div class="contact">
        <div class="title">
          {{ $t("Contact") }}
        </div>
        <ul>
          <li>
            <a href="#">
              {{ $t("Call Us") }}
            </a>
          </li>
          <li>
            <a href="#">
              {{ $t("Email Us") }}
            </a>
          </li>
          <li>
            <a href="#">
              {{ $t("Manage Booking") }}
            </a>
          </li>
          <li>
            <a href="#">
              {{ $t("Global Offices") }}
            </a>
          </li>
        </ul>
      </div>
      <div class="press">
        <div class="title">
          {{ $t("Press") }}
        </div>
        <ul>
          <li>
            <a href="#">
              {{ $t("Newsroom") }}
            </a>
          </li>
          <li>
            <a href="#">
              {{ $t("Press Releases") }}
            </a>
          </li>
          <li>
            <a href="#">
              {{ $t("Press Kit") }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
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
  @import '../../../common/style/main';

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
