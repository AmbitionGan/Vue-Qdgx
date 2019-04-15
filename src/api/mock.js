// const Mock = require('mockjs')
// const Random = Mock.Random
// const bannerImgArr = ['/assets/images/banner01.jpg', '/assets/images/banner02.jpg', '/assets/images/banner03.jpg']
// // mock一组数据
// const BannerData = function () {
//   let articles = []
//   for (let i = 0; i < 3; i++) {
//     let newArticleObject = {
//       title: Random.csentence(5, 30), //  Random.csentence( min, max )
//       thumbnail_pic_s: bannerImgArr[i], // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//       author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//       date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//       id: Random.natural()
//     }
//     articles.push(newArticleObject)
//   }

//   return {
//     articles: articles
//   }
// }

// // Mock.mock( url, post/get , 返回的数据)；
// Mock.mock('/api/banner', 'get', BannerData)
