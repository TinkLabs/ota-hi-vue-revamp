<template>
  <div class="console">
    <el-input
      v-model="originNum"
      placeholder="原始数据条数"
      type="number"
    />
    <el-input
      v-model="limitedNum"
      placeholder="限制数据条数"
      type="number"
    />
    <el-button
      plain
      @click="generate"
    >
      生成
    </el-button>
  </div>
</template>


<script>
function gA() {
  const l = Math.ceil(Math.random() * 2)
  return new Array(l)
    .join(',')
    .split(',')
    .map((n, i) => i + 1)
}
const amenMap = {
  1: 'fas fa-wifi',
  2: 'fas fa-smoking-ban',
}
function Hotel() {
  this.images = [
    {
      src:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
    },
    {
      src:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
    },
    {
      src:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
    },
  ]
  this.name = 'Sheraton Grand London Park Lane'
  this.star_rating = Math.ceil(Math.random() * 5)
  this.address = 'Westminster Borough'
  this.city = 'London'
  this.nights = Math.ceil(Math.random() * 3)
  this.rating = 8.9
  this.reviews = Math.ceil(Math.random() * 200)
  this.freeCanel = Math.ceil(Math.random() * 2) > 1
  this.Amenities = gA()
  this.remain = Math.ceil(Math.random() * 100)
  this.price = Math.ceil(Math.random() * 1000)
  this.originPrice = this.price + 100
  this.currency = 'HK$'
}
function Dest() {
  this.address = 'East London'
  this.distance = 2.2
  this.properties = Math.ceil(Math.random() * 20000)
}
function HG(n = 10) {
  return new Array(n)
    .join(',')
    .split(',')
    .map(n => new Hotel())
}
function DG(n = 10) {
  return new Array(n)
    .join(',')
    .split(',')
    .map(m => new Dest())
}
export default {
  props: {
    fetching: Boolean,
    params: Object,
  },
  data() {
    return {
      originNum: 1000,
      origin: [],
      limitedNum: 100,
      // specData
    }
  },
  computed: {
    limited() {
      return this.origin.slice(0, Number(this.limitedNum))
    },

  },
  watch: {
    fetching(c) {
      if (c) {
        const {
          stars, searchName, price, rating, amenId, isFreeCancel, pageCount, pageSize, sortId,
        } = this.params
        let tmp = this.limited.slice(0)
        if (searchName !== '') {
          tmp = tmp.filter(n => n.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1)
        }
        if (price && price.length) {
          tmp = tmp.filter(n => n.price >= price[0] && n.price <= price[1])
        }
        if (rating && rating.length) {
          const ratingSet = new Set(rating)
          tmp = tmp.filter(n => ratingSet.has(Math.floor(n.rating)))
        }
        if (stars && stars.length) {
          const starsSet = new Set(stars)
          tmp = tmp.filter(n => starsSet.has(Math.floor(n.star_rating)))
        }
        if (amenId && amenId.length) {
          tmp = tmp.filter((n) => {
            let pass = true
            const AmenitiesSet = new Set(n.Amenities)
            for (let i = 0, l = amenId.length; i < l; i++) {
              //
              if (!AmenitiesSet.has(amenId[i])) {
                pass = false
              }
            }
            return pass
          })
        }
        if (isFreeCancel) {
          tmp = tmp.filter(n => n.freeCancel === isFreeCancel)
        }
        // get result & stopPropagation();
        switch (sortId) {
          case 1:
            tmp.sort((a, b) => a.price - b.price)
            break
          case 2:
            tmp.sort((a, b) => a.rating - b.rating)
            break
          case 3:
            tmp.sort((a, b) => b.rating - a.rating)
            break
          default:
            break
        }
        // getPage
        const test = tmp.slice((pageCount - 1) * pageSize, pageSize)
        this.$emit('listResponse', test)
      }
    },
  },
  created() {
    this.generate()
  },
  methods: {
    generate() {
      this.origin = HG(Number(this.originNum))
    },
  },
}
</script>

<style>
.console{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
</style>
