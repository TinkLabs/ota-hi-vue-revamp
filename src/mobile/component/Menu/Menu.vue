<template>
  <ul class="menu">
    <li
      v-for="(item,index) in menus"
      :key="index"
      class="menu-item"
    >
      <span class="icon">
        <i :class="item.icon" />
      </span>
      <span class="menu-text">
        {{ item.name }}
      </span>
      <span
        v-if="item.info"
        class="info"
      >
        {{ item.info }}
      </span>
      <i
        v-if="item.info"
        class="el-icon-third-1201youjiantou"
      />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import MENU from './menu'

export default {
  computed: {
    ...mapGetters([
      'user',
      'global',
    ]),
    menus() {
      return MENU.map((m) => {
        if (m.name === 'Languages') {
          return { ...m, info: this.global.lang }
        } if (m.name === 'Currencies') {
          return { ...m, info: this.global.currency }
        }
        return m
      })
    },
  },
}
</script>

<style lang='scss'>
.menu{
  box-sizing: border-box;
  width:100%;
  height: calc( 100% - 280px);
  overflow: scroll;
  padding:0px 40px;
  color:#333333;
   .menu-item{
     position: relative;
     &:last-child{
       border-bottom:none;
     }
     >i{
       font-size:26px;
       color:rgb(173,173,173);
       vertical-align: middle;
       float: right;
       transform:translate(0,38px)
     }
     font-size: 30px;
     line-height: 102px;
     height:102px;
     width:100%;
     border-bottom: 1px solid #e7e7e7;
     .icon{
       width:40px;
       text-align: center;
       display: inline-block;
       margin:0 45px 0 40px;
       font-weight: normal;
       i{
         font-size:40px;
         color:#333;
         vertical-align: middle;
       }
     }
     .menu-text{
        font-weight: 500;
     }
     .info{
       position: absolute;
       left:331px;
       color:rgb(173,173,173);
     }
     .chevron{
       position: absolute;
       right:14px;
       top:50%;
       transform: translateY(-50%);
       color:rgb(153,153,153);
     }
     &:first-child{
       .icon i{
         font-size:50px;
       }
     }
   }
}
</style>
