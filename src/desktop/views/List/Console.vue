<template>
  <div class="console">
    <el-input
      v-model="originNum"
      placeholder="原始数据条数"
      type="number"
    />
    <el-input
      v-model="limitedNum"
      placeholder="可输出总条数"
      type="number"
    />
    <el-button
      plain
      @click="generate"
    >
      生成
    </el-button>
    <el-input
      v-model="sendNum"
      placeholder="服务器推送条数"
      type="number"
    />
    <el-button
      plain
      @click="send"
    >
      推送
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
function Hotel(i) {
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
    {
      src:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
    },
    {
      src:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
    },
  ]
  this.id = i
  this.name = 'Sheraton Grand London Park Lane'
  this.star_rating = Math.ceil(Math.random() * 5)
  this.address = 'Westminster Borough'
  this.city = 'London'
  this.nights = Math.ceil(Math.random() * 3)
  this.rating = (Math.random() * 10).toFixed(1)
  this.reviews = Math.ceil(Math.random() * 200)
  this.freeCancel = Math.ceil(Math.random() * 2) > 1
  this.Amenities = gA()
  this.remain = Math.ceil(Math.random() * 100)
  this.price = Math.ceil(Math.random() * 10000)
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
    .map((n, i) => new Hotel(i + 1))
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
      sendNum: 2,
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
          stars,
          searchName,
          price,
          rating,
          amenId,
          isFreeCancel,
          pageCount,
          pageSize,
          sortId,
        } = this.params
        let tmp = this.limited.slice(0)
        console.log('now start filtering')
        if (searchName !== '') {
          tmp = tmp.filter(
            n => n.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1,
          )
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
          console.log('now staring')
          console.log(tmp)
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
            tmp.sort((a, b) => (a.price / a.nights) - (b.price / b.nights))
            console.log(tmp.map(p => p.price))
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
        const test = tmp.slice((pageCount - 1) * pageSize, (pageCount) * pageSize)
        console.log('now final list is:')
        console.log(test)

        let nearby = []
        if (test.length === 0) {
          nearby = DG(8)
        }
        const res = {
          success: true,
          data: test,
          nearby,
          pageCount,
          total: tmp.length,
        }
        console.log('final res:')
        console.log(res)

        if (pageCount > 1) {
          this.$emit('appendlistResponse', res)
        } else {
          this.$emit('listResponse', res)
        }
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
    send() {
      let resultList = []
      let nearby = []
      resultList = this.limited.slice(0, this.sendNum)
      if (resultList.length === 0) {
        nearby = DG(8)
      }
      const res = {
        success: true,
        data: resultList,
        nearby,
        total: this.limited.length,
      }
      this.$emit('listResponse', res)
    },
  },
}
</script>

<style>
.console {
  padding:10px;
  border-radius:5px;
  margin-bottom:10px;
  border:2px solid #6f5c66;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
</style>
