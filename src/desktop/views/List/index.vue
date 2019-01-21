<template>
  <div class="list-page-wrapper">
    <Header />
    <div class="list-page-inner-wrapper">
      <div class="inner-container clearfix">
        <el-breadcrumb
          separator-class="el-icon-arrow-right"
          class="breadcrumb-location"
        >
          <el-breadcrumb-item
            v-for="(item,index) in locations"
            :key="index"
          >
            {{ item }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="location clearfix">
          <div class="city">
            {{ locations[locations.length-1] }}
          </div>
          <div class="label">
            <strong>{{ result.length }} hotels</strong> are available in {{ search.city }},{{ search.country }}
          </div>
        </div>
        <!-- list page -->
        <div class="list-page clearfix">
          <div class="control">
            <div class="view-on-map" />
            <!-- filter -->
            <div class="filters">
              <div class="by-name">
                <h4 class="filter-title">
                  Hotel name
                </h4>
                <el-input
                  v-model="filters.searchName"
                  placeholder="请输入内容"
                  clearable
                  debounce="400"
                />
              </div>
              <div class="by-star">
                <h4 class="filter-title">
                  Star rating
                </h4>
                <star-rating
                  name="stars"
                  :list="starsArr"
                  @checking="reCheck"
                />
              </div>
              <div class="by-price">
                <h4 class="filter-title">
                  Room Price (per night)
                </h4>
                <price-slider
                  :min="0"
                  :max="9897"
                  name="price"
                  @priceRangeChange="reCheck"
                />
              </div>
              <div class="by-rating">
                <h4 class="filter-title">
                  Rating
                </h4>
                <check-list
                  :list="ratingList"
                  name="rating"
                  @checking="reCheck"
                />
              </div>
              <div class="by-Amenities">
                <h4 class="filter-title">
                  Amenities
                </h4>
                <check-list
                  :list="amenities"
                  name="amenIds"
                  @checking="reCheck"
                />
              </div>
              <div class="by-Cancellation">
                <h4 class="filter-title">
                  Cancellation
                </h4>
                <p>
                  <el-checkbox v-model="filters.isFreeCancel">
                    Free Cancellation
                  </el-checkbox>
                </p>
              </div>
            </div>
          </div>
          <div class="list">
            <!-- loading -->
            <div
              v-if="isLoading"
              class="loading-box"
            >
              <loading />
              <handy-ad />
            </div>
            <!-- list -->
            <div
              class="result-list"
            >
              <console
                :fetching="isFetching"
                :params="fetchParams"
                @listResponse="receive"
              />
              <!-- zero page -->
              <div
                v-if="result.length===0"
                class="zero-page"
              >
                <div class="zero-tip clearfix">
                  <i class="fas fa-exclamation-circle tip-icon" />
                  <div class="tip-label">
                    <p class="tip1">
                      There are no results for your search.
                    </p>
                    <p class="tip2">
                      Please look at the recommendations provided below.
                    </p>
                  </div>
                </div>
                <near-by :list="nearby" />
                <handy-ad />
              </div>
              <!-- result - page -->
              <div class="result-page">
                <sort-bar @sortList="sortHandler" />

                <ul>
                  <list-item
                    v-for="(item,index) in rList"
                    :key="index"
                    :data="item"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../includes/header.vue'
import Footer from '../includes/footer.vue'
import StarRating from './StarRating.vue'
import PriceSlider from './PriceSlider.vue'
import CheckList from './CheckList.vue'
import Loading from './Loading.vue'
import SortBar from './SortBar.vue'
import NearBy from './NearBy.vue'
import HandyAd from './HandyAd.vue'
import Console from './Console.vue'
import ListItem from './ListItem.vue'


const ratingList = [
  {
    name: 'rate9', text: 'Super: 9+', checked: false, id: 9,
  },
  {
    name: 'rate8', text: 'Very good: 8+', checked: false, id: 8,
  },
  {
    name: 'rate7', text: 'Good: 7+', checked: false, id: 7,
  },
  {
    name: 'rate6', text: 'Pleasant: 6+', checked: false, id: 6,
  },
]
const amenities = [
  {
    name: 'WiFi', text: 'Free WiFi', checked: false, id: 1,
  },
  {
    name: 'Pet', text: 'Pet Friendly', checked: false, id: 2,
  },
  {
    name: 'Swimming', text: 'Swimming Pool', checked: false, id: 3,
  },
  {
    name: 'Fitness', text: 'Fitness Available', checked: false, id: 4,
  },
]
const starsArr = [5.0, 4.0, 3.0, 2.0, 1.0]
export default {
  components: {
    Header,
    Footer,
    StarRating,
    PriceSlider,
    CheckList,
    Loading,
    SortBar,
    NearBy,
    HandyAd,
    Console,
    ListItem,
  },
  data() {
    return {
      //  stars, searchName, price, rating, amenIds, isFreeCancel, pageCount, pageSize, sortId,
      filters: {
        searchName: '',
        stars: [],
        price: [],
        rating: [],
        amenIds: [],
        isFreeCancel: false,
      },
      sortId: 0,
      page: {
        count: 1,
        size: 10,
        total: 1,
      },
      isLoading: false,
      search: {
        city: 'London',
        country: 'United Kingdom',
      },
      result: [],
      nearby: [],
      isFetching: false,
      fetchParams: null,
    }
  },
  computed: {
    locations() {
      return ['Europe', 'United Kingdom', 'London']
    },
    // optional setting params
    ratingList() {
      return ratingList
    },
    amenities() {
      return amenities
    },
    starsArr() {
      return starsArr
    },
    // for render
    rList() {
      return this.result
    },
  },
  watch: {
    // fetching params
    filters: {
      handler(val, oldVal) {
        //
      },
      deep: true,
    },
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  mounted() {
  },
  methods: {
    fetchData(c) {
      this.isLoading = true
      const params = {
        ...JSON.parse(JSON.stringify(this.filters)), sortId: this.sortId, pageCount: c || this.page.count, pageSize: this.page.size,
      }
      this.fetchParams = params
      this.isFetching = false
      const that = this
      setTimeout(() => {
        that.isFetching = true
      }, 1000)
      setTimeout(() => {
        that.isFetching = false
      }, 1000)
    },
    reCheck(n, v) {
      this.filters[n] = v
    },
    sortHandler(id) {
      this.sortId = id
    },
    receive(list) {
      console.log('receive:')
      this.result = list
      this.isLoading = false
    },
  },
}
</script>

<style lang='scss'>
@import '../../../common/style/main';
.list-page-inner-wrapper {
  width: 100%;
  background-color: #fafafa;
  .inner-container {
    border-top: 1px solid transparent;
    width: 1088px;
    margin: 0 auto;

    .breadcrumb-location {
      margin: 40px 0;
      font-size: 11px;
      line-height: 16px;
      font-family: SFUIText;
    }
    .location {
      width: 100%;
      color: #333333;
      height: 50px;
      line-height: 50px;
      margin-bottom: 25px;
      .city {
        float: left;
        font-size: 40px;
      }
      .label {
        float: right;
        font-size: 14px;
      }
    }
    .list-page {
      float: left;
      padding-top: 22px;
      border-top: 1px solid rgba(69, 116, 235, 0.1);
      // opacity: .1;
      width: 100%;
      margin: 0 auto;
      .control {
        float: left;
        width: 190px;
        .view-on-map {
          width: 100%;
          height: 115px;
          background: #bbb;
          margin-bottom: 38px;
        }
        .filters {
          margin-bottom: 110px;
          color: #333333;
          .filter-title {
            font-size: 14px;
            line-height: 24px;
            height: 24px;
            margin-bottom: 15px;
            font-weight: bold;
            font-family: MerriweatherSans;
          }
        }
      }
      .list {
        width: 812px;
        float: right;
        .loading-box {
        }
        .result-list {
          .zero-tip {
            width: 812px;
            height: 47px;
            line-height: 47px;
            margin-bottom: 45px;
            border-radius: 4px;
            padding: 17px 0;

            background-color: #fff4ed;
            position: relative;
            .tip-icon {
              position: absolute;
              top: 50%;
              display: inline-block;
              transform: translateY(-50%);
              margin-left: 20px;
              margin-right: 13px;
              color: #ff4141ed;
              font-size: 26px;
            }
            .tip-label {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              padding-left: 60px;
              font-size: 14px;
              line-height: 20px;
              color: #505050;
              .tip1 {
                font-weight: bold;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
}
</style>
