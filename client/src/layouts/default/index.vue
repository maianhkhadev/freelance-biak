<template>
  <div>
    <vue-header></vue-header>

    <main role="main">
      <router-view></router-view>
    </main>

    <vue-footer></vue-footer>
  </div>
</template>

<script>
  import Header from './header/index'
  import Footer from './footer/index'

  export default {
    components: {
      'vue-header': Header,
      'vue-footer': Footer
    }
  }
</script>

<style lang="scss" src="@/assets/scss/main.scss"></style>
