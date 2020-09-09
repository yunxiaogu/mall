<!-- 详情组件 -->
<template>
  <div id="detail">
    <!-- 顶部导航栏 -->
    <DetailNavBar @itemClick="navItemClick" :titles="titles" ref="detailNav"></DetailNavBar>

    <!-- 滚动组件 -->
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <!-- 轮播图 -->
      <DetailSwiper ref="swiper" :swiperList="swiperList"></DetailSwiper>
      <!-- 商品详情 -->
      <DetailInfo :goodsInfo="goodsInfo" @detailImgLoad="detailImgLoad"></DetailInfo>
      <!-- 商品参数信息 -->
      <DetailParams ref="params" :paramsInfo="goodsParams"></DetailParams>
      <!-- 评论 -->
      <DetailComment ref="comment" :comments="goodsComments"></DetailComment>
      <!-- 推荐信息展示 -->
      <GoodsList ref="recommend" :goodsList="goodsRecomments" class="goodslist" :isShowTitle="isShowTitle"></GoodsList>
      <!-- 底部预留空白，防止太靠近底部，造成浏览效果不佳 -->
      <div class="bottom_space"></div>
    </Scroll>

    <!-- 回到顶部 -->
    <BackTop @click.native="backTop" v-show="isShowBackTop"></BackTop>

    <!-- 底部工具栏 -->
    <DetailBottomBar @addCart="addToCart"></DetailBottomBar>

    <Toast :msg="msg" :show="show"></Toast>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll.vue'
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailSwiper from "./childComps/DetailSwiper.vue"
  import DetailInfo from './childComps/DetailInfo.vue'
  import DetailParams from './childComps/DetailParams.vue'
  import DetailComment from './childComps/DetailComment.vue'
  import DetailBottomBar from './childComps/DetailBottomBar.vue'

  import GoodsList from "components/content/goods/GoodsList.vue"

  import Toast from 'components/common/toast/Toast.vue'

  import {
    debounce
  } from "common/util.js"
  import {
    itemListenerMixin,
    backTopMixin
  } from "common/mixin.js"

  import {
    mapActions
  } from 'vuex'

  // 导入网络请求函数
  import {
    getDetail
  } from 'network/detail.js'

  // 导入本地数据
  import {
    goodsSwiperData,
    goodsInfoData,
    goodsParamsData,
    goodsCommentsData,
    goodsRecommentData
  } from "assets/js/detail_goods_detail.js"

  export default {
    name: 'Detail',
    data() {
      return {
        goods_id: 0,
        // 顶部轮播图数据
        swiperList: [],
        // 商品详情数据
        goodsInfo: {},
        // 商品参数信息
        goodsParams: [],
        // 商品评论
        goodsComments: [],
        // 商品推荐信息
        goodsRecomments: [],
        // 监听全局$bus的组件刷新
        // 使用混入后，可以将该变量放到混入(Mixins)中
        // itemImgListerner: null
        // 是否展示推荐区的标题
        isShowTitle: true,
        // 导航栏中每一个选项对应区域距离顶部的高度
        itemTopY: [],
        getItemTopY: null,
        // 导航栏标题
        titles: ['商品', '参数', '评论', '推荐'],
        // 导航栏标题个数
        navItemLength: 0,
        // 导航栏当前索引
        currentIndex: 0,
        msg: '',
        show: false
      }
    },
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailInfo,
      DetailParams,
      DetailComment,
      GoodsList,
      DetailBottomBar,
      Toast
    },
    created() {
      // 请求指定商品详情数据
      this.goods_id = this.$route.query.goods_id
      // getDetail(this.goods_id).then(res => {
      //   this.info = res
      // })

      // 从本地获取
      this.swiperList = goodsSwiperData
      this.goodsInfo = goodsInfoData
      this.goodsParams = goodsParamsData
      this.goodsComments = goodsCommentsData
      this.goodsRecomments = goodsRecommentData

      // 对获取区域高度进行防抖操作
      this.getItemTopY = debounce(() => {
        this.itemTopY.push(this.$refs.swiper.$el.offsetTop)
        this.itemTopY.push(this.$refs.params.$el.offsetTop)
        this.itemTopY.push(this.$refs.comment.$el.offsetTop)
        this.itemTopY.push(this.$refs.recommend.$el.offsetTop)
      }, 200)
    },
    mounted() {
      // const refresh = debounce(this.$refs.detailScroll.refresh, 150)
      // this.itemImgListener = () => {
      //   refresh()
      // }
      // this.$bus.$on('itemImgLoad', this.itemImgListener)

      // 使用混入Mixin，减少重复代码

      this.navItemLength = this.titles.length
    },
    mixins: [itemListenerMixin, backTopMixin],
    destroyed() {
      this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    methods: {
      ...mapActions(['addCart']),
      detailImgLoad() {
        // console.log(this.newRefresh)
        // this.newRefresh()
        this.$refs.scroll.refresh()
        this.getItemTopY()
      },
      // 导航栏点击第几个选项
      navItemClick(index) {
        // this.$refs.scroll.scrollTo(0, -this.itemTopY[index] + 44, 1000)
        this.$refs.scroll.scrollTo(0, -this.itemTopY[index], 1000)
      },
      // 内容滚动至指定位置，导航栏标题切换
      contentScroll(position) {
        // 获取Y值
        let positionY = -position.y
        // 与顶部导航栏中的标题对应y位置进行对比
        for (let i = 0; i < this.navItemLength; i++) {
          // if((this.currentIndex != i) && (i < this.navItemLength - 1 && positionY >= this.itemTopY[i] && positionY < this.itemTopY[i+1]) || (i == this.navItemLength - 1 && positionY >= this.itemTopY[i])) {
          //   this.currentIndex = i
          //   this.$refs.detailNav.currentIndex = i
          // }
          if ((this.currentIndex != i) && (positionY >= this.itemTopY[i])) {
            this.$refs.detailNav.currentIndex = i
            this.currentIndex = i
          }
        }

        // 是否显示回到顶部
        this.listenShowBackTop(-positionY)
      },
      // 添加到购物车
      addToCart() {
        // 获取购物车需要展示的信息
        let product = {}
        product.id = this.goods_id
        product.imgUrl = this.swiperList[0]
        product.title = this.goodsInfo.goods_name
        product.price = this.goodsInfo.goods_price

        // 将商品添加到购物车中
        // this.$store.commit('addCart', product)
        // this.$store.dispatch('addCart', product).then(res => {
        //   console.log(res);
        // })

        // 使用Vuex的mapActions()方法将actions中的方法映射到组件中的methods中
        this.addCart(product).then(res => {
          this.show = true
          this.msg = res
          
          setTimeout(() => {
            this.show = false
            this.msg = ''
          }, 1500)
        })
      }
      // ,
      // updated() {
      //   this.itemTopY.push(0)
      //   this.itemTopY.push(this.$refs.params.$el.offsetTop)
      //   this.itemTopY.push(this.$refs.comment.$el.offsetTop)

      //   this.itemTopY.push(this.$refs.recommend.$el.offsetTop)
      //   console.log(this.itemTopY)
      // }
    },
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 20;
    overflow: hidden;
    background-color: #FFFFFF;
  }

  .content {
    /* height: calc(100% - 44px); */
    height: calc(100% - 44px - 49px);
    /* height: 100%; */
    position: relative;
    overflow: hidden;
  }

  .bottom_space {
    height: 20px;
  }
</style>
