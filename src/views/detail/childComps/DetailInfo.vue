<!-- 商品信息展示组件 -->
<template>
  <div class="detail_info">
    <div class="goods_info">
      <!-- 商品名称 -->
      <div class="goods_name">{{goodsInfo.goods_name}}</div>
      <!-- 商品价格 -->
      <div class="goods_price">￥{{goodsInfo.goods_price}}</div>
      <!-- 商品细节信息 -->
      <div class="small_info">
        <div class="goods_number">数量:{{goodsInfo.goods_number}}件</div>
        <div class="goods_weight">重量:{{goodsInfo.goods_weight}}g</div>
      </div>
    </div>
    <!-- 商品介绍(富文本) -->
    <div class="goods_text">
      <p v-html="goodsInfo.goods_introduce"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailInfo',
    props: {
      goodsInfo: {}
    },
    mounted() {
      // 向父组件发出一次更新请求
      this.$emit('detailImgLoad')
    }
  }
</script>

<style scoped>
  .detail_info {
    margin-bottom: 5px;
    border-bottom: 3px solid #CCCCCC;
    background-color: #FFFFFF;
  }

  .goods_info {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 2px solid #CCCCCC;
  }

  .goods_name {
    flex: 3;
    font-size: 14px;
    font-weight: bold;
  }

  .goods_price {
    flex: 3;
    margin: 10px 0;
    font-size: 20px;
    color: var(--color-high-text);
  }

  .small_info {
    flex: 1;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .goods_number,
  .goods_weight {
    /* flex: 1; */
    text-align: center;
    font-size: 13px;
    color: #999999;
  }

  .goods_text {
    padding: 10px;
  }
</style>
