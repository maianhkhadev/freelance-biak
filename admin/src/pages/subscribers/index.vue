<template>
  <div class="page">
    <div class="page-content">
      <div class="row">
        <div class="col-xl-12">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th width="300">Date</th>
              </tr>
            </thead>
            <tbody>
            <template v-for="subscriber in subscribers">
              <tr class="subscriber">
                <td><div class="name">{{ subscriber.name }}</div></td>
                <td><div class="name">{{ subscriber.email }}</div></td>
                <td><div class="date">{{ subscriber.updated_at }}</div></td>
              </tr>
            </template>
            </tbody>
          </table>

          <div class="no-data">No data found</div>
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
        subscribers: []
      }
    },
    mounted () {
      let self = this

      axios.get('/subscribers').then(res => {
        console.log(res)
        self.subscribers = res.data
      }).catch(error => {

      })
    }
  }
</script>

<style lang="scss" scoped>
  .page {

    .page-content {
      .table th, .table td {
        vertical-align: middle;
      }
      .subscriber {

        .name {
          color: #000000;
          font-size: 1.25rem;
        }
        .email {
          color: #000000;
          font-size: 1.25rem;
        }
        .date {
          color: #000000;
          font-size: 1rem;
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
