<template>
  <div class="cart">
    <!-- 顶部导航栏 -->
    <CartNavBar class="nav-bar" :count="cartLength"></CartNavBar>

    <!-- 购物车商品列表 -->
    <Scroll class="content">
      <CartList :goodsList="cartList"></CartList>
    </Scroll>

    <!-- 底部结算 -->
    <CartPayBar ref="cartPayBar" class="pay-bar"></CartPayBar>
  </div>
</template>

<script>
  import CartNavBar from './childComps/CartNavBar.vue'
  import CartList from './childComps/CartList.vue'
  import CartPayBar from './childComps/CartPayBar.vue'

  import Scroll from 'components/common/scroll/Scroll.vue'

  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'Cart',
    components: {
      CartNavBar,
      CartList,
      CartPayBar,
      Scroll
    },
    computed: {
      // cartLength() {
      //   return this.$store.getters.cartLength
      // }
      ...mapGetters(['cartList', 'cartLength'])
    }
  }
</script>

<style scoped>
  .cart {
    /* height: calc(100% - 49px); */
    height: 100vh;
    overflow: hidden;
  }

  .nav-bar {
    /*    position: fixed;
    left: 0;
    right: 0;
    top: 0; */
    background-color: var(--color-tint);
  }

  .content {
    height: calc(100% - 44px - 49px - 30px);
    overflow: hidden;
  }

  .pay-bar {}
</style>
