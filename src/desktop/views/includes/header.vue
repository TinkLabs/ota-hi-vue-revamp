<template>
  <div class="header">
    <ul>
      <li>Contact Us</li>
      <li>Support</li>
      <li>English</li>
      <li>HKD</li>
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
    <div :class="['search',searchBarFixed == true ? 'isFixed' :'',message == 'isHomepage' ? '' :'notHomepage']">
      <p :class="[searchBarFixed == true ? 'hide' :'']">
        Say hi to your next destination!
      </p>
      <div :class="['search-bar']">
        <div class="location">
          <div class="title">
            LOCATION OR HOTEL
          </div>
          <!-- 自定义输入建议的显示 -->
          <el-autocomplete
            v-model="state3"
            popper-class="my-autocomplete"
            :fetch-suggestions="querySearch"
            placeholder="Anywhere"
            @select="handleSelect"
          >
            <i
              slot="suffix"
              class="el-icon-search el-input__icon"
              @click="handleIconClick"
            />
            <template slot-scope="{ item }">
              <div class="name">
                {{ item.value }}
              </div>
              <span class="addr">
                {{ item.address }}
              </span>
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
          <li v-for="item in popular">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "header",
  props: ['message'],
  data() {
    return {
      popular: ['Hong Kong', 'London', 'Singapore', 'Tokyo', 'Thailland', 'Korea', 'Rome', 'Barcelona', 'London', 'Singapore'],
      restaurants: [],
      state3: '',
      value6: ['2019-01-17T16:00:00.000Z', '2019-01-18T16:00:00.000Z'],
      // search bar fixed
      searchBarFixed: false,

    }
  },
  mounted() {
    this.restaurants = this.loadAll()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // search location or hotel
    querySearch(queryString, cb) {
      const restaurants = this.restaurants
      const results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return restaurant => (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
    },
    loadAll() {
      return [
        { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
        { value: 'Hot honey 首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' },
        { value: '新旺角茶餐厅', address: '上海市普陀区真北路988号创邑金沙谷6号楼113' },
        { value: '泷千家(天山西路店)', address: '天山西路438号' },
        { value: '胖仙女纸杯蛋糕（上海凌空店）', address: '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
        { value: '贡茶', address: '上海市长宁区金钟路633号' },
        { value: '豪大大香鸡排超级奶爸', address: '上海市嘉定区曹安公路曹安路1685号' },
        { value: '茶芝兰（奶茶，手抓饼）', address: '上海市普陀区同普路1435号' },
        { value: '十二泷町', address: '上海市北翟路1444弄81号B幢-107' },
        { value: '星移浓缩咖啡', address: '上海市嘉定区新郁路817号' },
        { value: '阿姨奶茶/豪大大', address: '嘉定区曹安路1611号' },
        { value: '新麦甜四季甜品炸鸡', address: '嘉定区曹安公路2383弄55号' },
        { value: 'Monica摩托主题咖啡店', address: '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F' },
        { value: '浮生若茶（凌空soho店）', address: '上海长宁区金钟路968号9号楼地下一层' },
        { value: 'NONO JUICE  鲜榨果汁', address: '上海市长宁区天山西路119号' },
        { value: 'CoCo都可(北新泾店）', address: '上海市长宁区仙霞西路' },
        { value: '快乐柠檬（神州智慧店）', address: '上海市长宁区天山西路567号1层R117号店铺' },
        { value: 'Merci Paul cafe', address: '上海市普陀区光复西路丹巴路28弄6号楼819' },
        { value: '猫山王（西郊百联店）', address: '上海市长宁区仙霞西路88号第一层G05-F01-1-306' },
        { value: '枪会山', address: '上海市普陀区棕榈路' },
        { value: '纵食', address: '元丰天山花园(东门) 双流路267号' },
        { value: '钱记', address: '上海市长宁区天山西路' },
        { value: '壹杯加', address: '上海市长宁区通协路' },
        { value: '唦哇嘀咖', address: '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元' },
        { value: '爱茜茜里(西郊百联)', address: '长宁区仙霞西路88号1305室' },
        { value: '爱茜茜里(近铁广场)', address: '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺' },
        { value: '鲜果榨汁（金沙江路和美广店）', address: '普陀区金沙江路2239号金沙和美广场B1-10-6' },
        { value: '开心丽果（缤谷店）', address: '上海市长宁区威宁路天山路341号' },
        { value: '超级鸡车（丰庄路店）', address: '上海市嘉定区丰庄路240号' },
        { value: '妙生活果园（北新泾店）', address: '长宁区新渔路144号' },
        { value: '香宜度麻辣香锅', address: '长宁区淞虹路148号' },
        { value: '凡仔汉堡（老真北路店）', address: '上海市普陀区老真北路160号' },
        { value: '港式小铺', address: '上海市长宁区金钟路968号15楼15-105室' },
        { value: '蜀香源麻辣香锅（剑河路店）', address: '剑河路443-1' },
        { value: '北京饺子馆', address: '长宁区北新泾街道天山西路490-1号' },
        { value: '饭典*新简餐（凌空SOHO店）', address: '上海市长宁区金钟路968号9号楼地下一层9-83室' },
        { value: '焦耳·川式快餐（金钟路店）', address: '上海市金钟路633号地下一层甲部' },
        { value: '动力鸡车', address: '长宁区仙霞西路299弄3号101B' },
        { value: '浏阳蒸菜', address: '天山西路430号' },
        { value: '四海游龙（天山西路店）', address: '上海市长宁区天山西路' },
        { value: '樱花食堂（凌空店）', address: '上海市长宁区金钟路968号15楼15-105室' },
        { value: '壹分米客家传统调制米粉(天山店)', address: '天山西路428号' },
        { value: '福荣祥烧腊（平溪路店）', address: '上海市长宁区协和路福泉路255弄57-73号' },
        { value: '速记黄焖鸡米饭', address: '上海市长宁区北新泾街道金钟路180号1层01号摊位' },
        { value: '红辣椒麻辣烫', address: '上海市长宁区天山西路492号' },
        { value: '(小杨生煎)西郊百联餐厅', address: '长宁区仙霞西路88号百联2楼' },
        { value: '阳阳麻辣烫', address: '天山西路389号' },
        { value: '南拳妈妈龙虾盖浇饭', address: '普陀区金沙江路1699号鑫乐惠美食广场A13' },
      ]
    },
    handleSelect(item) {
      console.log(item)
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


  },
}
</script>

<style lang="scss" scoped>
  @import '../../common/main.scss';

  .header{
    width:100%;
    color:#333;
    >ul{
      padding:0 12%;
      // margin:0 auto;
      display:flex;
      justify-content: flex-end;
      align-items: center;
      height:30px;
      font-family: Rubik;
      color:#333;
      font-size:12px;
      border-bottom:2px solid rgba(0,0,0,0.1);
      li{
        list-style: none;
        margin-left:44px;
      }
    }
    header{
      padding:10px 12%;
      display: flex;
      justify-content: space-between;
      span{
        display:inline-clock;

      }
      .logo{
        // height:60px;
        // line-height:60px;
        display:flex;
        justify-content: flex-start;
        align-items: center;
        img{
          width:100px;
        }
        span{
          font-weight:bold;
          font-size:16px;
          margin-left:57px;
        }
      }
      .account{
        line-height:40px;
        span,a{
          font-family:Rubik;
          font-weight:bolder;
          font-size:12px;
        }
      }
    }
    .search.isFixed{
      position:fixed;
      background-color:#f1f1f1;
      top:-26px;
      z-index:999;
      padding-bottom:16px;
      transition:all .4s;
    }
    .search{
      width:100%;
      padding:0 12%;
      box-sizing: border-box;
      background-color:#f5f5f5;
      box-shadow: 0 12px 33px 0 rgba(0, 0, 0, 0.11);
      padding-bottom:60px;
      p{
        font-family: Montserrat;
        font-size: 40px;
        font-weight: bold;
        padding:40px 0;
      }
      .search-bar,.popular-search{
        .title{
          @include font(12px,bold,#888,MerriweatherSans);
          opacity:0.5;
        }
      }

      .search-bar{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .title{
          padding:10px 0;
        }
        >div{
          margin-right:15px;
        }
        .location{
          min-width:260px;
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
          .el-input__suffix{
            left:20px;
            right:auto;
            .el-input__icon{
              font-weight:bold;
              font-size:18px;
            }
          }
        }
        // search button
        button,input{
          padding:22px 0 ;
          border-radius: 5px;
          border:none;
          -webkit-appearance: none;
          outline: none;
        }

        input{
          @include font(14px,bold,#333,MerriweatherSans);
          height:28px;
        }
        .el-input__inner{
          height:auto;
          line-height:initial;
          font-size:20px;
          height:72px;
          padding-left:52px;
          font-weight:bolder;
          border:none;
          .el-range-separator{
            line-height:64px;
          }
          input{
            padding:22px 0;
          }

        }
        // check in & out date
        .check{
          .el-input__inner{
            padding-left:20px;
          }
          .el-input__icon{
            color:#333;
            font-weight:bolder;
            font-size:18px;
          }
          .el-date-editor .el-range__close-icon{
            display:none;
          }
          .el-date-editor--daterange.el-input__inner{
            width:280px;
          }
        }

        // guest number
        .guests{
          .guest-num{
            min-width:114px;
            height:36px;
            background-color:#fff;
            border-radius:5px;
            padding:18px 18px 18px 46px;
            @include font(14px,bold,#333,MerriweatherSans);
          }
        }
        // search button
        button{
          width:20%;
          min-width:120px;
          max-width:160px;
          background-color: #cba052;
          @include font(20px,bold,#fff,MerriweatherSans);
        }
      }


      .popular-search{
        @include font(14px,bold,#333,MerriweatherSans);
        margin-top:40px;
        .popular-city{
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          li{
            margin-right:40px;
            padding:12px 0;
            cursor: pointer;
          }
        }
      }
    }

    .notHomepage{
      padding:10px 12%;
      >p,.title,.popular-search{
        display:none;
      }
    }
    .notHomepage.isFixed{
      top:0;
    }
  }


</style>
