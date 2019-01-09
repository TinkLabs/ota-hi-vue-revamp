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
                <div class="progressbar-line">
                    <div class="progressbar-status"></div>
                </div>
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
                        <p class="progressbar__flag"><span class="el-icon-check font-check"></span></p>
                        <p>Booking is confirmed</p>
                    </li>
                </ul>
            </div>
            <div class="support-us">
                <i class="el-icon-service"></i>
                <span>Customer Suport</span>
                <span class="statistics">24/7</span>
            </div>
        </header>
    </div>
</template>
<style lang="scss" scoped>
@import '../../common/main.scss';

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
                            color: #888;
                            background-color:#eaeaea;
                        }
                    }
                    .progressbar__flag{
                        margin-bottom: 12px;
                        .font-check{
                            @include font(11px,#888,MerriweatherSans);
                        }
                    }
                }
                .item-complete{
                    p{
                        >span{
                            background-color: $dark-blue;
                            color:$main_color4 !important;
                        }
                    }
                    // color:$main_color4 !important;
                }
            }
            .progressbar-line{
                margin: 0 auto;
                // position:absolute;
                // top:3%;
                // left:5%;
                margin-left:17%;
                width:67%;
                height: 6px;
                background-color: #eaeaea;
                border-radius: 3px;
                .progressbar-status{
                    width:50%;
                    height:inherit;
                    background-color: $dark-blue;
                }
            }
        }
        .support-us{
            width:13%;
            @include font(12px,normal,$dark-blue,MerriweatherSans);
            >i{
                float:left;
                @include font(18px,bold,$dark-blue,MerriweatherSans);
            }
            >span{
                float:left;
                margin:0 5px;
            }
        }
    }
}

</style>