<template>
  <div class="header">
    <ul>
      <li>
        <span>Contact Us</span>
      </li>
      <li>
        <span>Support</span>
      </li>
      <li
        class="language"
        @mouseenter="showLanguage"
        @mouseleave="hideLanguage"
      >
        <span ref="language">English</span>
        <transition name="show-language">
          <ul
            v-show="languageShow"
            class="language-list"
          >
            <li
              v-for="item in language"
              :class="[item.class]"
              @click="selectLanguage($event)"
            >
              <img
                :src="item.img"
                alt=""
              >
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </transition>
      </li>
      <li
        class="currency"
        @mouseenter="showCurrency"
        @mouseleave="hideCurrency"
      >
        <span ref="currency">HKD</span>
        <transition name="show-currency">
          <ul
            v-show="currencyShow"
            class="currency-list"
          >
            <li
              v-for="item in currency"
              :class="[item.class]"
              @click="selectCurrency($event)"
            >
              {{ item.name }}
            </li>
          </ul>
        </transition>
      </li>
    </ul>
    <header :class="[searchBarFixed == true ? 'headerFixed' :'']">
      <div class="logo">
        <img
          src="../../images/homepage/hi_DotComLogo@3x.png"
          alt="hi.com logo"
        >
        <span>Hotel</span>
        <span>Experience</span>
        <span>Restaurant</span>
      </div>
      <div class="account">
        <a href="#">
          Sign In
        </a>
        <span> | </span>
        <a href="#">
          Create an Account
        </a>
      </div>
    </header>
    <div :class="['search',searchBarFixed == true ?'isFixed' :'',homepage ? '' :'notHomepage']">
      <p :class="[searchBarFixed == true ? 'hide' :'']">
        Say hi to your next destination!
      </p>
      <div :class="['search-bar']">
        <div class="location">
          <div class="title">
            LOCATION OR HOTEL
          </div>
          <!-- 自定义输入建议的显示  服务端搜索数据-->
          <el-autocomplete
            popper-class="my-autocomplete"
            v-model="state4"
            :fetch-suggestions="querySearchAsync"
            placeholder="Anywhere"
            @select="handleSelect"
          >
            <i
              slot="prefix"
              class="el-icon-search el-input__icon"
              @click="handleIconClick"
            />
            <template slot-scope="{ item }">
              <div v-if=item.type class="search-result-list">
                <div class="result-name">
                  <i class="el-icon-location-outline"></i>
                  {{item.value}}
                </div>
                <div class="type">{{item.type}}</div>
              </div>
              <div v-else>
                <div class="title" v-if=item.title>{{item.title}}</div>
                <div v-else-if=item.checkin :class="['history-list',item.isLast == true?'isLast':'']">
                  <div class="name">
                    <span></span>
                    <span>{{ item.value }}</span>
                  </div>
                  <div class="info">
                    <div class="check-date">
                      <span>{{item.checkin}} - {{item.checkout}}</span>
                    </div>
                    <div class="guest-info">
                      <span>{{item.room}} room, {{item.adult}} adults, {{item.children}} children</span>
                    </div>
                  </div>
                </div>
                <div v-else class="cities">
                  <div class="keyword">
                    <i class="el-icon-location"></i>
                    <span>{{item.value}}</span>
                  </div>
                  <div class="number">
                    <span>{{item.number}}</span>
                    properties
                  </div>
                </div>
              </div>


            </template>
          </el-autocomplete>
        </div>
        <div class="check">
          <div class="title">
            CHECK IN & OUT
          </div>
          <!-- <input type="text" placeholder="CHECK IN & OUT"> -->
          <!-- datepicker -->
          <div class="block">
            <!-- <span class="demonstration">默认</span> -->
            <!-- {{value6}} -->
            <el-date-picker
              v-model="value6"
              type="daterange"
              range-separator="-"
              start-placeholder="CHECK IN"
              end-placeholder="CHECK OUT"
            />
          </div>
        </div>
        <div class="guests">
          <div class="title">
            GUESTS
          </div>
          <div class="guest-num">
            <i class="far fa-user" />
            <span class="room-num">
              1
            </span> room,
            <span class="adult-num">
              2
            </span> adults,
            <br>
            <span class="children-num">
              0
            </span> children
          </div>
          <!-- <input type="text" placeholder="GUESTS"> -->
        </div>
        <button>Search</button>
      </div>
      <div :class="['popular-search',searchBarFixed == true ? 'hide' :'']">
        <div class="title">
          POPULAR SEARCHES
        </div>
        <ul class="popular-city">
          <li
            v-for="item in popular"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import languageImg1 from '../../images/homepage/Mask Group 18@3x.png'
