<!-- 详情组件 -->
<template>
  <div id="detail">
    <!-- 顶部导航栏 -->
    <DetailNavBar></DetailNavBar>

    <!-- 滚动组件 -->
    <Scroll class="content" ref="detailScroll">
      <!-- 轮播图 -->
      <DetailSwiper :swiperList="swiperList"></DetailSwiper>
      <!-- 商品详情 -->
      <!-- <DetailInfo :goodsInfo="goodsInfo"></DetailInfo> -->
      <!-- 商品参数信息 -->
      <DetailParams :paramsInfo="goodsParams"></DetailParams>
      <!-- 评论 -->
      <DetailComment :comments="goodsComments"></DetailComment>
      <!-- 推荐信息展示 -->
      <div class="recomment">
        <span class="iconfont icon-mobile_tao"></span>
        <p>推荐信息</p>
      </div>
      <GoodsList :goodsList="goodsRecomments" class="goodslist"></GoodsList>
      <!-- 底部预留空白，防止太靠近底部，造成浏览效果不佳 -->
      <div class="bottom_space"></div>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll.vue'
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailSwiper from "./childComps/DetailSwiper.vue"
  import DetailInfo from './childComps/DetailInfo.vue'
  import DetailParams from './childComps/DetailParams.vue'
  import DetailComment from './childComps/DetailComment.vue'

  import GoodsList from "components/content/goods/GoodsList.vue"

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
        goodsRecomments: []
      }
    },
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailInfo,
      DetailParams,
      DetailComment,
      GoodsList
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
    },
    mounted() {
      this.$refs.detailScroll.refresh()
    }
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
    /* height: calc(100% - 44px - 49px); */
    height: calc(100% - 44px);
    overflow: hidden;
  }

  .recomment {
    display: flex;
    margin: 5px 10px;
    justify-content: center;
    align-items: center;
    letter-spacing: 10px;
  }

  .recomment .icon-mobile_tao {
    font-size: 18px;
  }

  .recomment p {
    font-weight: bold;
  }

  .bottom_space {
    height: 20px;
  }
</style>
