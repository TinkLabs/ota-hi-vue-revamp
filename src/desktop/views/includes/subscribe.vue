<template>
  <!-- subscribe -->
  <div class="h-container">
    <div class="subscribe">
      <p>{{ $t("Subscribe to our newsletter") }}</p>
      <h1>{{ $t("Best deals directly to your inbox") }}</h1>
      <div class="subscribe-input">
        <input
          v-model="emailAddress"
          type="text"
          :placeholder="$t('Enter your email address')"
          :class="[showError==true?'error' :'']"
        >
        <button
          v-show="!showSuccess"
          :class="[showError==true?'error' :'']"
          @click="subscribe"
        >
          {{ $t("Join Today") }}
        </button>
        <button
          v-show="showSuccess"
          class="success"
        >
          {{ $t("Subscribed") }}
        </button>
      </div>
      <p
        v-show="showError"
        class="error tips"
      >
        {{ $t("Please enter a valid email address.") }}
      </p>
      <p
        v-show="showSuccess"
        class="success tips"
      >
        {{ $t("Wonderful! Exciting emails are making it’s way to you.") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showError: false,
      showSuccess: false,
      emailAddress: '',
    }
  },
  mounted() {
  },
  methods: {
    subscribe() {
      if (this.emailAddress) {
        this.showSuccess = true
        this.showError = false
      } else {
        this.showError = true
        this.showSuccess = false
      }
    },

  },
}
</script>

<style lang="scss" scoped>
  @import '../../../common/style/main';

  // subscribe
  .h-container{
    padding-bottom:30px;
  }
  .subscribe{
    width:100%;
    padding:44px 80px;
    box-sizing: border-box;
    background-color: #d8d8d8;
    // margin-bottom:60px;
    p{
      @include font(21px,300,#002b55,Roboto);
    }
    h1{
      @include font(21px,bold,#002b55,Roboto);
      margin:10px 0;
    }
    input{
      width:40%;
      height:50px;
      border-radius:4px 0 0 4px;
      outline: none;
      padding:0 18px;
      font-size:14px;
      appearance: none;
      border:1px solid #fff;
    }
    input.error{
      border:1px solid #ff4141;
    }
    button{
      width:150px;
      height:52px;
      border-radius:0 4px  4px 0;
      background-color: #cba052;
      border:none;
      color:#fff;
      font-size: 14px;
      outline: none;
      cursor: pointer;
    }
    button.error{
      background-color:#ff4141;
    }
    button.success{
      background-color:#71c118;
    }
    p.tips{
      @include font(14px, normal, #fff, MerriweatherSans);
      margin-top:10px;
    }
    p.error{
      color:#ff4141;
    }
  }


</style>