import languageImg2 from '../../images/homepage/Mask Group 19@3x.png'
import languageImg3 from '../../images/homepage/Mask Group 20@3x.png'

export default {
  name: 'Header',
  props: {
    homepage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
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
      currency: [
        {
          name: 'GBP - Great British Sterling',
        },
        {
          name: 'HKD - Hong Kong Dollars',
          class: 'active',
        },
        {
          name: 'EUR - Euros',
        },
        {
          name: 'JPY - Japanese Yen Dollarsg',
        },
        {
          name: 'BHD - Bahraini Dinar',
        },
        {
          name: 'INR - Indian Rupees',
        },
        {
          name: 'USD - United States Dollars',
        },
        {
          name: 'CAD - Canadian Dollars',
        },
        {
          name: 'SAR - Saudi Arabia Riyals',
        },
      ],
      language: [
        {
          name: '繁體中文',
          img: languageImg3,
        },
        {
          name: '简体中文',
          img: languageImg3,
        },
        {
          name: '日本語',
          img: languageImg2,
        },
        {
          name: 'English',
          class: 'active',
          img: languageImg1,
        },

      ],
      languageShow: false,
      currencyShow: false,
      restaurants: [],
      state3: '',
      state4: '',
      timeout: null,
      // datepicker
      value6: ['2019-01-17T16:00:00.000Z', '2019-01-18T16:00:00.000Z'],
      // search bar fixed
      searchBarFixed: false,
    }
  },
  mounted() {
    this.restaurants = this.loadAll()
    window.addEventListener('scroll', this.handleScroll);
    document.querySelector('.el-input__inner').addEventListener('input',this.getSearchList)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // search location or hotel
    loadAll() {
      return [
        {
          title:'Search History',
          value:'',
        },
        { value: 'Bangkok, Thailand',
          checkin:'14 Feb 2018',
          checkout:'16 Feb 2018',
          room:1,
          adult:2,
          children:2
        },
        {
          value: 'Hong Kong, Hong Kong',
          checkin:'14 Feb 2018',
          checkout:'16 Feb 2018',
          room:1,
          adult:2,
          children:2
        },
        {
          value: 'Sheraton Grande Walkerhill Casino, Seoul',
          checkin:'14 Feb 2018',
          checkout:'16 Feb 2018',
          room:1,
          adult:2,
          children:2,
          isLast:true,
        },
        {
          value:'London, United Kingdom',
          number:5254,
        },
        {
          value:'London, Canada',
          number:355,
        },
        {
          value:'London, South Africa',
          number:768,
        },
      ]
    },
    loadAllResult() {
      return [
        {
          value:'London, Marriott Hotel Regents Park, England, UK',
          type:'Hotel',
          icon:''
        },
         {
          value:'London, Fleming Mayfair, Small Luxury Hotels of the World',
          type:'Hotel',
          icon:''
        },
        {
          value:'London Hotel, Glyfada, Greece',
          type:'Hotel',
          icon:''
        },
        {
          value:'London, Ontario, Canada',
          type:'City',
          icon:''
        },
        {
          value:'London City Centre',
          type:'City',
          icon:''
        },
        {
          value:'London Heathrow Airport',
          type:'Airport',
          icon:''
        },
        {
          value:'London Bridge, London UK',
          type:'Landmarks',
          icon:''
        },
      ]
    },
    querySearchAsync(queryString, cb) {
      const restaurants = this.restaurants
      const results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
      console.log(results)
      cb(results)
    },
    createStateFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      console.log(item)
      // check in focus
      document.querySelector('.el-range-input').focus();
    },
    handleIconClick(ev) {
      console.log(ev)
    },
    // searchbar fixed
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const offsetTop = document.querySelector('.search-bar').offsetTop
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    },
    showCurrency() {
      this.currencyShow = true
    },
    hideCurrency() {
      this.currencyShow = false
    },
    showLanguage() {
      this.languageShow = true
    },
    hideLanguage() {
      this.languageShow = false
    },
    selectCurrency(event){
      event.currentTarget.parentNode.getElementsByClassName('active')[0].className=""
      console.log(event.currentTarget.parentNode.getElementsByClassName('active'))
      this.$refs.currency.innerHTML=event.currentTarget.innerHTML.split('-')[0]
      event.currentTarget.className='active'
      this.currencyShow = false
      // 切换货币
    },
    selectLanguage(event){
      event.currentTarget.parentNode.getElementsByClassName('active')[0].className=""
      this.languageShow = false
      this.$refs.language.innerHTML=event.target.innerHTML
      event.currentTarget.className='active'
      // 切换语言
    },
    // search with typing
    getSearchList(){
      console.log(12)
      this.restaurants = this.loadAllResult()

    }
  },
}
</script>

