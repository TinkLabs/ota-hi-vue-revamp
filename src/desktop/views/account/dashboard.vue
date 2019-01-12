<template>
  <el-row :gutter="40">
    <el-col :span="6">
      <PersonalInfo />
    </el-col>
    <el-col :span="14">
      <BookingsList />
    </el-col>
  </el-row>
</template>

<script>
import PersonalInfo from './personalInfo.vue'
import BookingsList from './bookingsList.vue'

export default {
  name: 'DashBoard',
  components: {
    PersonalInfo,
    BookingsList,
  },
}
</script>

<style scoped lang='scss'>
@import '../../common/main.scss';
</style>
