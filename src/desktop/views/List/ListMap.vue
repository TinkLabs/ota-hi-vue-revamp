<template>
  <div class="list-map">
    <div
      class="view-on-map"
      @click="mapVisible = true"
    />
    <el-dialog
      :visible.sync="mapVisible"
      width="90%"
      append-to-body:true
      @open="showMap"
    >
      <div slot="title">
        <p class="title-location">
          {{ `Hotels in ${city}, ${country}` }}
        </p>
        <p class="title-nights">
          {{ `${nights} nights (${checkIn} - ${checkOut})` }}
        </p>
      </div>
      <div
        id="hotel-list-map"
        ref="mapContain"
      />
    </el-dialog>
  </div>
</template>

<script>
// import

export default {
  props: {
    city: {
      type: String,
      default: 'London',
    },
    country: {
      type: String,
      default: 'United Kingdom',
    },
    nights: {
      type: Number,
      default: 4,
    },
    checkIn: {
      type: String,
      default: '26 Nov',
    },
    checkOut: {
      type: String,
      default: '29 Nov',
    },
    mapOpt: {
      type: Object,
      default() {
        return {}
      },
    },
    list: {
      type: [Object, Array],
      default() {
        return []
      },
    },
  },
  data() {
    return {
      mapboxgl: null,
      mapVisible: false,
      map: null,
      // map relative
      bounds: null,
      boundsCount: 0,
      laglats: [],
      markers: {},
      popups: {},
    }
  },
  computed: {
    // mapList() {
    //   return this.list.map(n => ({ ...n, lnglat: n.lnglat.slice(0, 2) }))
    // },
  },
  watch: {
    list: {
      // update hotels popup in map
      handler(l) {
        this.removePopup()
        this.addPopup()
      },
      deep: true,
    },
  },
  created() {
    this.appendMapCss()
  },
  mounted() {
    this.appendMapCss()
    //   this.createMap()
  },
  methods: {
    //   init
    appendMapCss() {
      if (typeof document !== 'undefined') {
        if (document.getElementById('mapboxcss') === null) {
          const css = document.createElement('link')
          css.href = 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css'
          css.rel = 'stylesheet'
          css.type = 'text/css'
          css.id = 'mapboxcss'
          document.getElementsByTagName('head')[0].appendChild(css)
        }
      }
    },
    createMap() {
      this.mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
      this.mapboxgl.accessToken = 'pk.eyJ1IjoidGlua2xhYnMiLCJhIjoiY2pwaTRhNzlvMDVpdTNrbzJ1cXFsOW44ZCJ9.Alv35W7_qro5E7cABc7fpQ'
      this.bounds = new this.mapboxgl.LngLatBounds()
      this.map = new this.mapboxgl.Map({
        container: 'hotel-list-map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 5,
      })
    },
    showMap() {
      const that = this
      this.$nextTick(() => {
        if (
          this.$refs.mapContain.querySelector('.mapboxgl-canvas-container')
          === null
        ) {
          that.createMap()
          that.addPopup()
        }
        that.map.resize()
        if (that.boundsCount > 1) {
          that.map.fitBounds(that.bounds.toArray(), {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            },
          })
        }
      })
    },
    // methods
    addPopup() {
      if (this.mapboxgl) {
        this.list.forEach((n) => {
          const ll = new this.mapboxgl.LngLat(...n.lnglat)
          this.popups[n.id] = new this.mapboxgl.Popup({
            className: 'hotel-popup',
            closeButton: false,
            closeOnClick: false,
          })
            .setLngLat(ll)
            .setHTML(
              this.popupHTML(n),
              //   `<span>${n.currency} ${Math.ceil(n.price / n.nights)}</span>`,
            )
            .addTo(this.map)
          //   update bounds
          this.bounds.extend(ll)
          this.boundsCount += 1
        })
        this.map.setCenter(this.bounds.getCenter())
        // this.map.resize()
      }
    },
    popupHTML(n) {
      let starInt = Math.floor(n.star_rating)
      let starHTML = ''
      while (starInt--) {
        starHTML += '<i class="fas fa-star"></i>'
      }
      if (Number(n.star_rating) % 1) {
        starHTML += '<i class=class="fas fa-star-half"></i>'
      }
      return `<div class='hotel-popup'>
                <span class='hotel-price'>${n.currency} ${Math.ceil(
  n.price / n.nights,
)}</span>
                <div class='hotel-brief clearfix'>
                  <div class='prev' style="background-image:url(${
  n.image
});background-size:cover;"></div>
                  <div class='info'>
                    <p class='h-name'>${n.name}</p>
                    <p class='h-location'>${n.address},${n.city}</p>
                    <p class='h-stars'>${starHTML}</p>
                    <p class="h-price">${n.currency}${this.$fmtPrice(
  Math.ceil(n.price / n.nights).toString(),
)}</p>
                  </div>
                </div>
              </div>`
    },
    removePopup() {
      Object.keys(this.popups).forEach((n) => {
        this.popups[n].remove()
      })
    },
  },
}
</script>

<style lang='scss'>
.list-map {
  .view-on-map {
    width: 100%;
    height: 115px;
    background: #bbb;
    margin-bottom: 38px;
  }
  .el-dialog__header {
    padding: 38px 36px 31px;
    .el-dialog__close.el-icon.el-icon-close {
      font-size: 30px;
      font-weight: bold;
      color: #707070;
    }
    .title-location {
      font-family: Montserrat;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 6px;
    }
    .title-nights {
      font-family: MerriweatherSans;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .el-dialog__body {
    padding-top: 0px;
    #hotel-list-map {
      width: 100%;
      height: 600px;
      .mapboxgl-popup {
        //   width:50px;
          height:30px;
        &:hover {
          z-index: 1000;
          .mapboxgl-popup-tip {
            border-top-color: #ff8600;
          }
        }
        .mapboxgl-popup-content:hover {
          background-color: transparent;
          padding: 0;
          position: relative;
          cursor: pointer;
          .hotel-popup {
            .hotel-price {
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              color: #ffffff;
              background-color: #ff8600;
              padding: 5px 8px;
              display: inline-block;
              box-sizing: border-box;
              border-radius: 3px;
            }

            .hotel-brief {
              background-color: #fff;
              display: block;
              position: relative;
              bottom: 40px;
              box-sizing: border-box;
              border-radius: 5px;
              overflow: hidden;
              //   width: 355px;
              box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
              .prev {
                position: absolute;
                top: 0;
                left: 0;
                width: 113px;
                height: 113px;
              }
              .info {
                margin-left: 113px;
                box-sizing: border-box;
                padding: 12px 16px;
                .h-name {
                  font-family: MerriweatherSans;
                  font-size: 14px;
                  font-weight: bold;
                  color: #333333;
                }
                .h-location {
                  font-family: SFUIText;
                  font-size: 11px;
                  color: #999;
                  margin-bottom: 5px;
                }
                .h-stars {
                  font-size: 11px;
                  color: #fec800;
                }
                .h-price {
                  font-family: Rubik;
                  font-size: 16px;
                  font-weight: 500;
                  color: #333333;
                }
              }
            }
          }
        }
        .mapboxgl-popup-content {
          box-shadow: none;
          padding: 5px 8px;
          .hotel-popup {
            .hotel-price {
              //   box-shadow: 0 12px 33px 0 rgba(0, 0, 0, 0.16);
            }
            .hotel-brief {
              display: none;
            }
          }
        }
      }
    }
  }

  color: #333;
}
</style>
