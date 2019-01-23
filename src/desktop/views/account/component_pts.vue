<template>
  <div>
    <div class="line1">
      <div class="name-nights">
        {{pt.hotel_name}}&nbsp;-&nbsp;{{pt.nights}} {{$t('Nights')}}
      </div>
      <div :class="['pts', {'green':state === 'confirm', 'purple':state === 'pending'}]">
        + {{pt.points}} {{$t('pts.')}}
      </div>
    </div>
    <div class="line2">
      {{pt.from | moment('ddd DD MMMM YYYY')}}
      - {{pt.to | moment('ddd DD MMMM YYYY')}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'component_pts',
  props: ['pt', 'state'],
  computed: {
    ...mapGetters({
      langCode: 'langCode',
    }),
  },
}
</script>

<style  scoped lang='scss'>
  @import '../../../common/style/common';
  .line1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  .name-nights{
    font-size: 20px;
    font-weight: bold;
    color: $black5;
    flex-grow: 1;
  }
  .pts{
    font-size: 20px;
    font-weight: bold;
    flex-shrink: 0;
    &.green{
      color: $green4;
    }
    &.purple{
      color: $purple;
    }
  }
  }
  .line2{
    font-size: 14px;
    color: $black4;
  }
</style>
