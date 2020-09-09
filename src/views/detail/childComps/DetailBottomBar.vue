<!-- 底部工具栏 -->
<template>
  <div class="bottom-bar">
    <div class="bar-wrap">
      <div class="bar-item item-call">
        <div>
          <span class="iconfont icon-wang"></span>
        </div>
        <div class="item-title">客服</div>
      </div>
      <div class="bar-item item-collection">
        <div class="item-icon">
          <span class="iconfont icon-favor"></span>
        </div>
        <div class="item-title">收藏</div>
      </div>
      <div class="bar-item item-cart">
        <div>
          <span class="iconfont icon-cart"></span>
        </div>
        <div class="item-title">购物车</div>
      </div>
      <div class="bar-item item-fix">
        <div class="item-bt item-add" @click="addToCart">加入购物车</div>
      </div>
      <div class="bar-item item-fix">
        <div class="item-bt item-buy">购买</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      addToCart() {
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 30;
  }

  .bar-wrap {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bar-item {
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item-call,
  .item-collection,
  .item-cart {
    font-size: 10px;
    color-profile: #999999;
  }

  .item-call {
    flex: 1;
  }

  .item-collection {
    flex: 1;
  }

  .item-cart {
    flex: 1;
  }

  .item-add {
    background-color: var(--color-high-text);
  }

  .item-buy {
    background-color: #ffc50d;
  }

  .item-title {
    margin-top: 5px;
  }

  .item-fix {
    flex: 2;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: bold;
    overflow: hidden;
  }

  .item-bt {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 80%;
    border-radius: 25px;
  }
</style>
