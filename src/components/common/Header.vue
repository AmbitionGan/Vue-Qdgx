<template>
  <header class='header'>
        <div class='wrap-1660'>
            <div class='header-top'>
                <div class='header-search'><span></span></div>
                <div class='search-wrap'>
                    <div class='search-box'>
                        <div class='search-box-text-wrap'>
                            <input type='text' placeholder='请输入关键词' class='search-input'>
                        </div>
                        <input type='button' class='search-button' value=''>
                    </div>
                </div>
                <div class='language'><a href='http://www.hongru.com.cn/' target='_blank'>English</a>/<a href='http://www.hongru.com.cn/' target='_blank'>China</a></div>
            </div>
            <div class='header-bottom'>
                <h1><a href='index.aspx'><img src='@/assets/images/logo.png'></a></h1>
                <div class='header-phone-btn'><span>Menu</span></div>
                <div class='header-nav fnt_20'>
                    <ul>
                        <li v-for='item in navList' :key='item.id'>
                            <router-link :to='item.link'>{{item.name}}<em></em></router-link><span></span>
                            <div class='header-nav-list'>
                                <div class='wrap'>
                                    <ol class='fnt_18'>
                                        <li v-for='secItem in item.secNav' :key='secItem.id'><router-link :to='secItem.link'>{{secItem.name}}<em></em></router-link></li>
                                    </ol>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navList: [
        // 导航数据
        {
          name: '关于国信',
          id: this.createRandomId(),
          link: '/about/index',
          secNav: [
            {
              name: '集团介绍',
              id: this.createRandomId(),
              link: '/about/index'
            },
            {
              name: '领导致辞',
              id: this.createRandomId(),
              link: '/about/index'
            },
            {
              name: '集团领导',
              id: this.createRandomId(),
              link: '/about/index'
            },
            {
              name: '组织架构',
              id: this.createRandomId(),
              link: '/about/index'
            },
            {
              name: '重要荣誉',
              id: this.createRandomId(),
              link: '/about/index'
            },
            {
              name: '大事记',
              id: this.createRandomId(),
              link: '/about/index'
            },
            {
              name: '社会责任',
              id: this.createRandomId(),
              link: '/about/index'
            }
          ]
        },
        {
          name: '业务架构',
          id: this.createRandomId(),
          link: '/business/index',
          secNav: [
            {
              name: '综合金融',
              id: this.createRandomId(),
              link: '/business/index'
            },
            {
              name: '城市功能开发',
              id: this.createRandomId(),
              link: '/business/index'
            },
            {
              name: '城市运营服务',
              id: this.createRandomId(),
              link: '/business/index'
            },
            {
              name: '现代海洋产业',
              id: this.createRandomId(),
              link: '/business/index'
            },
            {
              name: '城市信息产业',
              id: this.createRandomId(),
              link: '/business/index'
            }
          ]
        },
        {
          name: '战略发展',
          id: this.createRandomId(),
          link: '/strategy/index',
          secNav: [
            {
              name: '企业战略',
              id: this.createRandomId(),
              link: '/strategy/index'
            },
            {
              name: '战略合作',
              id: this.createRandomId(),
              link: '/strategy/index'
            },
            {
              name: '合作项目',
              id: this.createRandomId(),
              link: '/strategy/index'
            }
          ]
        },
        {
          name: '资讯中心',
          id: this.createRandomId(),
          link: '/nwes/index',
          secNav: [
            {
              name: '集团新闻',
              id: this.createRandomId(),
              link: '/nwes/index'
            },
            {
              name: '媒体报道',
              id: this.createRandomId(),
              link: '/nwes/index'
            },
            {
              name: '集团公告',
              id: this.createRandomId(),
              link: '/nwes/index'
            }
          ]
        },
        {
          name: '企业文化',
          id: this.createRandomId(),
          link: '/culture/index',
          secNav: [
            {
              name: '核心理念',
              id: this.createRandomId(),
              link: '/culture/index'
            },
            {
              name: '文化活动',
              id: this.createRandomId(),
              link: '/culture/index'
            },
            {
              name: '国信故事',
              id: this.createRandomId(),
              link: '/culture/index'
            },
            {
              name: '年度宣传片',
              id: this.createRandomId(),
              link: '/culture/index'
            }
          ]
        },
        {
          name: '人力资源',
          id: this.createRandomId(),
          link: '/human/index',
          secNav: [
            {
              name: '人才理念',
              id: this.createRandomId(),
              link: '/human/index'
            },
            {
              name: '人才引进',
              id: this.createRandomId(),
              link: '/human/index'
            }
          ]
        },
        {
          name: '国信30年',
          id: this.createRandomId(),
          link: '/special/index',
          navList: []
        }
      ]
    }
  },
  methods: {
    createRandomId () {
      return (
        (Math.random() * 10000000).toString(16).substr(0, 4) +
        '-' +
        new Date().getTime() +
        '-' +
        Math.random()
          .toString()
          .substr(2, 5)
      )
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='less'>
</style>
