<template>
  <div>
    <div class="bookings-header">
      <span class="title">{{titles[activeTab]}}</span>
      <div class="tabs">
        <span :class="{ active: activeTab==='upcoming' }"
              @click="changeTab('upcoming')">{{$t("Upcoming")}}</span>
        <span :class="{ active: activeTab==='completed' }"
              @click="changeTab('completed')">{{$t("Completed")}}</span>
        <span :class="{ active: activeTab==='cancelled' }"
              @click="changeTab('cancelled')">{{$t("Cancelled")}}</span>
        <el-select class="account-booking-sorter" v-model="value" :placeholder="$t('Sort by')">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="booking-container">
      <listItem v-for="item in list"
                :key="item.referenceNo"
                :booking-info="item"
                :active-tab="activeTab"/>
    </div>
  </div>
</template>

<script>
import listItem from './component_listItem'

export default {
  name: 'bookings',
  components: {
    listItem,
  },
  data() {
    const titles = {
      upcoming: this.$t('Upcoming Booking'),
      completed: this.$t('Completed Booking'),
      cancelled: this.$t('Cancelled Booking'),
    }
    let defaultTab = 'upcoming'
    if (this.$route.query.tab) {
      defaultTab = this.$route.query.tab
    }
    return {
      activeTab: defaultTab,
      titles,
      options: [{
        value: '选项1',
        label: '黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶',
      }, {
        value: '选项3',
        label: '蚵仔煎',
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
      }],
      value: '',
      list: [
        {
          from: '2018-10-14',
          to: '2018-10-14',
          nights: 2,
          referenceNo: '123211435457',
          rooms: 2,
          adults: 4,
          children: 0,
          hotel: {
            name: 'Plaza on the River',
            starRating: 4.5,
            address: 'City of London, London',
            isFreeCancellation: false,
            image: 'https://source.unsplash.com/300x300/?book,library',
          },
        },
        {
          from: '2018-10-02',
          to: '2018-10-04',
          nights: 2,
          rooms: 2,
          adults: 4,
          children: 0,
          referenceNo: '123211435458',
          hotel: {
            name: 'South Place Hotel',
            starRating: 4.5,
            address: 'Lambeth, London ',
            isFreeCancellation: true,
            image: 'https://source.unsplash.com/300x300/?book,library',
          },
        },
        {
          from: '2017-10-20',
          to: '2018-10-22',
          nights: 2,
          rooms: 2,
          adults: 4,
          children: 0,
          referenceNo: '123211435459',
          hotel: {
            name: 'Bulgari Hotel, London',
            starRating: 4.5,
            address: 'Westminster Borough, London',
            isFreeCancellation: true,
            image: 'https://source.unsplash.com/300x300/?book,library',
          },
        },
        {
          from: '2018-9-26',
          to: '2018-10-28',
          nights: 2,
          rooms: 2,
          adults: 4,
          children: 0,
          referenceNo: '123211435460',
          hotel: {
            name: 'W London Leicester Square',
            starRating: 4.5,
            address: 'Westminster Borough, London',
            isFreeCancellation: true,
            image: 'https://source.unsplash.com/300x300/?book,library',
          },
        },
      ],
    }
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab
      this.$router.push({ path: '/account/bookings', query: { tab } })
    },
  },
}
</script>

<style lang='scss'>
  @import '../../../common/style/common';
  @import '../../../common/style/main';
.bookings-header{
  padding: 57.5px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .title{
    padding: 7.5px 0;
    font-size: 20px;
    font-weight: bold;
    color: $black5;
  }
  .tabs{
    &>span{
      padding: 12px 22px;
      font-size: 14px;
      color: $black4;
      cursor: pointer;
      &.active{
        font-weight: bold;
        background-color: $white1;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.06);
        border-radius: 2px;
        color: $blue4;
      }
    }
    .account-booking-sorter{
      font-size: 14px;
      color: $black4;
      background-color: $white1;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.06);
      margin-left: 22px;
      .el-input__inner{
        border: none !important;
        color: $black6;
        padding: 14px 22px;
        display: block;
        font-size: 14px;
        height: auto;
        line-height: normal;
        width: auto;
        border-radius: 2px;
        &::-webkit-input-placeholder{
          color: $black6;
        }
        &::-moz-placeholder{
          color: $black6;
        }
        &:-moz-placeholder{
          color: $black6;
        }
        &:-ms-input-placeholder{
          color: $black6;
        }
      }
    }
  }
}
.booking-container{
  padding: 15.5px 0;
}
</style>
