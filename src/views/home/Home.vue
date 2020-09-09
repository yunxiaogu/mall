<!-- 首页 -->
<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>

    <!-- 商品种类切换 -->
    <TabControl ref="tabControlFixed" :titles="goodsTitles" @tabClick="tabClick" class="tab-control" v-show="isTabFixed"></TabControl>

    <!-- 滚动组件 -->
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :bounce="false" :pull-up-load="true"
      @pullingUp="loadMore">
      <!-- 轮播图 -->
      <HomeSwiper :swiperList="swiperList" @swiperImageLoad="swiperImageLoad"></HomeSwiper>
      <!-- 导航信息 -->
      <HomeRecommend :cateList="cateList" :title-hidden="true"></HomeRecommend>
      <!-- 流行 -->
      <!-- <PopularView></PopularView> -->
      <!-- 商品种类切换 -->
      <TabControl ref="tabControl" :titles="goodsTitles" @tabClick="tabClick" :class="{fixed: isTabFixed}"></TabControl>
      <!-- 商品列表 -->
      <GoodsList :goodsList="goods[goodType].list"></GoodsList>
    </Scroll>

    <!-- 回到顶部 -->
    <BackTop @click.native="backTop" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>
  // 公共组件
  import NavBar from "components/common/navbar/NavBar.vue"
  import TabControl from "components/content/tabControl/TabControl.vue"
  import GoodsList from "components/content/goods/GoodsList.vue"
  import Scroll from "components/common/scroll/Scroll.vue"
  import BackTop from "components/content/backTop/BackTop.vue"

  // 其它
  import HomeSwiper from "./childComps/HomeSwiper.vue"
  import HomeRecommend from "./childComps/HomeRecommend.vue"
  import PopularView from "./childComps/PopularView.vue"

  // 工具函数
  import {itemListenerMixin, backTopMixin} from "common/mixin.js"

  // 网络请求
  import {
    getSwiperData,
    getCateData,
    getFloorData,
    getCategoryData
  } from "network/home.js"


  // 导入工具函数
  import {
    debounce
  } from "common/util.js"

  // 导入静态网络数据
  import {
    swiperData,
    cateData,
    catalogData,
    floorData
  } from 'assets/js/home_goods_data.js'

  export default {
    name: 'Home',
    data() {
      return {
        // 轮播图数据
        swiperList: [],
        // 导航类型数据
        cateList: [],
        // 楼层数据
        floorData: [],
        // 商品类别名称
        goodsTitles: [],
        // 分类
        categories: [],
        // 根据点击商品类别，获取index、type
        goodIndex: 0,
        goodType: 'pop',
        goods: {
          'pop': {
            page: 0,
            list: []
          }, // 页数、流行商品
          'new': {
            page: 0,
            list: []
          }, // 页数、新款商品
          'sell': {
            page: 0,
            list: []
          } // 页数、精选商品
        },
        // 距离顶部的距离
        tabOffsetTop: 0,
        // 默认tabControl不需要吸顶
        isTabFixed: false,
        // 记录组件离开时的位置
        saveY: 0
        // 监听全局$bus的组件刷新
        // 使用混入后，可以将该变量放到混入(Mixins)中
        // itemImgListerner: null
      }
    },
    components: {
      // 公共组件
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      // 其它
      HomeSwiper,
      HomeRecommend,
      PopularView
    },
    created() {
      // this.getSwiperData()
      // this.getCateData()
      // this.getFloorData()

      // 网络请求用本地数据代替
      this.swiperList = swiperData
      this.cateList = cateData
      this.goodsTitles = catalogData
      this.floorData = floorData

      getCategoryData().then((res) => {
        this.categories = res
      })
    },
    destroyed() {
      console.log('组件销毁');
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 300)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 保存Y值
      this.saveY = this.$refs.scroll.getScrollY()
      // 取消全局事件的监听
      this.$bus.$off('itemImgLoad', this.itemImgListerner)
    },
    mounted() {
      // 将数据填充到goods: {}
      // 这里需要深拷贝，如果直接写this.goods['pop'].list = this.floorData[0]是浅拷贝，即把引用地址复制一份
      // 如果不使用深拷贝，那么每一次上拉加载数据，都会往floorData中添加，而不是对应的goods[''].list
      this.goods['pop'].list = [...this.floorData[0]]
      this.goods['new'].list = [...this.floorData[1]]
      this.goods['sell'].list = [...this.floorData[2]]

      // refresh虽然是局部变量，但是不会被销毁，因为refresh在下面的函数中引用了，形成了闭包
      // const refresh = debounce(this.$refs.scroll.refresh, 150)
      // // 监听item图片加载完成，事件由GoodsListItem发出
      // this.$bus.$on('itemImageLoad', () => {
      //   // 重新刷新，让better-scroll重新计算可滚动高度
      //   // this.$refs.scroll.refresh()
      //   refresh()
      // })


      // const refresh = debounce(this.$refs.scroll.refresh, 150)
      // this.itemImgListerner = () => {
      //   refresh()
      // }
      // this.$bus.$on('itemImgLoad', this.itemImgListerner)

    },
    mixins: [itemListenerMixin,backTopMixin],
    methods: {
      /*
        事件监听
      */
      // 监听商品种类切换
      tabClick(index) {
        this.goodIndex = index
        this.goodType = index == 0 ? 'pop' : (index == 1 ? 'new' : (index == 2 ? 'sell' : 'pop'))
        // 使两个tabControl的index保持一致
        this.$refs.tabControlFixed.currentIndex = index
        this.$refs.tabControl.currentIndex = index
      },
      // 监听 回到顶部 按钮
      contentScroll(position) {
        // // 决定 返回顶部图标 是否显示
        // this.backTopShow = position.y < -1200
        this.listenShowBackTop(position.y)
        // 决定tabControl是否吸顶(position:fixed)
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      // 监听 上拉加载更多
      loadMore() {
        // 根据index判断应该加载那个种类的商品
        this.getFloorDataBy(this.goodIndex, this.goodType)
      },
      // 轮播图加载完成
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop - 44
      },
      /*
        网络请求
      */
      getSwiperData() {
        // 请求轮播图数据
        getSwiperData().then((res) => {
          this.swiperList = res.data.message
        })
      },
      getCateData() {
        // 请求导航类型数据
        getCateData().then(res => {
          this.cateList = res.data.message
        })
      },
      getFloorData() {
        // 请求楼层数据
        getFloorData().then(res => {
          // 请求所有数据
          this.goodsTitles = res.data.message.map(v => v.floor_title.name)
          this.floorData = res.data.message.map(v => v.product_list)
          // 将数据填充到goods: {}
          this.goods['pop'].list = this.floorData[0]
          this.goods['new'].list = this.floorData[1]
          this.goods['sell'].list = this.floorData[2]
        })
      },
      // 请求特定楼层数据，index:当前点击的商品种类索引；type:当前点击的商品种类名称
      getFloorDataBy(index, type) {
        const page = this.goods[type].page + 1
        this.goods[type].list.push(...this.floorData[index])
        this.goods[type].page += 1

        // 刷新，避免better-scroll计算的高度因为异步加载的图片还没过来而出现错误
        // this.$refs.scroll.refresh()
        this.$refs.scroll.finishPullUp()
      }
      // ,
      // // 回到顶部
      // backClick() {
      //   // 拿到Scroll组件对象，并回到顶部
      //   // this.$refs.scroll.scroll.scrollTo(0, 0, 1000)

      //   // 不应该通过组件中的属性去调用组件的方法，可以通过Scroll组件中定义methods，向外提供方法调用
      //   this.$refs.scroll.scrollTo(0, 0, 1000)
      // }
    }
  }
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    /* padding-bottom: 50px; */
    height: 100vh;
    overflow: hidden;
  }

  .home-nav {
    /* 在使用浏览器原生滚动时，为了让导航不跟随一起滚动，所以进行绝对定位，
    当使用better-scroll时，由于使用了局部滚动，所以可以清除position: fixed; */
    /*    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 20;*/
    background-color: var(--color-tint);
    color: #fff;
  }

  .tab-control {
    position: relative;
    z-index: 10;
  }

  .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }

  .content {
    height: calc(100% - 93px);
    /* margin-top: 44px; */

    /*    position: absolute;
    top: 44px;
    bottom: 49px; */

    overflow: hidden;
  }
</style>
