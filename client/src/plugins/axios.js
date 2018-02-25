import axios from 'axios'

export let token = {
  request: function () {
    let token = localStorage.getItem('access_token')

    if (token === null) {
      axios.post(`${process.env.OAUTH_URL}/token`, {
        grant_type: 'password',
        client_id: '4',
        client_secret: '64sqM8o2ffoA3KesMxPPuRiYQQzb29vYnL2wzPzK',
        username: 'maianhkha.dev@gmail.com',
        password: 'anhkha1811',
        scope: ''
      }).then(res => {
        localStorage.setItem('access_token', res.data.access_token)
        localStorage.setItem('refresh_token', res.data.refresh_token)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  refresh: function () {
    let token = localStorage.getItem('refresh_token')

    axios.post(`${process.env.OAUTH_URL}/token`, {
      'grant_type': 'refresh_token',
      'refresh_token': token,
      'client_id': '4',
      'client_secret': '64sqM8o2ffoA3KesMxPPuRiYQQzb29vYnL2wzPzK',
      'scope': ''
    }).then(res => {
      localStorage.setItem('access_token', res.data.access_token)
      localStorage.setItem('refresh_token', res.data.refresh_token)
    }).catch(error => {
      console.log(error)
    })
  }
}

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default () => {
  let token = localStorage.getItem('access_token')

  return axios.create({
    baseURL: process.env.API_URL,
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer cascsa`,
    }
  })
}
