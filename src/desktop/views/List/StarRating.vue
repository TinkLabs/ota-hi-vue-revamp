<template>
  <div class="star-rating">
    <ul>
      <li
        v-for="(item,index) in selectedStars"
        :key="index"
        class="rating-item"
      >
        <el-checkbox
          v-model="selectedStars[index].checked"
          class="star-check"
          @change="showChange"
        />
        <el-rate
          v-model="selectedStars[index].star"
          disabled
          text-color="#ff9900"
          disabled-void-color="#fafafa"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import '../../common/common.scss'

export default {
  props: {
    list: Array,
    name: String,
  },
  data() {
    return {
      selectedStars: this.list.map(n => ({ star: n, checked: false })),
    }
  },
  computed: {
    stars() {
      return this.selectedStars.filter(n => n.checked === true).map(n => n.star)
    },
  },
  methods: {
    showChange() {
      this.$emit('checking', this.name, this.stars)
    },
  },
}
</script>

<style lang='scss'>
.star-rating {
  margin-bottom: 37px;
  .rating-item {
    margin-bottom: 15px;
    .star-check {
      float: left;
      margin-right: 9px;
    }
  }
}
</style>
