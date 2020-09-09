import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types.js'

export default {
  // 购物车中的该商品数量 +1
  [ADD_COUNTER](state, payload) {
    payload.count += 1
  },
  // 将该商品添加到购物车中
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  }
}
