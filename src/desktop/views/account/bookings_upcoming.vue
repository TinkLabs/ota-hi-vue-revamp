<template>
  <div class="booking-container">
    <el-container v-for="item in hotelList" :key="item.referenceNo" class="booking-item">
      <el-header height="64px" class="booking-info-header">
        <div class="booking-info-header-left">
          <span class="checkInOut">
            {{item.fromTo}}
          </span>
          <span class="nights">
            {{item.nights}} Nights
          </span>
        </div>
        <div class="booking-info-header-right">
          <span class="reference">Reference No.</span>
          <span class="num">{{item.referenceNo}}</span>
        </div>
      </el-header>
      <el-main>
        <img :src="item.hotel.image">
        <div class="book-info">
          <div class="hotel">
            <span class="name">{{item.hotel.name}}</span>
            <el-rate
                v-model="item.hotel.starRating"
                disabled
                show-score
                text-color="#ff9900"
                score-template="">
            </el-rate>
            <span class="address">{{item.hotel.address}}</span>
          </div>
          <div class="info">
            <span>{{item.rooms}} rooms, </span>
            <span v-if="item.adults">{{item.adults}} adults{{item.children ? ', ' : ''}} </span>
            <span v-if="item.children">{{item.children}} children</span>
          </div>
          <div class="cancel">
            <i class="el-icon-success"
               :class="['el-icon-success', { 'check': item.hotel.isFreeCancellation }]"></i>
            Free cancellation
          </div>
        </div>
        <div class="act-menu">
          <el-button>Edit Booking</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'bookings_upcoming',
  data() {
    return {
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
  computed: {
    hotelList() {
      const hotelList = this.list;
      hotelList.forEach((item) => {
        const tempItem = item
        const months = [this.$t('January'), this.$t('February'), this.$t('March'), this.$t('April'),
          this.$t('May'), this.$t('June'), this.$t('July'), this.$t('August'),
          this.$t('September'), this.$t('October'), this.$t('November'), this.$t('December')]
        const checkIn = new Date(item.from)
        const checkOut = new Date(item.to)
        const checkInYear = checkIn.getFullYear()
        const checkOutYear = checkOut.getFullYear()
        const checkInMonth = months[checkIn.getMonth()]
        const checkOutMonth = months[checkOut.getMonth()]
        const checkInDay = checkIn.getDate()
        const checkOutDay = checkOut.getDate()
        tempItem.fromTo = `${checkInDay}`
        if(checkInMonth !== checkOutMonth || checkInYear !== checkOutYear) tempItem.fromTo += ` ${checkInMonth}`
        if(checkInYear !== checkOutYear) tempItem.fromTo += ` ${checkInYear}`
        tempItem.fromTo += ` - ${checkOutDay} ${checkOutMonth} ${checkOutYear}`
      })
      return hotelList
    },
  },
}
</script>

<style lang='scss'>
  @import '../../common/common';
  @import '../../common/main';
  .booking-container{
    padding: 15.5px 0;
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
        align-items: center;
        padding: 0 25px;
        .el-button{
          flex-shrink: 0;
          border-radius: 5px;
          background-color: $blue4;
          font-size: 14px;
          font-weight: bold;
          color: $white1;
        }
      }
    }
  }
</style>
