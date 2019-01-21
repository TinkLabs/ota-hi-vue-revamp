<template>
  <div class="preferences-layout">
    <el-tabs tab-position="left">
      <el-tab-pane>
        <div slot="label" class="left-tab">
          <i class="el-icon-third-user"></i> {{$t('About you')}}
        </div>
        <div class="right-layout">
          <div class="preferences-header">{{$t('Your hi.com account')}}</div>
          <div class="preferences-sub-header">
            {{$t('These details are displayed next to your publicly shared ' +
            'reviews, ratings, photos etc. Any updates you make here will ' +
            'also appear in past contributions. ')}}
          </div>
          <div class="account-form">
            <el-row>
              <el-col :lg="6" class="account-form-left">
                <div class="avatar" :style="{backgroundImage: `url('${userInfo.avatar}')`}"></div>
                <span class="avatar-btn">{{$t('Change picture')}}</span>
              </el-col>
              <el-col :lg="18" class="account-form-right">
                <el-form label-position="top" label-width="80px"
                         :model="userInfo"
                         :rules="rulesUserForm"
                         ref="userInfoForm">
                  <el-row>
                    <el-col :lg="12">
                      <el-form-item prop="firstName">
                        <div slot="label" class="account-form-label">{{$t('First Name')}}</div>
                        <el-input v-model="userInfo.firstName"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :lg="12">
                      <el-form-item prop="lastName">
                        <div slot="label" class="account-form-label">{{$t('Last Name')}}</div>
                        <el-input v-model="userInfo.lastName"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :lg="24">
                      <el-form-item prop="birthday">
                        <div slot="label" class="account-form-label">{{$t('Birthday')}}</div>
                        <el-date-picker
                            v-model="userInfo.birthday"
                            type="date"
                            prefix-icon=" "
                            :placeholder="$t('Choose Your Birthday')">
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :lg="24">
                      <el-form-item prop="country">
                        <div slot="label" class="account-form-label">{{$t('Country')}}</div>
                        <el-select v-model="userInfo.country" filterable
                                   :placeholder="$t('Please Select an Country')">
                          <el-option
                              v-for="item in countryList"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :lg="24" class="submit-button">
                      <el-button @click="changePersonalDetail">{{$t('Update Changes')}}</el-button>
                    </el-col>
                  </el-row>
                </el-form>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <div slot="label" class="left-tab">
          <i class="el-icon-third-ios-bed"></i> {{$t('Booking details')}}
        </div>
        <div class="right-layout">
          <div class="preferences-header">{{$t('Booking details')}}</div>
          <div class="preferences-sub-header">
            {{$t('This information is only used to autofill your details and ' +
            'make it quicker for you to book. Your details will be stored ' +
            'securely and won’t be shared publicly. ')}}
          </div>
          <div class="account-form">
            <el-row>
              <el-col :lg="24" class="account-form-right">
                <el-form label-position="top" label-width="80px" :model="formLabelAlign">
                  <el-row>
                    <el-col :lg="4">
                      <el-form-item>
                        <div slot="label" class="account-form-label">{{$t('Title')}}</div>
                        <el-select v-model="value" filterable placeholder="请选择">
                          <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :lg="10">
                      <el-form-item>
                        <div slot="label" class="account-form-label">{{$t('First Name')}}</div>
                        <el-input v-model="formLabelAlign.name"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :lg="10">
                      <el-form-item>
                        <div slot="label" class="account-form-label">{{$t('Last Name')}}</div>
                        <el-input v-model="formLabelAlign.region"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :lg="24">
                      <el-form-item>
                        <div slot="label" class="account-form-label">{{$t('Phone number')}}</div>
                        <el-input v-model="formLabelAlign.type"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :lg="24">
                      <el-form-item>
                        <div slot="label" class="account-form-label">{{$t('Email address')}}</div>
                        <el-input v-model="formLabelAlign.type"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :lg="24">
                      <el-form-item>
                        <div slot="label" class="account-form-label">{{$t('Address')}}</div>
                        <el-input v-model="formLabelAlign.type"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :lg="24" class="submit-button">
                      <el-button>{{$t('Update Changes')}}</el-button>
                    </el-col>
                  </el-row>
                </el-form>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <div slot="label" class="left-tab">
          <i class="el-icon-third-plane"></i> {{$t('Travel preferences')}}
        </div>
        <div class="right-layout">
          <div class="preferences-header">{{$t('Your travel preferences')}}</div>
          <div class="preferences-sub-header">
            {{$t('Tell us how you like to travel so that we can customise your search. ')}}
          </div>
          <div class="account-form">
            <el-row>
              <el-col :lg="24" class="account-form-right">
                <el-form label-position="top" label-width="80px" :model="formLabelAlign">
                  <el-row>
                    <el-col :lg="8">
                      <el-form-item>
                        <div slot="label" class="account-form-label">{{$t('Star rating')}}</div>
                        <el-select v-model="value" filterable placeholder="请选择">
                          <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <div slot="label" class="left-tab">
          <i class="el-icon-third-email"></i> {{$t('Newsletter settings')}}
        </div>
        <div class="right-layout">
          <div class="preferences-header">{{$t('Newsletter settings')}}</div>
          <div class="preferences-sub-header">
            {{$t('Deals and recommendations sent straight to your inbox')}}
          </div>
          <div class="account-form">
            <el-row>
              <el-col :lg="24" class="account-form-right">
                <el-form label-position="top" label-width="80px" :model="formLabelAlign">
                  <el-row>
                    <el-col :lg="8">
                      <el-form-item>
                        <div slot="label" class="account-form-label">{{$t('Star rating')}}</div>
                        <el-select v-model="value" filterable placeholder="请选择">
                          <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import countries from 'i18n-iso-countries'

