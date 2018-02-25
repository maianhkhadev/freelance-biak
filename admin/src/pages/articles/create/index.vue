<template>
  <div class="page">
    <div class="page-header">
      <div class="row">
        <div class="col-xl-6">
          <div class="title">New Article</div>
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
        <div class="col-xl-6">
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="data.title">
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" rows="3" maxlength="190" v-model="data.description"></textarea>
          </div>
          <div class="form-group">
            <label>Collection</label>
            <select class="form-control" v-model="data.collection_id">
              <option value="1">Collection 01</option>
              <option value="2">Collection 02</option>
              <option value="3">Collection 03</option>
            </select>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="form-group">
            <label>Thumbnail</label>
            <div class="thumbnail">
              <button class="btn btn-default" v-on:click="review">
                <i class="fa fa-upload"></i>
              </button>
            </div>
          </div>
          <div class="form-group">
            <label>Status</label>
            <select class="form-control" v-model="data.status">
              <option value="1">Active</option>
              <option value="0">Disable</option>
            </select>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="form-group">
            <label>Content</label>
            <editor ref="editor" class="editor-container"></editor>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6 mt-2">
          <button class="btn btn-mondo" v-on:click="save">Save & Close</button>
          <button class="btn btn-mondo" v-on:click="cancel">Cancel</button>
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
          collection_id: 0,
          status: 0
        },
        file: null
      }
    },
    components: {
      'editor': Editor
    },
    methods: {
      review: function () {
        let self = this

        let node = document.createElement('input')
        node.setAttribute('type', 'file')
        node.addEventListener('change', function () {
          if (this.files && this.files[0]) {
            self.file = this.files[0]

            var reader = new FileReader();
            reader.onload = function (e) {
              var thumbnail = document.querySelector('.thumbnail')
              thumbnail.style['background-image'] = `url(${e.target.result})`
            };
            reader.readAsDataURL(this.files[0]);
          }
        })
        node.click()
      },
      save: function () {
        let self = this

        let formData = new FormData()
        formData.append('title', self.data.title)
        formData.append('description', self.data.description)
        formData.append('collection_id', self.data.collection_id)
        formData.append('status', self.data.status)

        if(self.file !== null) {
          formData.append('thumbnail', self.file)
        }

        let { content, blods } = self.$refs.editor.storeData()
        formData.append('content', JSON.stringify(content))
        blods.forEach(function (blod) {
          formData.append('blods[]', blod)
        })

        axios.post('/articles', formData).then(res => {
          if (res.status === 200) {
            self.$router.push({ name: 'ViewArticle', params: { id: res.data.id } })
          }
        }).catch(error => {

        })
      },
      cancel: function () {
        let self = this
        self.$router.push({ name: 'Articles' })
      }
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

      label {
        color: #534741;
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
      button {
        padding: 0.5rem 1.25rem;
        margin-right: 0.5rem;
      }
      .thumbnail {
        position: relative;
        background-image: url('~@/assets/images/thumbnail.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        padding-top: 12.25rem;

        button {
          position: absolute;
          left: 50%;
          bottom: 50%;
          color: #ffffff;
          background-color: transparent;
          font-size: 2.5rem;
          border: 0.125rem dashed #ffffff;
          padding: 0.75rem 1.75rem;
          transform: translate(-50%, 50%);

          &:focus {
            box-shadow: unset;
          }
        }
      }
      .form-control {
        color: #534741;
        font-size: 1rem;
        padding: 0.75rem 1rem;
        border: 0.0625rem solid rgba(#534741, 0.42);
        border-radius: unset;

        &:hover {
          border-color: rgba(#534741, 0.87);
        }
        &:focus {
          border-color: rgba(#534741, 1);
          box-shadow: unset;
        }
      }
      .editor-container {
        height: 25rem;
      }
    }
  }
</style>
