<template>
  <div>
    <el-row>
      <el-col :span="8" class="dashboard-user">
        <div class="user-info">
          <div class="avatar" :style="{backgroundImage: `url('${userInfo.avatar}')`}"></div>
          <div class="detail">
            <span class="name">{{userInfo.firstName}}&nbsp;{{userInfo.lastName}}</span>
            <span class="memType gold">
              <i class="el-icon-third-stars"></i> {{$t('Gold Member')}}
            </span>
            <span class="editBtn">
              <i class="el-icon-third-cog"></i> {{$t('Edit Profile')}}
            </span>
          </div>
        </div>
        <div class="points">
          <p>{{userInfo.points}} {{$t('pts.')}}</p>
          <span class="tip">{{$t('Total Usable Points')}}</span>
        </div>
        <div class="whatThis">{{$t('What is this?')}}</div>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-container class="dashboard-block">
            <el-header height="25" class="dashboard-header">
              {{$t('Upcoming bookings')}}
            </el-header>
            <el-main>
              <div class="notContent" v-if="upcoming.length === 0">
                <p class="line1">
                  {{$t('You don’t have any bookings yet!')}}
                </p>
                <p class="line2">
                  {{$t('Explore our destinations to browse details' +
                  ' and start your new adventures.')}}
                </p>
              </div>
              <div class="booking-container" v-if="upcoming.length > 0">
                <listItem v-for="item in upcoming"
                          :key="item.referenceNo"
                          :booking-info="item"
                          active-tab="upcoming"/>
              </div>
            </el-main>
          </el-container>
          <el-container class="dashboard-block">
            <el-header height="25" class="dashboard-header">
              {{$t('Your points breakdown')}}
            </el-header>
            <el-main>
              <div class="notContent" v-if="pointsBreakdown.length === 0">
                <p class="line1">
                  {{$t('You don’t have any accumulated points.')}}
                </p>
                <p class="line2">
                  {{$t('Book a hotel stay or experiences on hi.com' +
                  ' to earn more points and receive great discounts!')}}
                </p>
              </div>
              <div class="point-container">
                <div class="confirm-points" v-if="confirmPoints.length > 0">
                  <div class="points-header">{{$t('Confirmed')}}</div>
                  <div class="points-content" v-for="item in confirmPoints.list"
                       :key="item.referenceNo">
                    <pts :pt="item" state="confirm"/>
                  </div>
                </div>
                <div class="points-show-more"
                     v-if="confirmPoints.length > 3">
                  <div @click="toogelConfirmShowMore">
                    <span v-if="!confirmPtsShowMore">{{$t('Show more')}}</span>
                    <span v-if="confirmPtsShowMore">{{$t('Hide')}}</span>
                    <i :class="{
                  'el-icon-arrow-down': !confirmPtsShowMore,
                  'el-icon-arrow-up': confirmPtsShowMore}">
                    </i>
                  </div>
                </div>
                <div class="pending-points" v-if="pendingPoints.length > 0">
                  <div class="points-header">{{$t('Pending')}}</div>
                  <div class="points-content" v-for="item in pendingPoints.list"
                       :key="item.referenceNo">
                    <pts :pt="item" state="pending"/>
                  </div>
                </div>
                <div class="points-show-more"
                     v-if="pendingPoints.length > 3">
                  <div @click="toogelpendingShowMore">
                    <span v-if="!pendingPtsSHowMore">{{$t('Show more')}}</span>
                    <span v-if="pendingPtsSHowMore">{{$t('Hide')}}</span>
                    <i :class="{
                  'el-icon-arrow-down': !pendingPtsSHowMore,
                  'el-icon-arrow-up': pendingPtsSHowMore}">
                    </i>
                  </div>
                </div>
              </div>
            </el-main>
          </el-container>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import listItem from './component_listItem.vue'
import pts from './component_pts.vue'

