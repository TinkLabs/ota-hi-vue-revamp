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
                  {{$t('Explore our destinations to browse details and start your new adventures.')}}
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
                  {{$t('Book a hotel stay or experiences on hi.com to earn more points and receive great discounts!')}}
                </p>
              </div>
            </el-main>
          </el-container>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import listItem from './component_listItem'
export default {
  name: 'DashBoard',
  components: {
    listItem,
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
      pointsBreakdown: [],
    }
    return condition2
  },
}
</script>

<style scoped lang='scss'>
  @import '../../common/common';
  @import '../../common/main.scss';
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
</style>
