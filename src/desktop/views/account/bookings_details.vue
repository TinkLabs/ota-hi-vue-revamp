<template>
  <div class="booking-detail">
    <el-breadcrumb separator-class="el-icon-arrow-left" class="hi-breadcrumb">
      <el-breadcrumb-item></el-breadcrumb-item>
      <el-breadcrumb-item
        class="bread"
        :to="{ path: '/account/bookings' }">{{$t('My Bookings')}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="booking-detail-header">
      <div class="hi-row">
        <span class="hi-header">{{$t('Your Booking')}}</span>
        <div class="hi-sub-header">
          <span class="reference">{{$t('Reference No.')}}</span>
          <span class="num">{{details.referenceNo}}</span>
        </div>
      </div>
    </div>
    <div class="hotel-info">
      <div class="hotel-img"
           :style="{backgroundImage: `url('${bookingsDetails.hotel.image}'), url('')`}"></div>
      <div class="hotel-detail">
        <div class="detail">
          <span class="name">{{bookingsDetails.hotel.name}}</span>
          <el-rate
            v-model="details.hotel.starRating"
            disabled
            show-score
            text-color="#ff9900"
            score-template="">
          </el-rate>
          <span class="address">{{bookingsDetails.hotel.address}}</span>
          <span class="tel">{{bookingsDetails.hotel.tel}}</span>
        </div>
        <span class="map"><i class="el-icon-location"></i> {{$t('View on map')}}</span>
      </div>
    </div>
    <el-row class="booking-detail-content">
      <el-col :span="12" class="left">
        <el-row class="hi-booking-row">
          <el-col :span="10" class="label">{{$t('Check in')}}</el-col>
          <el-col :span="14" class="info">{{$t('formatDate', bookingsDetails.checkIn)}}</el-col>
        </el-row>
        <el-row class="hi-booking-row">
          <el-col :span="10" class="label">{{$t('Check Out')}}</el-col>
          <el-col :span="14" class="info">{{$t('formatDate', bookingsDetails.checkOut)}}</el-col>
        </el-row>
        <el-row class="hi-booking-row">
          <el-col :span="10" class="label">{{$t('Your stay')}}</el-col>
          <el-col :span="14" class="info">
            {{bookingsDetails.rooms}} {{$t('rooms')}}, {{bookingsDetails.nights}} {{$t('nights')}}
          </el-col>
        </el-row>
        <el-row class="hi-booking-row center">
          <el-col :span="10" class="label">{{$t('Total amount')}}</el-col>
          <el-col :span="14" class="info">
            <el-row class="hi-booking-sub-row">
              <el-col :span="10" class="label">{{$t('Room price')}}:</el-col>
              <el-col :span="14" class="info">
                <p v-for="(item, index) in bookingsDetails.roomList" :key="index">
                  {{bookingsDetails.currency}}
                  {{item.price.total}}
                  {{item.price.period}}
                  ({{$t('Room')}} {{index+1}})
                </p>
              </el-col>
            </el-row>
            <el-row class="hi-booking-sub-row">
              <el-col :span="10" class="label">{{$t('Number of rooms')}}:</el-col>
              <el-col :span="14" class="info">
                {{bookingsDetails.rooms}}
              </el-col>
            </el-row>
            <el-row class="hi-booking-sub-row">
              <el-col :span="10" class="label">{{$t('Number of nights')}}:</el-col>
              <el-col :span="14" class="info">
                {{bookingsDetails.nights}}
              </el-col>
            </el-row>
            <el-row class="hi-booking-sub-row promo" v-if="bookingsDetails.promo">
              <el-col :span="10" class="label">{{$t('Promo code')}}:</el-col>
              <el-col :span="14" class="info">
                - {{bookingsDetails.currency}} {{bookingsDetails.promo.price}}
                ({{$t('code')}} {{bookingsDetails.promo.code}})
              </el-col>
            </el-row>
            <el-row class="hi-booking-sub-row">
              <el-col :span="10" class="label">{{$t('Room subtotal')}}:</el-col>
              <el-col :span="14" class="info">
                {{bookingsDetails.currency}} {{bookingsDetails.roomSubTotal}}
              </el-col>
            </el-row>
            <el-row class="hi-booking-sub-row">
              <el-col :span="10" class="label">{{$t('Taxes & fees')}}:</el-col>
              <el-col :span="14" class="info">
                {{bookingsDetails.currency}} {{bookingsDetails.tax}}
              </el-col>
            </el-row>
            <el-row class="hi-booking-sub-row subtotal">
              <el-col :span="10" class="label">{{$t('Subtotal')}}:</el-col>
              <el-col :span="14" class="info">
                {{bookingsDetails.currency}} {{bookingsDetails.roomSubTotal + bookingsDetails.tax}}
              </el-col>
            </el-row>
            <el-row class="hi-booking-sub-row">
              <el-col :span="10" class="label">{{$t('Hotel fee')}}:</el-col>
              <el-col :span="14" class="info">
                {{bookingsDetails.currency}} {{bookingsDetails.hotelFee}}
              </el-col>
            </el-row>
            <el-row class="hi-booking-sub-row points">
              <el-col :span="10" class="label">{{$t('Used points')}}:</el-col>
              <el-col :span="14" class="info">
                {{bookingsDetails.currency}} -{{bookingsDetails.points}}
              </el-col>
            </el-row>
            <el-row class="hi-booking-sub-row total">
              <el-col :span="10" class="label">{{$t('Total cost')}}:</el-col>
              <el-col :span="14" class="info">
                {{bookingsDetails.currency}}
                {{bookingsDetails.roomSubTotal + bookingsDetails.tax + bookingsDetails.hotelFee}}
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row class="hi-booking-row">
          <el-col :span="10" class="label">{{$t('Payment method')}}</el-col>
          <el-col :span="14" class="info">
            <p>
              {{bookingsDetails.payMethod.type}}
              {{bookingsDetails.payMethod.card}}
              <br>
              {{bookingsDetails.payMethod.name}}
            </p>
            <p class="print">
              <span>
                <i class="el-icon-printer"></i> {{$t('Print reciept')}}
              </span>
            </p>
          </el-col>
        </el-row>
        <el-row class="hi-booking-row">
          <el-col :span="24">
            <p class="tip-header">{{$t('Your booking is guaranteed and all paid for. ')}}</p>
            <p class="tip-content">{{$t('Any additional charges and fees incurred during your' +
              ' stay will be charged in your hotel’s local currency and' +
              ' may be subject to a foreign exchange fee.')}}</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" class="right">
        2
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'bookings_upcoming',
  props: ['bookingId'],
  data() {
    console.log(this.bookingId)
    return {
      details: {
        from: '2018-10-14',
        to: '2018-10-16',
        currency: 'HKD',
        nights: 2,
        referenceNo: '123211435457',
        rooms: 2,
        adults: 4,
        children: 1,
        hotel: {
          name: 'Plaza on the River',
          starRating: 4.5,
          address: 'City of London, London',
          isFreeCancellation: false,
          image: 'https://source.unsplash.com/300x300/?book,library',
          tel: '+852 0000 0000',
        },
        roomList: [
          {
            userName: 'John Smith',
            adults: 2,
            children: 0,
            facilities: [
              'One Bedroom Suite',
              'Two Twin and One Sofa Bed',
              'Non-Smoking room',
            ],
            price: {
              total: 125.99,
              period: 'daily rate',
            },
            cancel: '2019-01-06 11:59:00',
          },
          {
            userName: 'John Smith',
            adults: 2,
            children: 1,
            facilities: [
              'One Bedroom Suite',
              'Two Twin and One Sofa Bed',
              'Non-Smoking room',
            ],
            price: {
              total: 255.99,
              period: 'daily rate',
            },
            cancel: '2019-01-06 23:59:00',
          },
        ],
        promo: {
          code: 'WINTER20',
          price: 59.99,
        },
        tax: 92,
        hotelFee: 26.02,
        points: 50,
        payMethod: {
          type: 'Visa',
          card: 'xxxx xxxx xxxx 2311',
          name: 'John Smith',
        },
        inclusions: [
          {
            icon: 'el-icon-third-wifi',
            name: 'Free WiFi',
          },
          {
            icon: 'el-icon-third-mute-volume-interfac',
            name: 'Soundproof rooms',
          },
        ],
        cancellation: {
          date: '2018-12-26 23:59:00',
          percent: 20,
        },
      },
    }
  },
  computed: {
    bookingsDetails() {
      const details = this.details
      const months = [this.$t('January'), this.$t('February'), this.$t('March'), this.$t('April'),
        this.$t('May'), this.$t('June'), this.$t('July'), this.$t('August'),
        this.$t('September'), this.$t('October'), this.$t('November'), this.$t('December')]
      const weeks = [this.$t('Sun'), this.$t('Mon'), this.$t('Tues'), this.$t('Wed'),
        this.$t('Thur'), this.$t('Fri'), this.$t('Sat')]
      const checkIn = new Date(details.from)
      const checkOut = new Date(details.to)
      const checkInYear = checkIn.getFullYear()
      const checkOutYear = checkOut.getFullYear()
      const checkInMonth = months[checkIn.getMonth()]
      const checkOutMonth = months[checkOut.getMonth()]
      const checkInDay = weeks[checkIn.getDay()]
      const checkOutDay = weeks[checkOut.getDay()]
      const checkInDate = checkIn.getDate()
      const checkOutDate = checkOut.getDate()
      details.checkIn = {
        day: checkInDay,
        date: checkInDate,
        month: checkInMonth,
        year: checkInYear,
      }
      details.checkOut = {
        day: checkOutDay,
        date: checkOutDate,
        month: checkOutMonth,
        year: checkOutYear,
      }
      let roomSubTotal = 0
      details.roomList.forEach((room) => roomSubTotal += room.price.total)
      details.roomSubTotal = roomSubTotal
      return details
    },
  },
}
</script>

