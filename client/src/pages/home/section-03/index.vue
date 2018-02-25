<template>
  <div class="section">
    <div class="container">
      <div class="section-header">
        <div class="row">
          <div class="col-xl-6 mx-auto text-center">
            <div class="title">Đánh giá sản phẩm</div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus erat ultricies erat condimentum convallis. Ut mauris eros, lobortis quis velit vel.
            </div>
          </div>
        </div>
      </div>
      <div class="section-content">
        <div class="row">
          <template v-for="n in 4">
            <div class="col-xl-3">
              <product></product>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Product from '@/components/blocks/product/index'

  export default {
    components: {
      'product': Product
    }
  }
</script>

<style lang="scss" scoped>
  .section {
    padding-top: 5rem;
    padding-bottom: 5rem;

    .section-header {
      margin-bottom: 3rem;

      .title {
        color: #000000;
        font-size: 2.5rem;
        font-weight: 500;
        text-transform: uppercase;
      }
      .content {
        color: #000000;
        font-size: 1rem;
      }
    }
    .section-content {
      margin-bottom: -2.25rem;
    }
  }
</style>
