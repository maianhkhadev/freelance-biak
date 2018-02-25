<template>
  <div class="page">
    <div class="page-header">
      <div class="row">
        <div class="col-xl-6">
          <div class="title">Overview Article</div>
          <div class="breadcumb">
            <ul>
              <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
              <li><router-link :to="{ name: 'Articles' }">Articles</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="row">
        <div class="col-xl-9">
          <div class="title">{{ data.title }}</div>
          <div class="date">{{ data.updated_at }}</div>
          <div class="thumbnail"></div>
          <div class="content" v-html="data.content"></div>
        </div>
        <div class="col-xl-12" style="display: none;">
          <div class="form-group">
            <editor ref="editor" class="editor-container"></editor>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6 mt-2">
          <button class="btn btn-mondo" v-on:click="back">Back to Index</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '@/plugins/axios'
  import Editor from '@/libraries/editor'

  export default {
    data () {
      return {
        data: {
          title: '',
          description: '',
          content: '',
          collection_id: 0,
          status: 0
        }
      }
    },
    components: {
      'editor': Editor
    },
    methods: {
      back: function () {
        let self = this
        self.$router.push({ name: 'Articles' })
      }
    },
    mounted () {
      let self = this

      let id = self.$router.currentRoute.params.id
      axios.get(`/articles/${id}`).then(res => {
        self.data.id = res.data.id
        self.data.title = res.data.title
        self.data.description = res.data.description
        self.data.collection_id = res.data.collection_id
        self.data.status = res.data.status
        self.data.updated_at = res.data.updated_at

        let content = JSON.parse(res.data.content)
        self.$refs.editor.setContents(content)
        self.data.content = self.$refs.editor.html()

        var thumbnail = document.querySelector('.thumbnail')
        thumbnail.style['background-image'] = `url(${res.data.thumbnail_url})`
      })

    }
  }
</script>

<style lang="scss" scoped>
  .page {
    padding-bottom: 1.25rem;

    .page-header {
      margin-bottom: 1.25rem;

      .title {
        font-size: 1.875rem;
        font-weight: 700;
      }
    }

    .page-content {

      .title {
        color: #000000;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.2;
      }
      .date {
        color: #000000;
        font-size: 1rem;
        margin-bottom: 1.25rem;
      }
      .thumbnail {
        background-image: url('~@/assets/images/thumbnail.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        padding-top: 35%;
        margin-bottom: 1.75rem;
      }
    }
  }
</style>
