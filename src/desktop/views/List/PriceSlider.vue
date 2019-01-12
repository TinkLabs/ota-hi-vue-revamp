<template>
  <div class="price-slider">
    <div class="price-bar">
      {{ `${'HK$'} ${priceRange[0]} - ${'HK$'} ${priceRange[1]}` }}
    </div>
    <div class="slider">
      <el-slider
        v-model="priceRange"
        range
        :max="max"
        :min="min"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    min: Number,
    max: Number,
  },
  data() {
    return {
      delayTime: 300,
      Timer: null,
      priceRange: [Number(this.min), Number(this.max)],
    }
  },
  watch: {
    priceRange(n) {
      if (this.Timer) {
        clearTimeout(this.Timer)
      }
      const that = this
      this.Timer = setTimeout(() => {
        that.$emit('priceRangeChange', this.name, n)
      }, that.delayTime)
    },
  },
}
</script>

<style lang='scss'>
.price-slider {
  .price-bar {
  }
  .slider {
    .el-slider__bar {
      background-color: #002b55;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
