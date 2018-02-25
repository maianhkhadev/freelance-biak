import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Collections from '@/pages/collections/index'
import CreateCollection from '@/pages/collections/create/index'
import EditCollection from '@/pages/collections/edit/index'
import Articles from '@/pages/articles/index'
import CreateArticle from '@/pages/articles/create/index'
import ViewArticle from '@/pages/articles/view/index'
import EditArticle from '@/pages/articles/edit/index'
import Subscribers from '@/pages/subscribers/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/collections',
      name: 'Collections',
      component: Collections
    }, {
      path: '/collections/create',
      name: 'CreateCollection',
      component: CreateCollection
    }, {
      path: '/collections/:id/edit',
      name: 'EditCollection',
      component: EditCollection
    }, {
      path: '/articles',
      name: 'Articles',
      component: Articles
    }, {
      path: '/articles/create',
      name: 'CreateArticle',
      component: CreateArticle
    }, {
      path: '/articles/:id',
      name: 'ViewArticle',
      component: ViewArticle
    }, {
      path: '/articles/:id/edit',
      name: 'EditArticle',
      component: EditArticle
    }, {
      path: '/subscribers',
      name: 'Subscribers',
      component: Subscribers
    }
  ]
})