<style lang='scss'>
  @import '../../common/common';
  @import '../../common/main';
  .hi-breadcrumb{
    padding: 13px 0;
    .el-icon-arrow-left{
      font-size: 16px;
      color: $black4;
    }
    .bread{
      font-size: 14px;
      color: $black4;
      line-height: 16px;
      margin-left: 8px;
      .el-breadcrumb__inner{
        cursor: pointer !important;
      }
    }
  }
  .booking-detail-header{
    padding: 10.5px 0;
    .hi-row{
      .hi-header{
        font-size: 20px;
        font-weight: bold;
        color: $black5;
      }
      .hi-sub-header{
        display: inline-block;
        margin-left: 27.5px;
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
  }
  .hotel-info{
    padding: 13.5px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .hotel-img{
      width: 152px;
      height: 152px;
      border-radius: 5px;
    }
    .hotel-detail{
      padding-left: 14px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .detail{
        display: flex;
        flex-direction: column;
        .name{
          font-size: 20px;
          font-weight: bold;
          color: $black5;
        }
        .el-rate__icon{
          font-size: 11px;
          margin-right: 0;
        }
        .address, .tel{
          font-size: 11px;
          color: $black5;
        }
      }
    }
  }
  .booking-detail-content{
    padding: 21.5px 0;
    .left{
      padding-right: 8px;
    }
    .right{
      padding-left: 8px;
    }
    .hi-booking-row{
      padding: 13px 0;
      border-bottom: 1px solid $black3;
      &.center{
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      &:first-child{
        border-top: 1px solid $black3;
      }
      .label{
        font-size: 14px;
        font-weight: bold;
        color: $black5;
      }
      .info{
        font-size: 14px;
        color: $black6;
        .print{
          color: $blue5;
          font-size: 12px;
          line-height: 16px;
          margin: 18px 0;
          span{
            cursor: pointer;
          }
          .el-icon-printer{
            font-size: 16px;
          }
        }
      }
      .hi-booking-sub-row{
        padding:0 0 28px;
        &.promo, &.subtotal{
          padding: 28px 0 56px;
        }
        .label{
          font-size: 14px;
          font-weight: normal;
          color: $black5;
        }
        .info{
          p{
            margin-bottom: 28px;
          }
        }
        &.total .label{
          font-weight: bold;
        }
        &.points .info{
          color: $green4;
        }
      }
      .tip-header{
        font-size: 14px;
        font-weight: bold;
        color: $green4;
        padding: 10px 0;
      }
      .tip-content{
        font-size: 11px;
        color: $black8;
        padding-bottom: 32.5px;
      }
    }
  }
</style>
