<template>
  <div class="page">
    <div class="page-header">
      <div class="row">
        <div class="col-xl-12">
          <router-link class="btn btn-mondo" :to="{ name: 'CreateArticle' }">Create a new Article</router-link>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="row">
        <template v-for="article in articles">
          <div class="col-xl-4">
            <div class="article">
              <div class="status-box" :class="[{ 'active': article.status }]">
                <i class="fa fa-circle" aria-hidden="true"></i>
              </div>
              <div class="thumbnail" :style="{ 'background-image': `url(${article.thumbnail_url})` }"></div>
              <div class="date">{{ article.updated_at }}</div>
              <div class="title">{{ article.title }}</div>
              <div class="description">{{ article.description }}</div>
              <div class="actions">
                <router-link class="btn btn-mondo" :to="{ name: 'ViewArticle', params: { id: article.id } }">View</router-link>
                <router-link class="btn btn-mondo" :to="{ name: 'EditArticle', params: { id: article.id } }">Edit</router-link>
                <button class="btn btn-mondo">Delete</button>
              </div>
            </div>
          </div>
        </template>

        <div class="col-xl-12">
          <template v-if="articles.length === 0">
            <div class="no-data">No Data Found</div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '@/plugins/axios'

  export default {
    data () {
      return {
        articles: []
      }
    },
    mounted () {
      let self = this

      axios.get('/articles').then(res => {
        self.articles = res.data
      }).catch(error => {

      })
    }
  }
</script>

<style lang="scss" scoped>
  .page {

    .page-header {
      margin-bottom: 1.5rem;
    }
    .page-content {

      .article {
        position: relative;
        display: flex;
        flex-direction: column;
        height: calc(100% - 2.25rem);
        margin-bottom: 2.25rem;

        .status-box {
          position: absolute;
          left: 0;
          top: 0;
          color: #ffffff;
          background-color: rgba(#000000, 0.5);

          i {
            padding: 0.5rem 0.75rem;
          }

          &.active i {
            color: #42b72a;
          }
          &.disable i {
            color: #9e9e9e;
          }
        }

        .thumbnail {
          background-image: url('~@/assets/images/thumbnail.jpg');
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          padding-top: 50%;
          margin-bottom: 0.75rem;
        }
        .date {
          font-size: 0.75rem;
        }
        .title {
          color: #7d644b;
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        .description {
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        .actions {
          margin-top: auto;
        }
      }

      .no-data {
        color: #999999;
        font-size: 1rem;
        text-align: center;
      }
    }
  }
</style>
