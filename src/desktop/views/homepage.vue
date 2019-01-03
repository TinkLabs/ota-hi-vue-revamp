<template>
    <div  class="home-view">
        <!--header  -->
        <Header></Header>

        <!-- content -->
        <div class="h-container">
          <div class="items" >
            <div class="featured">
              <h2 class="title">Featured</h2>
              <h1>4000 best hotels around the world</h1>
              <div class="view-hotel">View hotels now</div>


            </div>
            <div class="eat-like-locals">
              <h2 class="title">Eat Like Locals</h2>
              <div class="content">Lorem ipsum dolor</div>

            </div>
            <div class="find-gems">
              <h2 class="title">Find Hidden Gems</h2>
              <div class="content">Lorem ipsum dolor</div>

            </div>
            <div class="hot-deals">
              <h2 class="title">Hot Deals</h2>
              <div class="content">Lorem ipsum dolor</div>

            </div>
            <div class="handy">
              <h2 class="title">handy</h2>
              <div class="content">Your travelling companion</div>

            </div>
          </div>

          <!-- Top Destinations -->
          <div class="top-destination">
            <h1 class="title">Top Destinations</h1>
            <ul>
              <li v-for="item in destinationData">
                <!-- <img src="../images/homepage/Location Image@3x.png" alt=""> -->
                <img :src="item.img">
                <div class="content">
                  <h2 class="title">{{item.location}}</h2>
                  <p>{{item.price}}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- where to stay -->
          <div class="to-stay">
            <h1 class="title">Where to Stay</h1>
            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <ul>
              <li>
                <img src="../images/homepage/stay@3x.png" alt="">
                <div class="title">Tropical</div>
                <h2>Tropical</h2>
                <div class="hotel-num">62 Hotels</div>
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum ligula felis, tempor volutpat orci fermentum sagittis.
                </div>
              </li>
              <li class="city-life">
                <img src="../images/homepage/stay2@3x.png" alt="">
                <div class="title">City LIFE</div>
                <h2>City Life</h2>
                <div class="hotel-num">45 Hotels</div>
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum ligula felis, tempor volutpat orci fermentum sagittis.
                </div>
              </li>
            </ul>

          </div>
          <!--  Featured Hotels ???-->
          <div class="featured-hotels">
            <h1 class="title">Featured Hotels</h1>
            <ul>
              <li>
                <img src="../images/homepage/Hotel Image2@3x.png" alt="">
                <div class="hotel-location">Westminster Borough, London</div>
                <div class="hotel-name">London Marriott Hotel</div>
                <div class="hotel-price">
                  <span>$199</span>/night
                </div>
                <div class="stars">
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-off"></i>
                </div>
              </li>
              <li>
                <img src="../images/homepage/Hotel Image@3x.png" alt="">
                <div class="hotel-location">Kensington and Chelsea, London</div>
                <div class="hotel-name">The Kensingotn Hotel</div>
                <div class="hotel-price">
                  <span>$298</span>/night
                </div>
                <div class="stars">
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-on"></i>
                </div>
              </li>
              <li>
                <img src="../images/homepage/Hotel Image2@3x.png" alt="">
                <div class="hotel-location">Lambeth, London</div>
                <div class="hotel-name">Plaza on the River</div>
                <div class="hotel-price">
                  <span>$100</span>/night
                </div>
                <div class="stars">
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-off"></i>
                </div>

              </li>
              <li>
                <img src="../images/homepage/Hotel Image@3x.png" alt="">
                <div class="hotel-location">Lambeth, London</div>
                <div class="hotel-name">London Marriott Hotel</div>
                <div class="hotel-price">
                  <span>$90</span>/night
                </div>
                <div class="stars">
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-on"></i>
                  <i class="el-icon-star-on"></i>
                </div>

              </li>
            </ul>

          </div>

          <!-- subscribe -->
          <div class="subscribe">
            <p>Subscribe to our newsletter</p>
            <h1>Best deals directly to your inbox</h1>
            <div class="subscribe-input">
              <input type="text" placeholder="Enter your email address">
              <button>Join Today</button>
            </div>
          </div>
        </div>

        <!-- footer -->
        <Footer></Footer>
    </div>
</template>

<script>
  import Bus from '../component/bus'
  import Header from './includes/header.vue'
  import Footer from './includes/footer.vue'
  import locationImg from '../images/homepage/Location Image2@3x.png';
  import locationImg1 from '../images/homepage/Location Image4@3x.png';
  import locationImg2 from '../images/homepage/Location Image3@3x.png';
  import locationImg3 from '../images/homepage/Location Image4@3x.png';
  import locationImg4 from '../images/homepage/Location Image@3x.png';
  export default {
    name: "home",
    data(){
      return {
        destinationData:[{
          img:locationImg,
          location:'Sydney',
          price:'Average $000/night'
        },
        {
          img:locationImg1,
          location:'Dubai',
          price:'Average $000/night'
        },{
          img:locationImg2,
          location:'London',
          price:'Average $000/night'
        },{
          img:locationImg3,
          location:'Tokyo',
          price:'Average $000/night'
        },{
          img:locationImg4,
          location:'New York',
          price:'Average $000/night'
        }
        ]
      }
    },
    components:{
      Header,
      Footer
    },
    mounted() {
      const that = this;
      Bus.$on('scroll', (h)=>{
        console.log(that);
        that.isTop = !(h > 10);
      })
    },
    methods:{
      toggleModal(){
        console.log(this.display);
        this.display = "none" === this.display ? "flex" : "none";
      }
    }
  }


