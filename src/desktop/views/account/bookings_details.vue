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
        <el-row class="hi-booking-row">
          <el-col :span="24">
            <el-collapse v-model="activeNames" @change="handleChange" class="emailCollapse">
              <el-collapse-item name="1">
                <template slot="title">
                  <i class="el-icon-message"></i> {{$t('Email to another address')}}
                </template>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
            </el-collapse>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" class="right">
        <el-row class="hi-booking-row"
                v-for="(item, index) in bookingsDetails.roomList" :key="index">
          <el-col :span="10" class="label">
            <span>{{$t('Your room')}} {{index+1}}</span>
            <el-tooltip class="item"
                        effect="dark" placement="bottom"
                        popper-class="hi-tips">
              <div slot="content" class="tips-content">
                <p v-html="$t('FREE cancellation', item.cancelObj)"></p>
                <p>{{$t('You can easily cancel or change your booking for free! ' +
                  'Just follow the link from your confirmation email.')}}</p>
              </div>
              <i class="el-icon-third-warning"></i>
            </el-tooltip>
          </el-col>
          <el-col :span="14" class="info roomInfo">
            <p>{{item.userName}}</p>
            <p>
              <span v-if="item.adults">
                {{item.adults}} {{$t('adults')}}{{item.children ? ', ' : ''}}
              </span>
              <span v-if="item.children">{{item.children}} {{$t('children')}}</span>
            </p>
            <p v-for="(facility, i) in item.facilities" :key="i">{{facility}}</p>
          </el-col>
        </el-row>
        <el-row class="hi-booking-row">
          <el-col :span="10" class="label">{{$t('Inclusions')}}</el-col>
          <el-col :span="14" class="info roomInfo">
            <p v-for="(inclusion, i) in bookingsDetails.inclusions" :key="i">
              <i :class="[inclusion.icon, 'inclusion']"></i>&nbsp;{{inclusion.name}}
            </p>
          </el-col>
        </el-row>
        <el-row class="hi-booking-row cancellation" v-if="bookingsDetails.cancellation">
          <el-col :span="10" class="label">{{$t('Cancellation policy')}}</el-col>
          <el-col :span="14" class="info">
            <p class="strong">
              {{$t('Free cancellation GMT', bookingsDetails.cancellation.transferObj)}}
            </p>
            <p>{{$t('Free cancellation GMT with fee',bookingsDetails.cancellation.transferObj)}}</p>
            <p class="light">
              {{$t('We’re unable to refund any payment for no-shows or early check out. ')}}
            </p>
          </el-col>
        </el-row>
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
            cancel: '2018-01-06 23:59:00',
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
            cancel: '2019-01-16 12:59:00',
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
      activeNames: [],
    }
  },
  computed: {
    bookingsDetails() {
      const tempDetails = this.details
      tempDetails.checkIn = this.formatTime(tempDetails.from)
      tempDetails.checkOut = this.formatTime(tempDetails.to)
      let roomSubTotal = 0
      tempDetails.roomList.forEach((room) => {
        const tempRoom = room
        roomSubTotal += room.price.total
        if (room.cancel) {
          tempRoom.cancelObj = this.formatTime(room.cancel)
        }
        return true
      })
      tempDetails.roomSubTotal = roomSubTotal
      if (tempDetails.cancellation) {
        tempDetails.cancellation.transferObj = this.formatTime(tempDetails.cancellation.date)
        tempDetails.cancellation.transferObj.percent = tempDetails.cancellation.percent
      }
      return tempDetails
    },
  },
  methods: {
    formatTime(date) {
      let time;
      const months = [this.$t('January'), this.$t('February'), this.$t('March'), this.$t('April'),
        this.$t('May'), this.$t('June'), this.$t('July'), this.$t('August'),
        this.$t('September'), this.$t('October'), this.$t('November'), this.$t('December')]
      const weeks = [this.$t('Sun'), this.$t('Mon'), this.$t('Tues'), this.$t('Wed'),
        this.$t('Thur'), this.$t('Fri'), this.$t('Sat')]
      const tempTime = new Date(date);
      const tempYear = tempTime.getFullYear()
      const tempmonth = tempTime.getMonth() + 1
      const tempMonth = months[tempTime.getMonth()]
      const tempDate = tempTime.getDate()
      const tempDay = weeks[tempTime.getDay()]
      let tempHours = tempTime.getHours()
      const tempMinutes = tempTime.getMinutes()
      if (tempHours > 12) {
        tempHours -= 12;
        time = `${tempHours}:${tempMinutes} PM`
      } else {
        time = `${tempHours}:${tempMinutes} AM`
      }
      return {
        time,
        year: tempYear,
        month: tempmonth,
        Month: tempMonth,
        date: tempDate,
        day: tempDay,
      }
    },
    handleChange(val) {
      console.log(val)
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
      .map{
        color: $blue5;
        font-size: 11px;
        line-height: 16px;
        i{
          font-size: 16px;
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
        .el-icon-third-warning{
          margin-left: 14px;
          color: $blue5;
        }
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
          .inclusion{
            font-size: 16px;
            color: $black5;
            margin-left: 7px;
          }
        }
        &.roomInfo{
          p{
            padding-bottom: 14px;
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
      &.cancellation{
        .info{
          p{
            font-size: 14px;
            margin-bottom: 28px;
            &.strong{
              font-weight: bold;
              color: $black5;
            }
            &.light{
              font-size: 12px;
              color: $black4;
              margin-bottom: 58px;
            }
          }
        }
      }
    }
  }
  .emailCollapse{
    &.el-collapse{
      border: none;
    }
    .el-collapse-item__header{
      background: transparent;
      border: none;
      font-size: 14px;
      font-weight: bold;
      color: $blue4;
      line-height: 16px;
      i{
        font-size: 16px;
        margin-right: 14px;
      }
    }
    .el-collapse-item__wrap{
      background: transparent;
      border: none;
    }
    .el-collapse-item__arrow{
      font-size: 16px !important;
      color: $black6;
    }
  }
  .hi-tips{
    .tips-content{
      word-break: break-word;
      width: 397px;
      padding: 5px 22px;
      font-size: 14px;
      line-height: 28px;
    }
  }
</style>
