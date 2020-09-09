<!-- 底部结算组件 -->
<template>
  <div class="pay-bar">
    <div class="select-all-wrap">
      <div class="select-all" @click.stop="selectAllClick">
        <div class="select-img" :class="{'active': isAllSelect}"></div>
        全选
      </div>
    </div>
    <div class="price-wrap">
      <div class="total-price">总价:￥{{totalPrice}}</div>
    </div>
    <div class="pay-wrap" @click.stop="payClick">
      <div class="pay">去结算({{totalCount}})</div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'CartPayBar',
    data() {
      return {
        isAllSelect: true
      }
    },
    mounted() {
      if(this.cartList.length <= 0) {
        this.isAllSelect = false
      }
      
      // 监听CartList.vue的商品点击状态改变事件
      this.$bus.$on('checkChange', (goods_id) => {
        this.isAllSelect = this.cartList.every(item => item.checked)
      })
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, curItem) => {
          return preValue + curItem.price * curItem.count
        }, 0)
      },
      totalCount() {
        return this.cartList.filter(item => item.checked).length
      }
    },
    methods: {
      selectAllClick() {
        this.isAllSelect = !this.isAllSelect
        // for (let item of this.cartList) {
        //   item.checked = this.isAllSelect
        // }
        this.cartList.forEach(item => {
          item.checked = this.isAllSelect
        })
      },
      // 点击支付
      payClick() {
        
      }
    }
  }
</script>

<style scoped>
  .pay-bar {
    height: 30px;
    display: flex;
  }

  .select-all-wrap {
    flex: 5;
    border-top: 1px solid #F0F0F0;
  }

  .select-all-wrap .select-all {
    height: 100%;
    width: 100px;
    font-size: 13px;
    color: #000000;
    display: flex;
    justify-content: left;
    align-items: center;
    overflow: hidden;
  }


  .select-all-wrap .select-all .select-img {
    width: 18px;
    height: 18px;
    margin: 0 10px;
    overflow: hidden;
    border: 1px solid #999999;
    border-radius: 30px;
  }

  .active {
    background-color: var(--color-high-text);
  }

  .price-wrap {
    flex: 4;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .price-wrap .total-price {
    font-size: 13px;
  }

  .pay-wrap {
    flex: 4;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pay-wrap .pay {
    width: 95px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #FFFFFF;
    background-color: #ffc50d;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
