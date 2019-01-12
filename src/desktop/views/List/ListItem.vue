<template>
  <div class="list-item">
    <div class="preview">
      <list-swiper />
    </div>
    <div class="info">
      <div class="hotel-name">
        {{ data.name }}
      </div>
      <!--  -->
      <div class="brief clearfix">
        <div class="left">
          <p class="stars-loc">
            <span class="stars">
              <i
                v-for="(star,index) in Math.floor(Number(data.star_rating))"
                :key="index"
                class="fas fa-star"
              />
              <i
                v-if="Number(data.star_rating)%1>0"
                class="fas fa-star-half"
              />
            </span>
            <span class="location">
              {{ `${data.address} ${data.city}` }}
            </span>
          </p>
          <div class="rating clearfix">
            <div class="rectangle">
              {{ data.rating | int }} <span class="dot">
                {{ data.rating | dot }}
              </span>
            </div>
            <div class="comment">
              <p class="rating-text">
                Excellent
              </p>
              <p class="review">
                {{ `${data.reviews} reviews` }}
              </p>
            </div>
          </div>
          <p class="cancellation">
            <i class="fas fa-check-circle" />
            Free cancellation
          </p>
          <div class="amenities">
            xx
          </div>
        </div>

        <div class="right">
          <!--  -->
          <p class="price-label">
            Price per night
          </p>
          <p class="originalPrice">
            {{ `${data.currency} ${data.originPrice}` |price }}
          </p>
          <p class="price">
            {{ `${data.currency} ${data.price}` |price }}
          </p>
          <p class="availability">
            Limited availability
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import ListSwiper from './ListSwiper.vue'

// const test = {
//   images: [
//     {
//       src:
//         'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
//     },
//     {
//       src:
//         'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
//     },
//     {
//       src:
//         'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
//     },
//   ],
//   name: 'Sheraton Grand London Park Lane',
//   star_rating: 4,
//   address: 'Westminster Borough',
//   city: 'London',
//   nights: 1,
//   rating: 8.9,
//   reviews: 43,
//   freeCanel: false,
//   Amenities: [1, 2],
//   remain: 98,
//   price: 291,
//   originPrice: 391,
//   currency: 'HK$',
// }

export default {
  components: {
    ListSwiper,
  },
  filters: {
    int(value) {
      if (!value) return ''
      return `${value.toString().split('.')[0]}.`
    },
    dot(value) {
      if (!value) return ''
      return value.toString().split('.')[1]
    },
  },
  props: {
    data: Object,
  },
//   computed: {
//     data() {
//       return test
//     },
//   },
}
</script>

<style lang="scss">
.list-item {
  width: 812px;
  height: 223px;
  overflow: hidden;
  margin-bottom: 22px;
  border-radius: 5px;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  .preview {
    width: 276px;
    height: 223px;
    background: #aaa;
    float: left;
  }
  .info {
    font-family: MerriweatherSans;
    box-sizing: border-box;
    width: 530px;
    padding: 20px;
    float: left;
    .hotel-name {
      font-size: 20px;
      font-weight: bold;
      color: #333;
      font-family: Montserrat;
    }
    .brief {
      .left {
        float: left;
        .stars-loc {
          margin: 6px 0 12px 0;
          .stars {
            color: #fec800;
            font-size: 11px;
            line-height: 17px;
            display: inline-block;
            margin-right: 9px;
          }
          .location {
            font-size: 14px;
            color: #505050;
            line-height: 20px;
          }
        }
        .rating {
          .rectangle {
            float: left;
            height: 35px;
            margin-right: 11px;
            line-height: 35px;
            width: 46px;
            background-color: #4a783c;
            color: white;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            .dot {
              position: relative;
              top: 6%;
              left: -5%;
            }
          }
          .comment {
            float: left;
            font-size: 12px;
            line-height: 17px;
            margin-bottom: 21px;
            .rating-text {
              font-weight: bold;
              color: #4a783c;
            }
            .review {
              color: #888888;
            }
          }
        }
        .cancellation {
          margin-bottom: 17px;
          font-size: 12px;
          line-height: 20px;
          color: #888888;
          i {
            display: inline-block;
            margin: 0 3px;
            font-size: 16px;

            color: #4a783c;
          }
        }
      }
      .right {
        font-family: MerriweatherSans;
        float: right;
        text-align: right;
        line-height: 20px;
        padding-top:5px;
        .price-label {
          font-family: MerriweatherSans;

          color: #505050;
          font-size: 14px;
          margin-bottom: 12px;
        }
        .originalPrice {
          font-family: MerriweatherSans;
          font-size: 14px;
          font-weight: bold;
          color: #888888;
          text-decoration: line-through;
          margin-bottom: 10px;
        }
        .price {
          height: 35px;
          font-family: Montserrat;
          font-size: 26px;
          font-weight: 600;
          color: #333333;
          margin-bottom: 6px;
        }
        .availability {
          font-family: MerriweatherSans;
          font-size: 12px;
          font-weight: bold;
          color: #ff4141;
        }
      }
    }
  }
}
</style>
