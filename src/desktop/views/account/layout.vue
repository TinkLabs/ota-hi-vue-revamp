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
import HomeLayout from '../layout/Layout'

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

<style scoped lang='scss'>
  @import '../../common/common';
  @import '../../common/main';
  .account-header{
    background: $white1;
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
</style>
