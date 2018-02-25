<template>
  <div class="section-01">
    <slick :options="slick.options">
      <div v-for="banner in banners">
        <div class="banner">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 offset-1">
                <div class="title">Beauty in a kiss</div>
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus erat ultricies erat condimentum convallis. Ut mauris eros, lobortis quis velit vel.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </slick>
  </div>
</template>

<script>
  import Slick from '@/components/libraries/slick'

  export default {
    data () {
      return {
        slick: {
          options: {
            dots: false,
            arrows: false
          }
        },
        banners: [
          {
            image: {
              src: require('@/assets/images/pages/home/section-01/bim-01.jpg'),
              alt: 'Beauty in a kiss'
            }
          }, {
            image: {
              src: require('@/assets/images/pages/home/section-01/bim-02.jpg'),
              alt: 'Beauty in a kiss'
            }
          }, {
            image: {
              src: require('@/assets/images/pages/home/section-01/bim-03.jpg'),
              alt: 'Beauty in a kiss'
            }
          }
        ]
      }
    },
    components: {
      'slick': Slick
    }
  }
</script>

<style lang="scss" scoped>
  .section-01 {

    .banner {
      background-image: url('~@/assets/images/pages/home/section-01/bim-01.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      padding-top: 8rem;
      padding-bottom: 8rem;

      .title {
        color: #000000;
        font-size: 4.25rem;
        font-family: 'DancingScript';
        font-weight: 700;
      }
      .content {
        color: #000000;
        font-size: 1rem;
        font-family: 'DancingScript';
      }
    }
  }
</style>