</script>

<style lang='less' scoped>
  html,body{
    width:100%;
  }
  .font (@font-size, @font-weight: normal, @color: #01337e,  @font-family: Segoe UI) {
    font-family: @font-family;
    font-size: @font-size;
    font-weight: @font-weight;
    color:@color;
  }
  @media screen and(max-width:1280px) {
    body {
      width: 1280px;
    }

  }
  .h-container{
    padding:0 12%;
    h1.title{
      .font(26px,600,#002b55,Montserrat);
      padding-bottom:20px;
    }
    .content{
      .font(16px,normal,#333333,MerriweatherSans);
      padding-bottom:20px;
    }
    >div{
      padding-bottom:50px;
      >ul{
        display:flex;
        justify-content: space-between;
        li{
          border-radius:5px;
          overflow: hidden;
        }
        img{
          width:100%;
        }
      }
    }

    .items{
      overflow: hidden;
      margin-top:-2.6%;
      // display:flex;
      // justify-content: space-between;
      // flex-wrap: wrap;
      >div{
        float: left;
        margin-left:1%;
        margin-bottom:1%;
        border-radius:5px;
        padding:2%;
        h2{
          .font(26px,400,#fff,Montserrat);
        }
        .content{
          .font(16px,normal,#fff,Merriweather);
        }
      }
      .featured{
        width:46%;
        // height:30%;
        // padding:2%;
        background-image: linear-gradient(to bottom, rgba(22, 46, 172,0.8), rgba(91, 181, 255,0.8));
        margin-left:0;
        h1{
          .font(40px,bold,#fff,Montserrat);
          margin-top:40px;
          width:320px;
        }
        .view-hotel{
          .font(16px,bold,#fff,MerriweatherSans);
          margin-top:150px;
          width:188px;
          text-align: center;
          padding:15px 20px;
          box-sizing: border-box;
          border:2px solid #fff;
          border-radius:5px;
        }
      }
      .featured ~ div{
        width:20% ;
        height:200px;
      }
      .eat-like-locals{
        background-image: linear-gradient(to top, rgba(20, 57, 169,0.8), rgba(23, 7, 58,0.8));
      }
      .find-gems{
        background-image: linear-gradient(to bottom, rgba(15, 117, 96,0.8), rgba(66, 184, 135,0.8));
      }
      .hot-deals{
        background-image: linear-gradient(to bottom, rgba(78, 16, 75,0.8), rgba(193, 79, 153,0.8));
      }
      .handy{
        background-image: linear-gradient(to bottom, rgba(186, 110, 17,0.8), rgba(255, 164, 39,0.8));
      }
    }
    // Top Destinations
    .top-destination{
      padding-bottom:50px;
      border-bottom:2px solid rgba(0, 43, 85,0.1);
      ul{
        li{
          width:19%;
          position: relative;
          .content{
            position: absolute;
            width:100%;
            bottom:4px;
            left:0;
            h2,p{
              width:100%;
              text-align: center;
            }

          }
          h2.title{
            .font(16px,bold,#fff,MerriweatherSans);
          }
          p{
            .font(12px,bold,#fff,MerriweatherSans);
            margin-top:4px;
          }
        }
      }
    }
    // where to stay
    .to-stay{
      margin-top:50px;
      ul{
        li{
          width:49%;
          position: relative;
          .title{
            position:absolute;
            width:100%;
            left:0;
            top:50%;
            transform:translate(0,-50%);
            text-align: center;
            font-size:90px;
            color:#fff;
            font-weight:lighter;
            font-family:Bonita;
            // .font(90px,200,#fff,Bonita);
          }
          h2{
            margin-top:10px;
            .font(20px,bolder,#333,MerriweatherSans);
          }
          .hotel-num{
            .font(14px,bold,#333,MerriweatherSans);
            margin:10px 0;
          }
          .content{
            .font(14px,normal,#333,MerriweatherSans);
          }
        }
      }
      .city-life{
        .title{
          font-size:80px;
          // .font(80px,200,#fff,HelveticaNeue);
        }
      }
    }
    // Featured Hotels
    .featured-hotels{
      ul{
        li{
          width:24%;
          .hotel-location{
            .font(12px,normal,#888,MerriweatherSans);
            margin-top:4px;
          }
          .hotel-name{
            .font(20px,bold,#333,MerriweatherSans);
            margin:6px 0;
          }
          .hotel-price{
            .font(16px,normal,#888,MerriweatherSans);
          }
          .stars{
            margin-top:10px;
            color:#fec800;
          }
        }
      }
    }

    // subscribe
    .subscribe{
      width:100%;
      padding:44px 80px;
      box-sizing: border-box;
      background-color: #d8d8d8;
      margin-bottom:60px;
      p{
        .font(21px,300,#002b55,Roboto);
      }
      h1{
        .font(21px,bold,#002b55,Roboto);
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
        border:none;

      }
      button{
        width:150px;
        height:50px;
        border-radius:0 4px  4px 0;
        background-color: #cba052;
        border:none;
        color:#fff;
        font-size: 14px;
      }
    }

  }

</style>
