<!-- 购物车商品列表组件 -->
<template>
  <div class="cart-list">
    <!-- <img src="https://s1.ax1x.com/2020/09/08/wMeLTg.gif" alt=""> -->
    <img v-if="goodsList.length <= 0" src="https://s1.ax1x.com/2020/09/08/wMyXs1.gif" alt="木有商品">
    <CartItem v-for="item in goodsList" :key="item.id + Math.random()*100000" :goods="item" @click.native="checkClick(item)"></CartItem>
  </div>
</template>

<script>
  import CartItem from './CartItem.vue'

  export default {
    name: 'CartList',
    props: {
      goodsList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      CartItem
    },
    methods: {
      checkClick(item) {
        item.checked = !item.checked
        // 发出商品状态改变事件
        this.$bus.$emit('checkChange', item.id)
      }
    }

  }
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 44px);
  }
</style>
