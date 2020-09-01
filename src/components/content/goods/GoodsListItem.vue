<!-- 商品列表中的单项 -->
<template>
  <div class="goods-item" @click="itemClick">
    <div class="goods-item-img">
      <img :src="goodsItem.image_src" :alt="goodsItem.name" @load="imageLoad">
    </div>
    <div class="goods-item-title">
      <p>{{goodsItem.name}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      // 点击事件
      itemClick() {
        this.$router.push({
          path: '/detail',
          query: {
            goods_id: this.goodsItem.cat_id
          }
        })
      },
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    /* width: 150px; */
    /* width: 45vw; */
    width: 45%;
    height: 220px;
    margin-left: 10px;
    margin-top: 5px;
    padding: 5px;
    overflow: hidden;
  }

  .goods-item-img {
    height: 190px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #eeeeee;
  }

  .goods-item-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .goods-item-title {
    width: 100%;
    font-size: 14px;
    text-align: center;
    margin-top: 6px;
  }

  .goods-item-title p {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
