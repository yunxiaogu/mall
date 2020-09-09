<!-- 购物车单个商品组件 -->
<template>
  <div class="cart-item">
    <div class="item-wrap">
      <div class="item item-select-wrap">
        <div class="select-wrap" :class="{'active': goods.checked}"></div>
      </div>
      <div class="item item-img-wrap">
        <div class="img-wrap">
          <img :src="goods.imgUrl" alt="">
        </div>
      </div>
      <div class="item item-content-wrap">
        <div class="content-title">{{goods.title}}</div>
        <div class="content-info">
          <div class="info-price">￥{{goods.price}}</div>
          <div class="info-count">x {{goods.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CartItem',
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .cart-item {
    height: 100px;
    border-bottom: 3px solid #F0F0F0;
    display: flex;
    align-items: center;
  }

  .item-wrap {
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .item {
    height: 100%;
  }

  .item-select-wrap {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-select-wrap .select-wrap {
    width: 18px;
    height: 18px;
    border: 1px solid #999999;
    border-radius: 30px;
    overflow: hidden;
  }

  .active {
    background-color: var(--color-high-text);
  }

  .item-img-wrap {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-img-wrap .img-wrap {
    width: 70px;
    height: 80px;
    border-radius: 5px;
    overflow: hidden;
    object-fit: cover;
  }

  .item-img-wrap .img-wrap img {
    height: 100%;
    width: auto;
  }

  .item-content-wrap {
    flex: 6;
  }

  .item-content-wrap .content-title {
    height: 75%;
    padding: 5px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    font-size: 14px;
    line-height: 20px;
  }

  .item-content-wrap .content-info {
    height: 25%;
    overflow: hidden;
    display: flex;
  }

  .item-content-wrap .content-info .info-price {
    flex: 1;
    color: var(--color-high-text);
  }

  .item-content-wrap .content-info .info-count {
    flex: 1;
    padding: 0 5px;
    text-align: right;
  }
</style>


<!--
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
 -->
