<template>
    <div class="checkout-header-view header">
        <header>
            <div class='logo-img logo'>
                <img
                    src="../../images/homepage/hi_DotComLogo@3x.png"
                    alt="hi.com logo"
                >
            </div>
            <div class="progressbar__box">
                <div class="progressbar-line"></div>
                <ul>
                    <li class="progressbar__item item-complete">
                        <p class="progressbar__flag"><span>1</span></p>
                        <p>Customer information</p>
                    </li>
                    <li class="progressbar__item item-complete">
                        <p class="progressbar__flag"><span>2</span></p>
                        <p>Payment information</p>
                    </li>
                    <li class="progressbar__item">
                        <p class="progressbar__flag"><span class="fal fa-check">3</span></p>
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
$light-blue:#4474ea;
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
        .progressbar__box{
            width:60%;
            margin-top:1%;
            position:relative;
            >ul{
                width:100%;
                color:#888;
                overflow: hidden;
                zoom: 1;
                margin-top:-2%;
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
                    .progressbar__flag{
                        margin-bottom: 12px;
                    }
                }
                .item-complete{
                    color:$light-blue;
                }
            }
            .progressbar-line{
                margin: 0 auto;
                // position:absolute;
                // top:3%;
                // left:5%;
                margin-left:15%;
                width:70%;
                height: 6px;
                background-color: #eaeaea;
                border-radius: 3px;
            }
        }
        .support-us{
            width:13%;
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