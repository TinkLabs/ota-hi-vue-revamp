<template>
  <div :class="['header-wrapper',searchBarFixed == true ?'isFixed' :'']">
    <div :class="['header',searchBarFixed == true ?'isFixed' :'']">
      <ul>
        <li>
          <span>Contact Us</span>
        </li>
        <li>
          <span>Support</span>
        </li>
        <li
          class="language"
          @mouseenter="languageShow=true;"
          @mouseleave="languageShow=false;"
        >
          <span ref="language">English</span>
          <transition name="show-language">
            <ul
              v-show="languageShow"
              class="language-list"
            >
              <li
                v-for="(item,index) in language"
                :class="[item.class]"
                @click="selectLanguage($event,index)"
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
          @mouseenter="currencyShow=true"
          @mouseleave="currencyShow=false"
        >
          <span ref="currency">HKD</span>
          <transition name="show-currency">
            <ul
              v-show="currencyShow"
              class="currency-list"
            >
              <li
                v-for="(item,index) in currency"
                :class="[item.class]"
                @click="selectCurrency($event,index)"
              >
                {{ item.name }}
              </li>
            </ul>
          </transition>
        </li>
      </ul>
      <header>
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
              v-model="searhResult"
              :fetch-suggestions="querySearchAsync"
              placeholder="Anywhere"
              @select="handleSelect"
            >
              <i
                slot="prefix"
                class="el-icon-search el-input__icon"
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
                  <!-- history list -->
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
                  <!-- cities -->
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
                v-model="defaultDate"
                type="daterange"
                range-separator="-"
                start-placeholder="CHECK IN"
                end-placeholder="CHECK OUT"
                :picker-options="pickerOptions"
                ref="datePicker"
              />
            </div>
          </div>
          <div class="guests">
            <div class="title">
              GUESTS
            </div>
            <div class="guest-num">
              <i class="far fa-user" />
              <!-- <i class="fas fa-user" /> -->
              <!-- <font-awesome-icon :icon="['fas','coffee']" /> -->
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
      searhResult: '',
      // search bar fixed
      searchBarFixed: false,
      // datepicker
      defaultDate: [],
      startDate:'',
      endDate:'',
      pickerOptions: {
        onPick:({ maxDate, minDate })=>{
          this.startDate=minDate;
          this.endDate=maxDate;
        },
        disabledDate:(time) =>{
          if(this.startDate){
            let minDate = (this.startDate).getTime();
            let one = 30 * 24 * 3600 * 1000;
            let oneMonth = minDate + one;
            return time.getTime() < Date.now() - 24*60*60*1000 || time.getTime() > oneMonth;
          }else{
            return time.getTime() < Date.now() - 24*60*60*1000;
          }
        },
      },
    }
  },
  mounted() {
    this.restaurants = this.loadAll()
    window.addEventListener('scroll', this.handleScroll);
    // el-autocomplete 没有input change 事件
    document.querySelector('.el-input__inner').addEventListener('input',this.getSearchList);
    this.getDefaultTime();
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
      cb(results)
    },
    createStateFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      // check in&out focus
      this.$refs.datePicker.focus();
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
    // select currency
    selectCurrency(event,index){
      for(let i in this.currency){
        this.currency[i].class=null;
      }
      this.currency[index].class='active';
      this.$refs.currency.innerHTML=this.currency[index].name.split('-')[0]
      this.currencyShow = false
      // 切换货币
    },
    // select language
    selectLanguage(event,index){
      for(let i in this.language){
        this.language[i].class=null;
      }
      this.language[index].class='active';
      this.$refs.language.innerHTML=this.language[index].name
      this.languageShow = false
      // 切换语言
    },
    // search with typing
    getSearchList(){
      this.restaurants = this.loadAllResult()
    },
    getDefaultTime(){
      // default date
      let startDate = new Date().getTime()+14*24*60*60*1000
      let endDate=new Date().getTime()+15*24*60*60*1000
      this.defaultDate=[this.formatDate(new Date(startDate)),this.formatDate(new Date(endDate))]
    },
    formatDate(date){
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      let d = date.getDate()
      let time = y + '-' + m + '-' + d
      return time;
    }
  },
}
</script>

<style lang="scss">
@import '../../common/main.scss';
.header-wrapper.isFixed{
  height:460px;
}
.header {
  width: 100%;
  color: #333;
  min-width:1024px;
  > ul {
    padding: 0 12%;
    // margin:0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 30px;
    @include font(12px, bold, #333, Rubik);
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
        z-index:1;
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
          width:130px;
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
    border-bottom:2px solid #ebebeb;
    span {
      display: inline-clock;
    }
    .logo {
      // height:60px;
      // line-height:60px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
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
      a:first-child{
        color:#cba052;
      }
    }
  }
  .search {
    width: 100%;
    padding: 0 12%;
    box-sizing: border-box;
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
        background-color:#ebebeb;
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
          background-color:#ebebeb;
          border-radius: 5px;
          padding: 18px 18px 18px 46px;
          @include font(14px, bolder, #333, MerriweatherSans);
          position: relative;
          svg{
            position: absolute;
            left:12px;
            top:50%;
            font-size:16px;
            font-weight:bolder;
            transform:translate(0,-50%);

          }
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
  .notHomepage,.isFixed {
    padding: 10px 12%;
     p,
    .title,
    .popular-search {
      display: none;
    }
  }
  .notHomepage.isFixed {
    top: 0;
  }
}
.header.isFixed {
  position: fixed;
  background-color: #ffff;
  z-index: 999;
  transition: all 0.4s;
  top:0;
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

// datepicker
.el-date-range-picker{
  // year arrow
  .el-picker-panel__icon-btn.el-icon-d-arrow-left,.el-icon-d-arrow-right{
    display:none;
  }
  // month arrow
  .el-picker-panel__icon-btn.el-icon-arrow-left,.el-icon-arrow-right{
    font-size:14px;
    color:#c9c9c9;
    font-weight:bolder;
  }
  // datepicker header
  .el-date-range-picker__header{
    div{
      @include font(13px,500, #8dc8e8,Rubik);
    }
  }

  .el-date-table{
    td span{
      color:#000;
      font-weight:600;
    }
    td.disabled div{
      background-color:#fff;
    }
    .disabled span{
      color:#a5a5a5;
    }
    .today span{
      border: 2px solid #cba052;
      border-radius: 2px;
      box-sizing: border-box;
      line-height:22px;
      font-weight:900;

    }
    td.in-range.start-date,td.in-range.end-date{
      div{
        background-color:#002b55;
        border-radius:2px;
        position: relative;
      }
      span{
        background-color:#002b55;
        border-radius:2px;
        color:#fff;
        border:none;
        line-height:24px;
      }
    }
    // .start-date div:after{
    //   content:"";
    //   position: absolute;  /*日常绝对定位*/
    //   top:0;
    //   left:30px;
    //   width: 0;
    //   height: 0;
    //   border:15px solid transparent;
    //   border-left-color: #002b55;
    // }
  }
  .el-date-table td.in-range div, .el-date-table td.in-range div:hover, .el-date-table.is-week-mode .el-date-table__row.current div, .el-date-table.is-week-mode .el-date-table__row:hover div{
    background-color:#e8e8e8;

  }
  .el-date-table td.in-range div:hover{
    span{
      color:#fff;
    }
  }
  .el-date-table td.in-range div:hover{
    background-color:#002b55;
  }
}
.el-range-input{
  background-color:#ebebeb;
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
