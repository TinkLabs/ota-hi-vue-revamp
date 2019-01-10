<template>
  <div class="list-item">
    <div class="preview">
      <!--  -->
    </div>
    <div class="info">
      <div class="name">
        {{ '2012-12-12' | calendar }}
        <!--  -->
      </div>
      <div class="info">
        <!--  -->
        <div class="left">
          <!--  -->
          <p class="stars-loc">
            <span class="stars">
              <i class="fas fa-star" />
            </span>
          </p>
        </div>
        <div class="right" />
      </div>
    </div>
  </div>
</template>

<script>
const test = {
  images: [
    {
      src:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
    },
    {
      src:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
    },
    {
      src:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547007108300&di=2eeb616e116bf254605ceae86abd61ba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F337c323b7a7240a7b16ab211672682ec.jpeg',
    },
  ],
  name: 'Sheraton Grand London Park Lane',
  star_rating: 4,
  address: 'Westminster Borough',
  city: 'London',
  nights: 1,
  rating: 8.9,
  reviews: 43,
  freeCanel: false,
  Amenities: [1, 2],
  remain: 98,
  price: 291,
  originPrice: 391,
  currency: 'HK$',
}

export default {
  computed: {
    data() {
      return test
    },
  },
}
</script>

<style lang="scss">
.list-item {
  width: 812px;
  height: 223px;
  overflow: hidden;
  margin-bottom: 22px;
  border-radius: 5px;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  .preview {
    width: 276px;
    height: 223px;
    background: #aaa;
  }
}
</style>
