<template>
    <div class="checkout-header-view header">
        <header>
            <div class='logo-img logo'>
                <img
                    src="../../images/homepage/hi_DotComLogo@3x.png"
                    alt="hi.com logo"
                >
            </div>
            <ul>
                <li class="progessbar__item">
                    <p class="progessbar__flag"><span>1</span></p>
                    <p>Customer information</p>
                </li>
                <li class="progessbar__item">
                    <p class="progessbar__flag"><span>1</span></p>
                    <p>Customer information</p>
                </li>
                <li class="progessbar__item">
                    <p class="progessbar__flag"><span>1</span></p>
                    <p>Customer information</p>
                </li>
            </ul>
            <div class="support-us">
                <i class="fal fa-headset"></i>
                <span>Customer Suport</span>
                <span>24/7</span>
            </div>
        </header>
    </div>
</template>
<style lang="scss" scoped>
@import '../../common/main.scss';

.header{
    
    header{
         padding: 10px 12%;
         display: flex;
         justify-content: space-between;
          span {
      display: inline-clock;
    }
    .logo {
      // height:60px;
      // line-height:60px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 100px;
      }
      span {
        font-weight: bold;
        font-size: 16px;
        margin-left: 57px;
      }
    }
    }
}

</style>