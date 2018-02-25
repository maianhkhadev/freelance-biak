<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-8">
        <ul class="nav">
          <li class="nav-item">
            <a href="#" class="nav-link active">All</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Food</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Berverage</a>
          </li>
        </ul>
      </div>
      <div class="col-xl-4">
        <input type="text" placeholder="Enter keywords" class="form-control">
      </div>
    </div>
    <div class="row">
      <template v-for="n in 15">
        <div class="col-xl-4">
          <post></post>
        </div>
      </template>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <ul class="pagination">
          <li class="page-item">
            <a href="/tin-tuc?page=1" class="page-link">1</a>
          </li>
          <li class="page-item">
            <a href="/tin-tuc?page=2" class="page-link">2</a>
          </li>
          <li class="page-item">
            <a href="/tin-tuc?page=3" class="page-link">3</a>
          </li>
          <li class="page-item">
            <a href="/tin-tuc?page=4" class="page-link">4</a>
          </li>
          <li class="page-item">
            <a href="/tin-tuc?page=5" class="page-link">5</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Post from '@/components/blocks/post/index'

  export default {
    components: {
      'post': Post
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  .pagination {
    list-style-type: none;
    -webkit-padding-start: unset;

    .page-item {
      display: inline-block;
    }
  }
</style>
