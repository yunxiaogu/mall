<!-- 商品列表展示组件 -->
<template>
  <div class="goods-list">
    <GoodsListItem v-for="item in goodsList" :key="item.name + Math.random()*100000" :goods-item="item"></GoodsListItem>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem.vue"

  export default {
    name: 'GoodsList',
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>
