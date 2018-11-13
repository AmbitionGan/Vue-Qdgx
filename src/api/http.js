import axios from 'axios'
// import router from 'router'

// 自定义配置新建一个 axios 实例
const Axios = axios.create({
//   baseURL: './', // 默认url
  timeout: 10000, // 超时时间
  responseType: 'json', // 返回格式
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' // 请求头
  }
})

const getXtoken = function () {
  return localStorage.getItem('token')
}
let CancelToken = axios.CancelToken
let cancel
let promiseArr = {}

// 请求 拦截器
Axios.interceptors.request.use(
  config => {
    if (promiseArr[config.url]) {
      promiseArr[config.url]('操作取消')
      promiseArr[config.url] = cancel
    } else {
      promiseArr[config.url] = cancel
      var xtoken = getXtoken()
      if (xtoken != null) {
        config.headers['X-Token'] = xtoken
      }
      if (config.method === 'post') {
        config.data = {
          ...config.data, // es6中引入扩展运算符（...），它用于把一个数组转化为用逗号分隔的参数序列，它常用在不定参数个数时的函数调用，数组合并等情形
        //   _t: Date.parse(new Date()) / 1000 // 时间戳
        }
      } else if (config.method === 'get') {
        config.params = {
        //   _t: Date.parse(new Date()) / 1000,
          ...config.params
        }
      }
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
Axios.interceptors.response.use(function (response) {
  // token 已过期,重定向到登录页面
  // if (response.data.code == 4){
  // 	localStorage.clear()
  // 	router.replace({
  //         path: '/signin',
  //         query: {redirect: router.currentRoute.fullPath}
  //     })
  // }
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default {
  // get请求
  get (url, param, callback) {
    new Promise((resolve, reject) => {
        Axios({
        method: 'get',
        url,
        params: param,
        cancelToken: new CancelToken(c => { // 取消请求
          cancel = c
        })
      }).then(res => {
        callback(res)
      })
    })
  },
  // post请求
  post (url, param, callback) {
    return new Promise((resolve, reject) => {
        Axios({
        method: 'post',
        url,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        callback(res)
      })
    })
  }
}
