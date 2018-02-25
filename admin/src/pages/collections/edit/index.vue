<template>
  <div class="page">
    <div class="page-header">
      <div class="row">
        <div class="col-xl-6">
          <div class="title">Edit a Collection</div>
          <div class="breadcumb">
            <ul>
              <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
              <li><router-link :to="{ name: 'Collections' }">Collections</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="row">
        <div class="col-xl-6">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="data.name">
          </div>
          <div class="form-group">
            <label>Status</label>
            <select class="form-control" v-model="data.status">
              <option value="1">Active</option>
              <option value="0">Disable</option>
            </select>
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

  export default {
    data () {
      return {
        data: {}
      }
    },
    methods: {
      save: function () {
        let self = this

        let formData = new FormData()
        formData.append('_method', 'PUT')
        formData.append('name', self.data.name)
        formData.append('status', self.data.status)

        let id = self.$router.currentRoute.params.id
        axios.post(`/collections/${id}`, formData).then(res => {
          console.log(res)
          self.$router.push({ name: 'Collections' })
        }).catch(error => {

        })
      },
      cancel: function () {
        let self = this
        self.$router.push({ name: 'Collections' })
      }
    },
    mounted () {
      let self = this

      let id = self.$router.currentRoute.params.id
      axios.get(`/collections/${id}/edit`).then(res => {
        console.log(res)
        self.data = res.data
      }).catch(error => {

      })
    }
  }
</script>

<style lang="scss" scoped>
  .page {

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
      button {
        padding: 0.5rem 1.25rem;
        margin-right: 0.5rem;
      }
    }
  }
</style>
