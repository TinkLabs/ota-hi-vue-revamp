<template>
  <div class="near-by-dest">
    <p class="title">
      Nearby Destinations
    </p>
    <div class="near-by-list">
      <div
        v-for="(item,index) in data"
        :key="index"
        class="near-by-item"
      >
        <div class="prev">
          <img
            :src="item.img"
            alt=""
          >
        </div>
        <div class="city">
          {{ item.city }}
        </div>
        <div class="price">
          {{ `From ${item.currency} ${item.price}/night` }}
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const test = [
  {
    img: 'http://pic31.photophoto.cn/20140411/0034034487448561_b.jpg',
    city: 'Sydney',
    price: '1000',
    currency: '$',
  },
  {
    img: 'http://pic31.photophoto.cn/20140411/0034034487448561_b.jpg',
    city: 'Sydney',
    price: '1000',
    currency: '$',
  },
  {
    img: 'http://pic31.photophoto.cn/20140411/0034034487448561_b.jpg',
    city: 'Sydney',
    price: '1000',
    currency: '$',
  },
  {
    img: 'http://pic31.photophoto.cn/20140411/0034034487448561_b.jpg',
    city: 'Sydney',
    price: '1000',
    currency: '$',
  },
  {
    img: 'http://pic31.photophoto.cn/20140411/0034034487448561_b.jpg',
    city: 'Sydney',
    price: '1000',
    currency: '$',
  },
  {
    img: 'http://pic31.photophoto.cn/20140411/0034034487448561_b.jpg',
    city: 'Sydney',
    price: '1000',
    currency: '$',
  },
]
export default {
  computed: {
    data() {
      return test
    },
  },
}
</script>

<style lang='scss'>
.near-by-dest {
  color: #333;
  .title {
    font-family: Montserrat;
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
  }
  .near-by-list {

    .near-by-item {
        &:last-child{
            margin-right: 0px;
        }
        float:left;
        margin-right:18px;
      .prev {
        margin: 10px 0px;
        width: 120px;
        height: 133px;
        border-radius: 5px;
        border-radius: 5px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .city {
        font-family: MerriweatherSans;
        font-size: 14px;
        line-height: 20px;
        font-weight: bold;
        margin-bottom:3px;
      }
      .price {
        font-size: 12px;
        line-height: 20px;
        color: #888;
      }
    }
  }
}
</style>
