<template>
  <div class="check-list">
    <ul>
      <li
        v-for="(item,index) in innerList"
        :key="index"
        class="check-item"
      >
        <el-checkbox
          v-model="item.checked"
          @change="submit"
        >
          {{ item.text }}
        </el-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    name: String,
  },
  data() {
    return {
      innerList: this.list.slice(0),
    }
  },
  computed: {
    selected() {
      return this.innerList.filter(n => n.checked === true).map(n => n.name)
    },
  },
  // watch: {
  //   innerList(newOne, oldOne) {
  //     console.log(this.newOne.filter(n => n.checked === true))
  //   },
  // },
  methods: {
    submit() {
      this.$emit('checking', this.name, this.selected)
    },
  },
}
</script>

<style lang="scss">
.check-list {
  .check-item {
    font-size: 12px;
    line-height: 20px;
  }
}
</style>
