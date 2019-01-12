<template>
  <div class="nearby">
    <div class="title">
      Search nearby destinations
    </div>
    <p class="desc">
      Find your property by searching nearby regions
    </p>
    <div class="nearby-dest clearfix">
      <div class="left">
        <ul>
          <li
            v-for="(item,index) in list.slice(0,Math.floor(list.length/2))"
            :key="index"
            class="dest"
          >
            <a href="">
              {{ `${item.address} ${item.distance} miles away - ${item.properties} properties` }}
            </a>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li
            v-for="(item,index) in list.slice(Math.ceil(list.length/2))"
            :key="index"
            class="dest"
          >
            <a href="">
              {{ `${item.address} ${item.distance} miles away -${item.properties} properties` }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
}
</script>

<style lang='scss'>
.nearby {
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #333333;
  margin-bottom:48px;
  .title {
    font-family: Montserrat;
    font-size: 20px;
    line-height: 30px;
     margin-bottom:7px;
  }
  .desc {
    font-family: MerriweatherSans;
    font-size: 14px;
    color: #505050;
    margin-bottom: 18px;
  }
  .nearby-dest {
    a {
      font-family: MerriweatherSans;
      font-size: 14px;
      color: #cba052;
      line-height: 30px;
      text-decoration: underline;
    }
    .left {
      float: left;
      width: 50%;
    }
    .right {
      float: left;
    }
  }
}
</style>