<style lang="scss">
@import '../../common/main.scss';
.header {
  width: 100%;
  color: #333;
  > ul {
    padding: 0 12%;
    // margin:0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 30px;
    @include font(12px, bold, #333, Rubik);
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    >li {
      list-style: none;
      margin-left: 20px;
      position: relative;
      cursor: pointer;
      span{
        display:inline-block;
        padding:8px 14px;
      }
      .currency-list,.language-list{
        position: absolute;
        top:35px;
        right:0;
        background-color:#fff;
        border-radius: 4px;
        box-shadow: 0 12px 33px 0 rgba(0, 0, 0, 0.16);
        transition:all .4s;
        padding:10px 0;
        li.active{
          color:#cba052;
        }
        li{
          padding:10px 20px;
          color:#505050;
          width:180px;
          &:hover{
            color:#fff;
            background-color:#002b55;
            transition:all .4s;
          }
        }
      }
      .language-list{
        li{
          // padding-left:50px;
          padding:0;
          padding-left:18px;
          box-sizing: border-box;
          width:120px;
          img{
            width:18px;
            margin-right:6px;
          }
        }
      }
    }
    .currency,.language{
      &:hover{
        color:#fff;
        background-color:#002b55;
        transition:all .4s;
      }
    }
  }
  header {
    padding: 10px 12%;
    display: flex;
    justify-content: space-between;
    span {
      display: inline-clock;
    }
    .logo {
      // height:60px;
      // line-height:60px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 100px;
      }
      span {
        font-weight: bold;
        font-size: 16px;
        margin-left: 57px;
      }
    }
    .account {
      line-height: 40px;
      span,
      a {
        font-family: Rubik;
        font-weight: bolder;
        font-size: 12px;
      }
    }
  }
  header.headerFixed{
    margin-bottom:200px;
  }
  .search.isFixed {
    position: fixed;
    background-color: #f1f1f1;
    top: -26px;
    z-index: 999;
    padding-bottom: 16px;
    transition: all 0.4s;
  }
  .search {
    width: 100%;
    padding: 0 12%;
    box-sizing: border-box;
    background-color: #f5f5f5;
    box-shadow: 0 12px 33px 0 rgba(0, 0, 0, 0.11);
    padding-bottom: 60px;
    transition: all 0.4s;
    p {
      font-family: Montserrat;
      font-size: 40px;
      font-weight: bold;
      padding: 40px 0;
    }
    .search-bar,
    .popular-search {
      .title {
        @include font(12px, bold, #888, MerriweatherSans);
        opacity: 0.5;
      }
    }

    .search-bar {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .title {
        padding: 10px 0;
      }
      > div {
        margin-right: 15px;
      }
      .location {
        min-width: 260px;
        width:40%;
        .el-autocomplete{
          width:100%;

        }
        .my-autocomplete {
          li {
            line-height: normal;
            padding: 7px;
            .name {
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .addr {
              font-size: 12px;
              color: #b4b4b4;
            }

            .highlighted .addr {
              color: #ddd;
            }
          }
        }
        .el-input__prefix {
          left: 12px;
          .el-input__icon {
            font-weight: bold;
            font-size: 18px;
          }
        }
      }
      // search button
      button,
      input {
        padding: 22px 0;
        border-radius: 5px;
        border: none;
        -webkit-appearance: none;
        outline: none;
      }

      input {
        @include font(14px, bolder, #333, MerriweatherSans);
        height: 28px;
      }
      .el-input__inner {
        height: auto;
        line-height: initial;
        font-size: 20px;
        height: 72px;
        padding-left: 52px;
        font-weight: bolder;
        border: none;
        padding-right: 20px;
        .el-range-separator {
          line-height: 64px;
        }
        input {
          padding: 22px 0;
        }
      }
      // check in & out date
      .check {
        .el-input__inner {
          padding-left: 20px;
        }
        .el-input__icon {
          color: #333;
          font-weight: bolder;
          font-size: 18px;
        }
        .el-date-editor .el-range__close-icon {
          display: none;
        }
        .el-date-editor--daterange.el-input__inner {
          width: 280px;
        }
      }

      // guest number
      .guests {
        .guest-num {
          min-width: 114px;
          height: 36px;
          background-color: #fff;
          border-radius: 5px;
          padding: 18px 18px 18px 46px;
          @include font(14px, bolder, #333, MerriweatherSans);
        }
      }
      // search button
      button {
        width: 20%;
        min-width: 120px;
        max-width: 160px;
        background-color: #cba052;
        @include font(20px, bold, #fff, MerriweatherSans);
        cursor: pointer;
      }
    }

    .popular-search {
      @include font(14px, bold, #333, MerriweatherSans);
      margin-top: 40px;
      .popular-city {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        li {
          margin-right: 40px;
          padding: 12px 0;
          cursor: pointer;
        }
      }
    }
  }

  .notHomepage {
    padding: 10px 12%;
    > p,
    .title,
    .popular-search {
      display: none;
    }
  }
  .notHomepage.isFixed {
    top: 0;
  }
}
// search suggestion list
.el-popper[x-placement^=bottom]{
  margin-top:6px;
}
.el-autocomplete-suggestion.el-popper[x-placement^=bottom]{
  width:auto !important;
  min-width:500px;
  overflow: unset;
  border-radius: 4px;
  .el-scrollbar{
    border-radius:4px;
    .el-autocomplete-suggestion__wrap{
      max-height:300px;
    }
  }
  .el-scrollbar__view{
    list-style-type: disc !important;
    li{
      padding:0;
      &:hover{
        background-color:#fff;
      }
      .title{
        @include font(12px,bold, #8dc8e8,MerriweatherSans);
        padding:0 20px;
        cursor: auto;
      }
      .history-list,.cities,.search-result-list{
        list-style-type: disc;
        display:flex;
        justify-content: space-between;
        align-items: center;
        line-height:44px;
        padding:0 20px;
        &:hover{
          background-color:#002b55;
          transition: all .4s;
          .name,.info,.keyword,.number,.number span,.result-name,.type{
            color:#fff;
            transition: all .4s;
          }
          .name span:first-child{
            background-color:#fff;
            transition: all .4s;
          }
        }
      }
      // search with typing
      .search-result-list{
        border-bottom:2px solid rgba(150, 150, 150, 0.12);
        height:50px;

      }

      .history-list.isLast{
        border-bottom:2px solid rgba(69, 116, 235,0.1);
        margin-bottom:10px;
      }
      color:#505050;

      .name,.keyword,.result-name{
        @include font(14px,bold, #505050,MerriweatherSans);
        margin-right:50px;
        span:first-child{
          display:inline-block;
          width:6px ;
          height:6px;
          background-color:#000;
          border-radius:50%;
          margin:2px 20px 2px 10px;
        }
        i{
          margin:0 12px 0 10px;
        }

      }
      .type{
        @include font(14px,normal, #888,MerriweatherSans);
      }
      .number{
        @include font(14px,bold, #505050,MerriweatherSans);
        span{
          color:#cba052;
        }
      }
      .info{
        @include font(10px,normal, #888,Rubik);
        >div{
          line-height:16px;
        }
      }


    }
  }

}
.my-autocomplete,.el-popper[x-placement^=bottom]{

}
// transition
.show-language-enter-active, .show-language-leave-active {
  transition: opacity .5s;
}
.show-language-enter, .show-language-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.show-currency-enter-active, .show-currency-leave-active {
  transition: opacity .5s;
}
.show-currency-enter, .show-currency-leave-to {
  opacity: 0;
}
</style>
