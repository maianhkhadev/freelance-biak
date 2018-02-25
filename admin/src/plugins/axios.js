import axios from 'axios'

export let token = {
  request: function () {
    let token = localStorage.getItem('access_token')

    axios.post(`${process.env.OAUTH_URL}/token`, {
      grant_type: 'password',
      client_id: '1',
      client_secret: 'VpsnlLzzCcXa7aJuA2pcnxRLHZKH0w77lJmnmbGU',
      username: 'maianhkha.dev@gmail.com',
      password: 'anhkha1811',
      scope: ''
    }).then(res => {
      localStorage.setItem('access_token', res.data.access_token)
      localStorage.setItem('refresh_token', res.data.refresh_token)
    }).catch(error => {
      console.log(error)
    })
  },
  refresh: function () {
    let token = localStorage.getItem('refresh_token')

    axios.post(`${process.env.OAUTH_URL}/token`, {
      'grant_type': 'refresh_token',
      'refresh_token': token,
      'client_id': '1',
      'client_secret': 'VpsnlLzzCcXa7aJuA2pcnxRLHZKH0w77lJmnmbGU',
      'scope': ''
    }).then(res => {
      localStorage.setItem('access_token', res.data.access_token)
      localStorage.setItem('refresh_token', res.data.refresh_token)
    }).catch(error => {
      console.log(error)
    })
  }
}

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Accept': 'application/json'
  }
})

instance.interceptors.request.use(options => {
  let token = localStorage.getItem('access_token')
  options.headers['Authorization'] = `Bearer ${token}`

  return options;
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

export default instance
