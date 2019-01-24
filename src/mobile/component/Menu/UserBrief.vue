<template>
  <div class="user-brief">
    <div class="avatar">
      <img
        v-if="avatarUrl"
        :src="avatarUrl"
        :alt="name"
      >
      <i
        v-else
        class="el-icon-third-LC_icon_user_fill_3"
      />
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
    // background: #999;
    i{
      color:#505050;
      font-size:120px;
    }
  }
  .info {
    color: #333333;
    line-height: 0.9722rem;
    .name {
      font-size: 40px;
      line-height: 80px;
      font-weight: bold;
      color:#505050;
    }
    .location {
      font-size: 0.3889rem;
      line-height: 40px;
    }
    .to-login{
      a{
        color:#cba052;
      }

      font-size: 30px;
      text-decoration: underline;
    }
  }
}
</style>
