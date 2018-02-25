<template>
  <div class="section">
    <div class="container">
      <div class="section-content">
        <div class="row">
          <div class="col-xl-12">
            <featured-posts></featured-posts>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="collection-name">GROUP 01</div>
          </div>
          <template v-for="n in 3">
            <div class="col-xl-4">
              <post></post>
            </div>
          </template>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="collection-name">GROUP 02</div>
          </div>
          <template v-for="n in 3">
            <div class="col-xl-4">
              <post></post>
            </div>
          </template>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="collection-name">GROUP 03</div>
          </div>
          <template v-for="n in 3">
            <div class="col-xl-4">
              <post></post>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FeaturedPosts from './featured-posts/index'
  import Post from '@/components/blocks/post/index'

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
    },
    components: {
      'featured-posts': FeaturedPosts,
      'post': Post
    }
  }
</script>

<style lang="scss" scoped>
  .section {
    padding-top: 5rem;
    padding-bottom: 2.75rem;

    .collection-name {
      color: #000000;
      font-size: 1.5rem;
      font-weight: 500;
      text-transform: uppercase;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  }
</style>
