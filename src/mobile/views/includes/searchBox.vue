<template>
  <div class="searchbox-container">
    <Header
      :isback="true"
      @hideSearchBox="hideSearchBox"
    >
      Say hi to your next destination!
    </Header>
    <div class="search-bar wrapper-padding">
      <div class="location-input">
        <input
          ref="keyword"
          v-model="keyword"
          type="text"
          placeholder="Anywhere"
          @input="startInput"
        >
        <i class="el-icon-third-search" />
      </div>
    </div>

    <!-- suggestion list -->
    <div
      class="location-list wrapper-padding"
    >
      <!-- Search history -->
      <div v-show="!isType">
        <h2 class="title">
          Search history
        </h2>
        <ul class="search-history">
          <li
            v-for="(item,index) in searchHistory"
            :key="index"
            @click="selectLocation($event,index)"
          >
            <i class="el-icon-third-world2" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <!-- Recommended for you -->
      <div v-show="!isType">
        <h2 class="title">
          Recommended for you
        </h2>
        <ul class="recommend">
          <li
            v-for="(item,index) in recommend"
            :key="index"
            @click="selectRecommend($event,index)"
          >
            <i class="el-icon-third-world2" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <!--  Select your destination-->
      <div
        v-show="isType"
        class="suggestion-list"
      >
        <h2 class="title">
          Select your destination
        </h2>
        <ul class="recommend">
          <li
            v-for="(item,index) in suggestionList"
            :key="index"
            @click="selectSuggestion($event,index)"
          >
            <i :class="item.icon" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header.vue'

export default {
  name: 'Searchbox',
  components: {
    Header,
  },
  data() {
    return {
      isType: false,
      keyword: '',
      searchHistory: [
        'Bangkok, Thailand',
        'Hong Kong, China',
        'Sheraton Grande Walkerhill Casino,Seoul',
      ],
      recommend: [
        'London, United Kingdom',
        'Berlin, Germany',
        'Barcelona, Spain',
        'Bangkok, Thailand',
        'Hong Kong, China',
        'Sheraton Grande Walkerhill Casino,Seoul',
      ],
      suggestionList: [
        {
          icon: 'el-icon-third-bed',
          name: 'London, Marriott Hotel Regents Park, England, UK',
          type: 'hotel',
        },
        {
          icon: 'el-icon-third-bed',
          name: 'London, Fleming Mayfair, Small Luxury Hotels of the World',
          type: 'hotel',
        },
        {
          icon: 'el-icon-third-bed',
          name: 'London Hotel, Glyfada, Greece',
          type: 'hotel',
        },
        {
          icon: 'el-icon-third-dizhi1',
          name: 'London, Ontario, Canada',
          type: 'location',
        },
        {
          icon: 'el-icon-third-dizhi1',
          name: 'London City Centre',
          type: 'location',
        },
        {
          icon: 'el-icon-third-localairport',
          name: 'London City Centre',
          type: 'airport',
        },
      ],
    }
  },
  mounted() {
  },
  methods: {
    startInput() {
      if (!this.$refs.keyword.value) {
        this.isType = false
      } else {
        this.isType = true
      }
    },
    hideSearchBox() {
      this.$emit('hideSearchBox', this.keyword, 1)
    },
    selectLocation(event, index) {
      this.keyword = this.searchHistory[index]
      this.hideSearchBox()
    },
    selectRecommend(event, index) {
      this.keyword = this.recommend[index]
      this.hideSearchBox()
    },
    selectSuggestion(event, index) {
      this.keyword = this.suggestionList[index].name
      this.hideSearchBox()
    },
  },
}
</script>

<style lang='scss'>
  @import '../../../common/style/mobile_main.scss';
  .searchbox-container{
    width:100%;
    height:1600px;
    position: absolute;
    top:0;
    left:0;
    z-index:2;
    background-color:#fff;
    .search-bar{
      border-bottom:1px solid #e7e7e7;
      padding-bottom:46px;
    }
    .search-bar,.location-list{
      >div{
        h2.title{
          color:$gold;
          @include font(34px, bold, $gold, Montserrat);
          margin-top:30px;
        }
        ul{
          li{
            @include font(30px, bold, #333333, MerriweatherSans);
            padding:40px 0 40px 70px;
            border-bottom:1px solid rgba(80, 80, 80,0.1);
            position: relative;
            &:last-child{
              border:none;
            }
            i{
              color:#333;
              position: absolute;
              left:0;
              top:50%;
              transform: translate(0,-50%);
              font-size:36px;
            }
          }
        }

      }

    }

  }
</style>
