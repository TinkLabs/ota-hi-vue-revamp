<template>
  <el-container class="booking-item">
    <el-header height="64px" class="booking-info-header">
      <div class="booking-info-header-left">
          <span class="checkInOut">
            {{fromTo}}
          </span>
        <span class="nights">
            {{bookingInfo.nights}} {{$t('Nights')}}
          </span>
      </div>
      <div class="booking-info-header-right">
        <span class="reference">{{$t('Reference No.')}}</span>
        <span class="num">{{bookingInfo.referenceNo}}</span>
      </div>
    </el-header>
    <el-main>
      <img :src="bookingInfo.hotel.image">
      <div class="book-info">
        <div class="hotel">
              <span class="name">
                <router-link :to="`/account/booking/${bookingInfo.referenceNo}`">
                  {{bookingInfo.hotel.name}}
                </router-link>
              </span>
          <el-rate
              v-model="bookingInfo.hotel.starRating"
              disabled
              show-score
              text-color="#ff9900"
              score-template="">
          </el-rate>
          <span class="address">{{bookingInfo.hotel.address}}</span>
        </div>
        <div class="info">
          <span>{{bookingInfo.rooms}} {{$t('rooms')}}, </span>
          <span v-if="bookingInfo.adults">
                {{bookingInfo.adults}} {{$t('adults')}}{{bookingInfo.children ? ', ' : ''}}
              </span>
          <span v-if="bookingInfo.children">{{bookingInfo.children}} {{$t('children')}}</span>
        </div>
        <div class="cancel">
          <i class="el-icon-success"
             :class="['el-icon-success', { 'check': bookingInfo.hotel.isFreeCancellation }]"></i>
          {{$t('Free cancellation')}}
        </div>
      </div>
      <div class="act-menu">
        <el-button v-if="activeTab==='upcoming'">{{$t('Edit Booking')}}</el-button>
        <span v-if="activeTab==='cancelled'" class="cancelled">{{$t('Cancelled')}}</span>
        <el-button
            v-if="activeTab==='completed' || activeTab==='cancelled'">
          {{$t('Book Again')}}
        </el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'component_listItem',
  props: ['bookingInfo', 'activeTab'],
  computed: {
    fromTo() {
      let fromTo = '';
      const months = [this.$t('January'), this.$t('February'), this.$t('March'), this.$t('April'),
        this.$t('May'), this.$t('June'), this.$t('July'), this.$t('August'),
        this.$t('September'), this.$t('October'), this.$t('November'), this.$t('December')]
      const checkIn = new Date(this.bookingInfo.from)
      const checkOut = new Date(this.bookingInfo.to)
      const checkInYear = checkIn.getFullYear()
      const checkOutYear = checkOut.getFullYear()
      const checkInMonth = months[checkIn.getMonth()]
      const checkOutMonth = months[checkOut.getMonth()]
      const checkInDay = checkIn.getDate()
      const checkOutDay = checkOut.getDate()
      fromTo = `${checkInDay}`
      if (checkInMonth !== checkOutMonth || checkInYear !== checkOutYear) fromTo += ` ${checkInMonth}`
      if (checkInYear !== checkOutYear) fromTo += ` ${checkInYear}`
      fromTo += ` - ${checkOutDay} ${checkOutMonth} ${checkOutYear}`
      return fromTo;
    },
  },
}
</script>

<style scoped>

</style>