<template>
  <HomeLayout is-slot="true">
    <div class="h-container account-header">
      <el-row class="account-header-title">
        <span class="myAccount">{{$t('My Account')}}</span>
      </el-row>
      <el-row class="account-header-tab">
        <span :class="{ active: activeTab===1 }" @click="changeTab(1)">{{$t('My Dashboard')}}</span>
        <span :class="{ active: activeTab===2 }" @click="changeTab(2)">{{$t('My Bookings')}}</span>
        <span :class="{ active: activeTab===3 }" @click="changeTab(3)">{{$t('Preferences')}}</span>
      </el-row>
    </div>
    <el-container class="h-container">
      <el-main>
        <el-col :span="24"><router-view></router-view></el-col>
      </el-main>
    </el-container>
  </HomeLayout>
</template>

<script>
import HomeLayout from '../layout/Layout.vue'

export default {
  name: 'AccountLayout',
  components: {
    HomeLayout,
  },
  data() {
    let defaultTab = 1
    if (this.$route.matched.length >= 2) {
      switch (this.$route.matched[1].name) {
        case 'dashboard':
          defaultTab = 1
          break
        case 'bookingDetail':
        case 'bookings':
          defaultTab = 2
          break
        case 'preferences':
          defaultTab = 3
          break
        default:
          defaultTab = 1
      }
    }
    return {
      activeTab: defaultTab,
      urls: {
        1: '/account/dashboard',
        2: '/account/bookings',
        3: '/account/preferences',
      },
    }
  },
  methods: {
    changeTab(num) {
      this.activeTab = num
      this.$router.push({ path: this.urls[num] })
    },
  },
}
</script>

<style lang='scss'>
  @import '../../common/common';
  @import '../../common/main';
  .account-header{
    background: $white1 !important;
    border-bottom: 1px solid $gray1;
    .el-header{
      padding: 0!important;
    }
    .account-header-title{
      padding: 33.5px 0;
      .myAccount{
        font-size: 26px;
        color: $black4;
      }
    }
    .account-header-tab{
      padding: 25.5px 0;
      span{
        padding: 25.5px 34px 20.5px;
        font-size: 16px;
        color: $black4;
        cursor: pointer;
        margin-bottom: 5px;
        &.active{
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          color: $blue4;
          font-weight: bold;
          border-bottom: 5px solid $blue4;
        }
      }
    }
  }

  .booking-info-header{
    padding: 22px;
    display: flex;
    justify-content: space-between;
    .booking-info-header-left{
      flex-grow: 1;
      .checkInOut{
        font-size: 20px;
        font-weight: bold;
      }
      .nights{
        color:$black4;
        font-size: 20px;
        font-weight: bold;
        margin-left: 44px;
      }
    }
    .booking-info-header-right{
      padding: 0 33.5px;
      .reference{
        font-size: 12px;
        color:$black4;
      }
      .num{
        font-size: 14px;
        color:$black6;
        margin-left: 7px;
      }
    }
  }
  .booking-item{
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.09);
    background-color: $white1;
    margin-bottom: 20px;
    .el-header{
      background: $black7;
    }
    .el-main{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &>img{
        width: 165px;
        height: 165px;
        border-radius: 5px;
        flex-shrink: 0;
      }
      .book-info{
        display: flex;
        flex-direction: column;
        flex-grow: 2;
        padding-left: 25px;
        .hotel{
          .name{
            font-size: 20px;
            font-weight: bold;
            color: $black5;
          }
          .el-rate__icon{
            font-size: 11px;
            margin-right: 0;
          }
          .address{
            font-size: 11px;
            color: $black5;
          }
        }
        .info{
          padding: 15px 0;
          font-size: 14px;
          color: $black6;
        }
        .cancel{
          padding: 5px 0;
          .el-icon-success{
            margin-right: 7px;
            &.check{
              color: $green4;
            }
          }
        }
      }
      .act-menu{
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 25px;
        .el-button{
          flex-shrink: 0;
          border-radius: 5px;
          background-color: $blue4;
          font-size: 14px;
          font-weight: bold;
          color: $white1;
        }
        .cancelled{
          padding: 15px 0;
          text-align: center;
          font-size: 14px;
          color: $red1;
        }
      }
    }
  }
</style>