export default {
  name: 'DashBoard',
  components: {
    listItem,
    pts,
  },
  data() {
    // const condition1 = {
    //   userInfo: {
    //     firstName: 'John',
    //     lastName: 'Smith',
    //     points: 0,
    //     memberType: 1,
    //     avatar: 'https://source.unsplash.com/120x120/?book,library',
    //   },
    //   upcoming: [],
    //   pointsBreakdown: [],
    // }
    const condition2 = {
      userInfo: {
        firstName: 'John',
        lastName: 'Smith',
        points: 0,
        memberType: 1,
        avatar: 'https://source.unsplash.com/120x120/?book,library',
      },
      upcoming: [
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
      pointsBreakdown: [
        {
          from: '2018-7-26',
          to: '2018-7-28',
          nights: 2,
          referenceNo: '123211435460',
          hotel_name: 'Hotel ICON, Hong Kong',
          type: 1,
          points: 500,
        },
        {
          from: '2018-9-26',
          to: '2018-9-28',
          nights: 2,
          referenceNo: '123211435461',
          hotel_name: 'The Grand Hyatt, Shenzhen',
          type: 1,
          points: 500,
        },
        {
          from: '2018-10-26',
          to: '2018-10-28',
          nights: 2,
          referenceNo: '123211435462',
          hotel_name: 'Mandarin Oriental, Hong Kong ',
          type: 1,
          points: 500,
        },
        {
          from: '2018-11-26',
          to: '2018-11-28',
          nights: 2,
          referenceNo: '123211435463',
          hotel_name: 'The Grand Hyatt, Shenzhen',
          type: 1,
          points: 500,
        },
        {
          from: '2018-12-26',
          to: '2018-12-28',
          nights: 2,
          referenceNo: '123211435464',
          hotel_name: 'Mandarin Oriental, Hong Kong ',
          type: 0,
          points: 500,
        },
        {
          from: '2018-12-29',
          to: '2018-12-30',
          nights: 2,
          referenceNo: '123211435465',
          hotel_name: 'Hotel ICON, Hong Kong',
          type: 0,
          points: 500,
        },
        {
          from: '2019-01-01',
          to: '2019-01-03',
          nights: 2,
          referenceNo: '123211435466',
          hotel_name: 'The Grand Hyatt, Shenzhen',
          type: 0,
          points: 500,
        },
        {
          from: '2019-01-01',
          to: '2019-01-03',
          nights: 2,
          referenceNo: '123211435466',
          hotel_name: 'The Grand Hyatt, Shenzhen',
          type: 0,
          points: 500,
        },
      ],
    }
    return {
      ...condition2,
      confirmPtsShowMore: false,
      pendingPtsSHowMore: false,
    }
  },
  computed: {
    confirmPoints() {
      const result = []
      let length = 0
      this.pointsBreakdown.forEach((item) => {
        if (item.type === 1) {
          result.push(item)
          length += 1
        }
      })
      return {
        list: this.confirmPtsShowMore ? result : result.splice(0, 3),
        length,
      }
    },
    pendingPoints() {
      const result = []
      let length = 0
      this.pointsBreakdown.forEach((item) => {
        if (item.type === 0) {
          result.push(item)
          length += 1
        }
      })
      return {
        list: this.pendingPtsSHowMore ? result : result.splice(0, 3),
        length,
      }
    },
  },
  methods: {
    toogelConfirmShowMore() {
      console.log('bbb')
      this.confirmPtsShowMore = !this.confirmPtsShowMore
    },
    toogelpendingShowMore() {
      console.log('aaa')
      this.pendingPtsSHowMore = !this.pendingPtsSHowMore
    },
  },
}
</script>

<style scoped lang='scss'>
  @import '../../../common/style/common';
  @import '../../../common/style/main';
  .user-info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 22px;
    .avatar{
      display: block;
      width: 110px;
      height: 110px;
      background-size: cover;
      border-radius: 55px;
      overflow: hidden;
    }
    .detail{
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      margin-left: 16px;
      padding: 6px 0;
      .name{
        font-size: 20px;
        font-weight: bold;
        color: $black5;
        margin-bottom: 5px;
      }
      .memType{
        font-size: 12px;
        font-weight: bold;
        line-height: 18px;
        margin-bottom: 5px;
        &.gold{
          color: $gold;
        }
        i{
          font-size: 18px;
        }
      }
      .editBtn{
        font-size: 12px;
        font-weight: bold;
        line-height: 18px;
        color: $black4;
        i{
          font-size: 18px;
        }
      }
    }
  }
  .points{
    font-size: 26px;
    font-weight: 600;
    color: $gold;
    .tip{
      font-size: 14px;
      font-weight: bold;
      color: $black4;
    }
  }
  .whatThis{
    font-size: 12px;
    color: $blue4;
    text-decoration: underline;
    cursor: pointer;
  }
  .dashboard-header{
    font-size: 20px;
    font-weight: bold;
    color: $black5;
  }
  .dashboard-user{
    padding-top: 60px;
  }
  .dashboard-block{
    margin-top: 30px;
    &:first-child{
      margin-top: 60px;
    }
  }
  .notContent{
    padding-bottom: 64px;
    border-bottom: 1px solid $black3;
    .line1{
      font-size: 20px;
      font-weight: bold;
      color: $black4;
    }
    .line2{
      margin-top: 4px;
      font-size: 14px;
      font-weight: normal;
      color: $black4;
    }
  }
  .point-container{
    .confirm-points{
      .points-header{
        font-size: 16px;
        font-weight: bold;
        color: $green4;
        padding-bottom: 15px;
        strong{
          color: $green;
        }
      }
    }
    .pending-points{
      margin-top: 58px;
      .points-header{
        font-size: 16px;
        font-weight: bold;
        color: $purple;
        padding-bottom: 15px;
      }
    }
    .points-content{
      padding: 25px 0;
      border-bottom: 1px solid $black3;
      &:last-child{
        border-bottom: none;
      }
    }
  }
  .points-show-more{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 0;
    &>div{
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      &>span{
        font-size: 12px;
        font-weight: bold;
        color: $black4;
      }
      &>i{
        font-size: 16px;
        color: $black4;
      }
    }
  }
</style>
