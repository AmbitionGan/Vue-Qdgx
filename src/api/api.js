import Http from './http'

// 处理返回数据
function reqPromise (pro, callback) {
  pro.then(res => {
    if (res.data.error_code !== '') {
      const data = res
      data.data = jsonpSwitch(data.data)
      callback(data)
    } else {
      callback(res)
    }
  })
}

// jsonp 转换 json
function jsonpSwitch (data) {
  if (typeof data === 'string') {
    let reg = /^\w+\((\{[^()]+\})\)$/
    let matches = data.match(reg)
    if (matches) {
      var jsonData = JSON.parse(matches[1])
      return jsonData
    }
  } else {
    return data
  }
}

export default {
  // BannerList (params) {
  //   return Http.get('/api/banner', params)
  // },
//   HeaderNav (params, callback) { // 参数 'parentid': 0 导航父级 id 0 父级导航 其他为子级导航
//     reqPromise(Http.get('/api/api/cms/index.aspx?type=0', params), res => {
//       callback(res)
//     })
//   },
//   NewsList (params, callback) {
//     reqPromise(Http.get('/api/api/cms/index.aspx?type=1', params), res => {
//       callback(res)
//     })
//   }
    getList () {
        return new Promise ((res, rej) => {
            Http.get('/api/12djmk', null)
            .then(data => {
                res(data)
            })
            .catch(err => {
                rej(err)
            })
        })
    }
}
