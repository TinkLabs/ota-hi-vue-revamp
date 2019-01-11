<template>
  <div class="sorter">
    <span class="title">
      Sort by:
    </span>
    <span
      v-for="(item,index) in sorters"
      :key="index"
      :class="[item.id===active?'active':'','label']"
      @click="handleClick(item.id)"
    >
      {{ item.label }}
    </span>
  </div>
</template>

<script>
const sorters = [
  { label: 'Best Value', id: 1 },
  { label: 'Lowest Rates', id: 2 },
  { label: 'Highest Rates', id: 3 },
]
export default {
  data() {
    return {
      active: 0,
    }
  },
  computed: {
    sorters() {
      return sorters
    },
  },
  methods: {
    handleClick(id) {
      if (this.active === id) {
        this.active = 0
      } else {
        this.active = id
      }
      this.$emit('sortList', this.active)
    },
  },
}
</script>

<style lang="scss">
.sorter {
  border-radius: 2px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.06);
  background: #fff;
  margin-bottom:17px;
  span {
    &.active {
      background: #002b55;
      color: white;
    transition: all .2s;
      border-radius: 2px;
    }
    color: #505050;
    display: inline-block;
    padding: 0 23px;
    height: 43px;
    line-height: 43px;
  }
  .title {
    color: #888888;
  }
}
</style>
