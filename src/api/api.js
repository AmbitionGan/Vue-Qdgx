import Http from './http'

export default {
  BannerList (params) {
    return Http.get('/api/banner', params)
  }
}
