<!-- 商品列表展示组件 -->
<template>
  <div class="goods-list">
    <div class="recomment" v-if="isShowTitle">
      <span class="iconfont icon-mobile_tao"></span>
      <p>推荐信息</p>
    </div>
    <div class="goods-show">
      <GoodsListItem v-for="item in goodsList" :key="item.name + Math.random()*100000" :goods-item="item"></GoodsListItem>
    </div>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem.vue"

  export default {
    name: 'GoodsList',
    props: {
      goodsList: {
        type: Array,
        default () {
          return []
        }
      },
      isShowTitle: {
        tpye: Boolean,
        default: false
      }
    },
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
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

  .goods-show {
    display: flex;
    flex-wrap: wrap;
  }
</style>
