<template>
    <div class="checkout-header-view header">
        <header>
            <div class='logo-img logo'>
                <img
                    src="../../images/homepage/hi_DotComLogo@3x.png"
                    alt="hi.com logo"
                >
            </div>
            <div class="progessbar__box">
                <ul>
                    <li class="progessbar__item item-complete">
                        <p class="progessbar__flag"><span>1</span></p>
                        <p>Customer information</p>
                    </li>
                    <li class="progessbar__item item-complete">
                        <p class="progessbar__flag"><span>2</span></p>
                        <p>Payment information</p>
                    </li>
                    <li class="progessbar__item">
                        <p class="progessbar__flag"><i class="fal fa-check">3</i></p>
                        <p>Booking is confirmed</p>
                    </li>
                </ul>
            </div>
            <div class="support-us">
                <i class="fal fa-headset"></i>
                <span>Customer Suport</span>
                <span class="statistics">24/7</span>
            </div>
        </header>
    </div>
</template>
<style lang="scss" scoped>
@import '../../common/main.scss';
$light-blue:#4574eb;
$white:#fff;

.header{
   width:100%;
   overflow: hidden;
   zoom: 1;
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
        .progessbar__box{
            width:60%;
            >ul{
                width:100%;
                color:#888;
                >li{
                    float:left;
                    width:calc(100% / 3);
                    @include font(12px, #888, MerriweatherSans);
                    >p{
                        text-align: center;
                        >span,>i{
                            width:20px;
                            height:20px;
                            line-height:20px;
                            display:inline-block;
                            border-radius:50%;
                            color: $white;
                            background-color:$light-blue;
                        }
                    }
                    .progessbar__flag{
                        margin-bottom: 12px;
                    }
                }
                .item-complete{
                    color:$light-blue;
                }
            }
        }
        .support-us{
            width:20%;
            @include font(12px,normal,$light-blue,MerriweatherSans);
            >i{
                float:left;
            }
            >span{
                float:left;
                margin-right:5px;
            }
        }
    }
}

</style>