countries.registerLocale(require('i18n-iso-countries/langs/en.json'))

export default {
  name: 'preferences',
  data() {
    const rulesUserForm = {
      firstName: [
        {
          required: true,
          message: this.$t('Please Input Your First Name'),
          trigger: 'blur',
        },
      ],
      lastName: [
        {
          required: true,
          message: this.$t('Please Input Your Last Name'),
          trigger: 'blur',
        },
      ],
    }
    const CountryLang = countries.getNames('en')
    const countryList = []
    Object.keys(CountryLang).forEach((key) => {
      countryList.push({
        value: key,
        label: CountryLang[key],
      })
    })
    return {
      userInfo: {
        firstName: 'John',
        lastName: 'Smith',
        birthday: null,
        country: null,
        avatar: 'https://source.unsplash.com/120x120/?book,library',
      },
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
      },
      countryList,
      rulesUserForm,
      options: [{
        value: '选项1',
        label: '黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶',
      }, {
        value: '选项3',
        label: '蚵仔煎',
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
      }],
      value: '',
    }
  },
  methods: {
    changePersonalDetail() {
      this.$refs.userInfoForm.validate((valid) => {
        if (valid) {
          console.log(this.userInfo)
        } else {
          console.log('error submit!!')
        }
        return false
      })
    },
  },
}
</script>

<style lang='scss'>
  @import '../../../common/style/common';
  .preferences-layout{
    margin-top: 50px;
  }
.left-tab{
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  margin: 22px 0 !important;
  color: $black4;
  i{
    font-size: 18px;
    width: 25px;
    text-align: center;
    margin-right: 25px;
  }
}
  .el-tabs__item{
    border-bottom: 1px solid $black3;
    padding: 0!important;
    width: 260px;
    &.is-active{
      .left-tab{
        color: $blue4;
      }
    }
    &:last-child{
      border-bottom: none;
    }
  }
  .el-tabs__nav-wrap::after, .el-tabs__active-bar{
    background-color: transparent;
  }
  .right-layout{
    padding: 16px 80px;
  }
  .preferences-header{
    color: $black5;
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
  }
  .preferences-sub-header{
    color: $black6;
    font-size: 14px;
    line-height: 20px;
  }
  .account-form{
    padding: 16px 0;
    .avatar{
      width: 110px;
      height: 110px;
      border-radius: 55px;
      overflow: hidden;
    }
    .avatar-btn{
      margin: 12px 0;
      font-size: 14px;
      line-height: 20px;
      color: $blue4;
      cursor: pointer;
    }
    .account-form-left{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .account-form-right{
      .el-col{
        padding: 0 10px;
        margin-top: 30px;
        .account-form-label{
          font-size: 14px;
          line-height: 20px;
          color: $black5;
          display: inline-block;
        }
        .el-input{
          display: flex;
        }
        .el-input__inner{
          padding: 20px 25px;
          -webkit-box-sizing: content-box;
          box-sizing: content-box;
          height: 20px;
          font-size: 18px;
          line-height: 20px;
          flex-grow: 1;
        }
        .el-date-editor.el-input{
          width: auto;
          flex-grow: 1;
        }
        .el-form-item__content{
          display: flex;
          .el-select{
            flex-grow: 1;
          }
        }
      }
      .submit-button{
        display: flex;
        margin-top: 10px;
        justify-content: flex-end;
        button{
          font-size: 14px;
          line-height: 20px;
          color: $white1;
          background-color: $blue4;
        }
      }
    }
  }
</style>
