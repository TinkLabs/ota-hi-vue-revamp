<template>
  <div class="user-brief">
    <div class="avatar">
      <img
        :src="avatarUrl"
        :alt="name"
      >
    </div>
    <div class="info">
      <div class="name">
        {{ name }}
      </div>
      <div
        v-if="user.isLogIn"
        class="location"
      >
        {{ location }}
      </div>
      <div
        v-else
        class="to-login"
      >
        <a href="">
          Please sign in
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      // user: { isLogIn: false },
    }
  },
  computed: {
    ...mapGetters(['user']),
    avatarUrl() {
      return this.user.isLogIn ? this.user.avatar : ''
    },
    name() {
      return this.user.isLogIn ? this.user.name : 'Welcome!'
    },
    location() {
      return this.user.isLogIn ? this.user.name : ''
    },
  },
}
</script>

<style lang='scss'>
.user-brief {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height:280px;
  background: #fafafa;
  .avatar {
    margin-right: 26px;
    height: 120px;
    width: 124px;
    border-radius: 100%;
    background: #999;
  }
  .info {
    color: #333333;
    line-height: 0.9722rem;
    .name {
      font-size: 36px;
      line-height: 70px;
      font-weight: 500;
    }
    .location {
      font-size: 0.3889rem;
      line-height: 40px;
    }
    .to-login{
      color:#4574eb;
    }
  }
}
</style>
