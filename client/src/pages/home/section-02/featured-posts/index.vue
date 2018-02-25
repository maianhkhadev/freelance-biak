<template>
  <div class="wrapper">
    <div class="block block-01">
      <div class="block-content">
        <div class="date">Dec. 11, 2017</div>
        <div class="title">Simba beauty cosmetics</div>
      </div>
    </div>
    <div class="block block-02">
      <div class="block-content">
        <div class="date">Dec. 11, 2017</div>
        <div class="title">Simba beauty cosmetics</div>
      </div>
    </div>
    <div class="block block-03">
      <div class="block-content">
        <div class="date">Dec. 11, 2017</div>
        <div class="title">Simba beauty cosmetics</div>
      </div>
    </div>
    <div class="block block-04">
      <div class="block-content">
        <div class="date">Dec. 11, 2017</div>
        <div class="title">Simba beauty cosmetics</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        posts: [
          {
            thumbnail: {
              src: '/static/images/posts/im-01.jpg',
              alt: ''
            }
          }, {
            thumbnail: {
              src: '/static/images/posts/im-01.jpg',
              alt: ''
            }
          }, {
            thumbnail: {
              src: '/static/images/posts/im-01.jpg',
              alt: ''
            }
          }, {
            thumbnail: {
              src: '/static/images/posts/im-01.jpg',
              alt: ''
            }
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    display: grid;
    grid-gap: 0.25rem;
    grid-template-columns: [col-01] 25% [col-02] 25% [col-03] 25% [col-04] 25% [col-05];
    grid-template-rows: [row-01] auto [row-02] auto [row-03];
    margin-bottom: 2.25rem;
  }

  .block {
    position: relative;
    background-image: url('/static/images/posts/im-01.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 50%;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%);
    }

    .block-content {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 1.25rem;

      .date {
        color: #ffffff;
      }
      .title {
        color: #ffffff;
        font-weight: 600;
        line-height: 1.2;
      }
    }
  }

  .block-01 {
    grid-column: col-01 / col-03;
    grid-row: row-01 / row-03;

    .date {
      font-size: 1rem;
    }
    .title {
      font-size: 1.75rem;
    }
  }
  .block-02 {
    grid-column: col-03 / col-05;
    grid-row: row-01 / row-02;

    .date {
      font-size: 0.875rem;
    }
    .title {
      font-size: 1.375rem;
    }
  }
  .block-03 {
    grid-column: col-03 / col-04;
    grid-row: row-02 / row-03;

    .date {
      font-size: 0.75rem;
    }
    .title {
      font-size: 1rem;
    }
  }
  .block-04 {
    grid-column: col-04 / col-05;
    grid-row: row-02 / row-03;

    .date {
      font-size: 0.75rem;
    }
    .title {
      font-size: 1rem;
    }
  }
</style>
