import { token } from '@/plugins/axios'

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Posts from '@/pages/posts/index'
import ViewPost from '@/pages/posts/view/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }, {
      path: '/posts/:id',
      name: 'ViewPost',
      component: ViewPost
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.fullPath === "/test") {
    token.request()
  } else {
    next()
  }
})

export default router

// , {
//   path: '/authorize',
//   beforeEnter: (to, from, next) => {
//     $query = http_build_query([
//         'client_id' => 3, // Replace with Client ID
//         'redirect_uri' => 'http://127.0.0.1:8080/callback',
//         'response_type' => 'code',
//         'scope' => ''
//     ]);
//
//     return redirect('http://127.0.0.1:8000/oauth/authorize?'.$query);
//   }
// }, {
//   path: '/callback',
//   beforeEnter: (to, from, next) => {
//     $response = (new GuzzleHttp\Client)->post('http://127.0.0.1:8000/oauth/token', [
//         'form_params' => [
//             'grant_type' => 'authorization_code',
//             'client_id' => 3, // Replace with Client ID
//             'client_secret' => 'CLIENT_SECRET', // Replace with client secret
//             'redirect_uri' => 'http://127.0.0.1:8080/callback',
//             'code' => $request->code,
//         ]
//     ]);
//
//     debugger;
//   }
// }
