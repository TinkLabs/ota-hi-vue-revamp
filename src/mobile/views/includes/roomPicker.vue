<template>
  <ul class="searchbox-container">
    <Header
      :isback="true"
      @hideSearchBox="hideSearchBox"
    >
      Select number of guests
    </Header>

    <ul class="select-guest-num wrapper-padding">
      <ul class="room-list">
        <li
          v-for="(item,index) in roomList"
          :key="index"
        >
          <h2 class="title">
            Guests in room {{ index+1 }}
          </h2>
          <div class="adult-num">
            <div>
              Adults
            </div>
            <div class="count">
              <span @click="reduceAdultNumber($event,index)">
                -
              </span>
              <span class="adult-count nums">
                {{ item.adultNumber }}
              </span>
              <span @click="addAdultNumber($event,index)">
                +
              </span>
            </div>
          </div>
          <div class="child-num">
            <div>
              Children
            </div>
            <div class="count">
              <span
                :class="[item.childNumber == 0 ?'isDisabled' :'']"
                @click="reduceChildNumber($event,index)"
              >
                -
              </span>
              <span class="child-count nums">
                {{ item.childNumber }}
              </span>
              <span @click="addChildNumber($event,index)">
                +
              </span>
            </div>
          </div>

          <div
            v-show="item.childAgeList.length>0"
            class="child-age"
          >
            <div
              v-for="(age,ageIndex) in item.childAgeList"
              :key="ageIndex"
              class="age-item"
            >
              <h3>How old is child {{ ageIndex+1 }}?</h3>
              <select
                id="age"
                v-model="selected[index][ageIndex]"
                name="age"
                @change="selectChildAge($event,index,ageIndex)"
              >
                <option
                  v-for="(num,number) in 10"
                  :key="number"
                  :value="num"
                >
                  {{ num }}
                </option>
              </select>
            </div>
          </div>

          <p
            class="add-room"
            @click="addRoom"
          >
            + Add another room?
          </p>
        </li>
      </ul>
    </ul>
  </ul>
</template>
<script>
import Header from './header.vue'

export default {
  name: 'Roompicker',
  components: {
    Header,
  },
  data() {
    return {
      keyword: '2rooms',
      selected: [[]],
      adultTotalNumber: 2,
      childTotalNumber: 0,
      isDisabled: true,
      roomList: [
        {
          adultNumber: 2,
          childNumber: 0,
          childAgeList: [

          ],
        },
      ],
    }
  },
  mounted() {
  },
  methods: {
    hideSearchBox() {
      // 1:location name 2:check in & out date 3:guest number
      this.keyword = `${this.roomList.length} rooms, ${
        this.adultTotalNumber} adults, ${
        this.childTotalNumber} children`
      this.$emit('hideSearchBox', this.keyword, 3)
    },
    addAdultNumber(event, index) {
      this.roomList[index].adultNumber += 1
      this.adultTotalNumber += 1
    },
    reduceAdultNumber(event, index) {
      if (this.roomList[index].adultNumber > 1) {
        this.roomList[index].adultNumber -= 1
        this.adultTotalNumber -= 1
      }
    },
    addChildNumber(event, index) {
      this.roomList[index].childNumber += 1
      this.childTotalNumber += 1
      this.roomList[index].childAgeList.push(1)
      this.selected[index].push(1)
    },
    reduceChildNumber(event, index) {
      const target = this.roomList[index]
      if (target.childNumber > 0) {
        target.childNumber -= 1
        target.childAgeList.pop()
        this.selected[index].pop()
        this.childTotalNumber -= 1
      }
    },
    selectChildAge(event, index, ageIndex) {
      this.roomList[index].childAgeList[ageIndex] = 2
    },
    //  add room
    addRoom() {
      this.roomList.push({
        adultNumber: 2,
        childNumber: 0,
        childAgeList: [],
      })
      this.adultTotalNumber += 2
      this.selected.push([])
    },
  },
}
</script>

<style lang='scss'>
  @import '../../../common/style/mobile_main.scss';
  .searchbox-container{
    .select-guest-num{
      border-top:1px solid #e7e7e7;
      .room-list{
        li{
          border-bottom:1px solid #e7e7e7;
          padding:50px 0;
          h2.title{
            @include font(34px, bold, #333333, Montserrat);
            margin-bottom:60px;
          }
          .adult-num,.child-num{
            @include font(30px, bold, #333333, MerriweatherSans);
            display: flex;
            justify-content: space-between;
            margin-top:35px;
            .count{
              span{
                display: inline-block;
                width:65px;
                height:65px;
                line-height:50px;
                text-align: center;
                margin-left:20px;
              }
              span:not(.nums){
                color:$gold;
                border-radius:10px;
                border:4px solid $gold;
                font-size:40px;
              }
              span.isDisabled{
                border-color:#ebebeb;
                color:#ebebeb;
              }
            }

          }
          .add-room{
            @include font(28px, bold, #002b55, Montserrat);
            margin-top:48px;
          }
          .child-age{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            border-top:1px solid #e7e7e7;
            border-bottom:1px solid #e7e7e7;
            padding:50px 0 40px 0;
            margin-top:50px;
            .age-item{
              margin-bottom:20px;
              h3{
                @include font(28px, bold, #333333, Montserrat);

              }
              select{
                width:100%;
                height: 100px;
                border-radius: 10px;
                border:1px solid #bbbbbb;
                margin-top:20px;
                @include font(28px, bold, #333333, Montserrat);
                padding:0 40px;
                background-image: url(/images/homepage/Rightarrow.png);
                background-repeat: no-repeat;
                background-position: calc(84%) 50%;
                background-size: 12% auto;
              }
            }
          }
        }
      }
    }
  }
</style>
