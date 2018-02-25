<template>
  <div class="block" v-on:click="click">
    <img class="img-fluid" src="/static/images/posts/im-01.jpg" alt="" />
    <div class="block-content">
      <div class="date">Dec. 11, 2017</div>
      <div class="title">Simba beauty cosmetics</div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      click: function () {
        let self = this
        self.$router.push({ name: 'PostDetail', params: { id: 12 } })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .block {
    position: relative;
    margin-bottom: 2.25rem;
    cursor: pointer;

    .block-content {
      padding-top: 0.75rem;

      .date {
        font-size: 0.75rem;
      }
      .title {
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 0.75rem;
      }
    }
  }
</style>
