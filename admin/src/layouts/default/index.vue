<template>
  <div>
    <layout-header></layout-header>

    <main role="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import { token } from '@/plugins/axios'
  import Header from './header/index'

  export default {
    components: {
      'layout-header': Header
    },
    mounted () {
      token.request()
    }
  }
</script>

<style lang="scss" src="@/assets/scss/main.scss"></style>
