<template>
  <div class="col-md-12">
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in bannerData" :key="item.id">
            <img :src="item.thumbnail_pic_s" alt="">
            <div class="content">
              <h1>{{item.title}}</h1>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
import Req from '../../api/http.js'

export default {
  name: 'Banner',
  data () {
    return{
      bannerData: ''
    }
  },
  created() {
    Req.get('/api/banner', null, res => {
      this.$data.bannerData = res.data.articles
    })
  },
  mounted () { // 数据挂载结束
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // prevButton: '.swiper-button-prev',
        // nextButton: '.swiper-button-next'
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.swiper-button-prev,.swiper-button-next{
  display: none;
}
.swiper-slide{
  position: relative;
}
.swiper-slide .content{
  position: absolute;
  z-index: 2;
  bottom: 20%;
  left: 10%;
  color: #fff;
  font-size: 48px;
  width: 30%;
}
.swiper-slide img{
  max-width: 100%;
}
</style>
