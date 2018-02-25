// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './layouts/default/index'
import router from './router'

Vue.config.productionTip = false

require('@/plugins/window-extensions')

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  template: '<Root />',
  components: { Root }
})
