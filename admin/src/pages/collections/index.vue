<template>
  <div class="page">
    <div class="page-header">
      <div class="row">
        <div class="col-xl-12">
          <router-link class="btn btn-mondo" :to="{ name: 'CreateCollection' }">Create a new Collection</router-link>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="row">
        <div class="col-xl-12">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th width="400">Date</th>
                <th width="200">Actions</th>
              </tr>
            </thead>
            <tbody>
            <template v-for="collection in collections">
              <tr class="collection">
                <td><div class="name">{{ collection.name }}</div></td>
                <td><div class="date">{{ collection.updated_at }}</div></td>
                <td>
                  <div class="actions">
                    <router-link class="btn btn-mondo" :to="{ name: 'EditCollection', params: { id: collection.id } }">Edit</router-link>
                    <button class="btn btn-mondo">Delete</button>
                  </div>
                </td>
              </tr>
            </template>
            </tbody>
          </table>

          <template v-if="collections.length === 0">
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
        collections: []
      }
    },
    mounted () {
      let self = this

      axios.get('/collections').then(res => {
        self.collections = res.data
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
      .table th, .table td {
        vertical-align: middle;
      }
      .collection {

        .name {
          color: #000000;
          font-size: 1.25rem;
        }
        .date {
          color: #000000;
          font-size: 1rem;
        }
        .actions {

          button {
            margin-right: 0.5rem;
          }
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
