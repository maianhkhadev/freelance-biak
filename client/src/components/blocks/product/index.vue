<template>
  <div class="block" v-on:click="click">
    <img class="img-fluid" src="/static/images/products/im-01.jpg" alt="" />
    <!-- <div class="block-content">
      <div class="title">Body Wash Cream</div>
      <div class="price">500.000<sup>đ</sup></div>
    </div> -->
  </div>
</template>

<script>
  export default {
    methods: {
      click: function () {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .block {
    position: relative;
    background-color: #ffffff;
    padding: 0.25rem;
    margin-bottom: 2.25rem;
    cursor: pointer;

    .block-content {
      text-align: center;
      padding: 0.75rem;

      .title {
        color: #000000;
        font-size: 1.125rem;
        text-transform: uppercase;
      }
      .price {
        font-size: 1rem;
        text-transform: uppercase;
      }
    }
  }
</style>
