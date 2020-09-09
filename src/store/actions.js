import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types.js'

// export default {
//   addCart(context, payload) {
//     // 对添加的商品进行判断
//     let tempProduct = null
//     // for(let item of context.state.cartList) {
//     //   if(item.id == payload.id) {
//     //     tempProduct = item
//     //   }
//     // }

//     tempProduct = context.state.cartList.find(item => item.id == payload.id)

//     if (tempProduct) {
//       context.commit(ADD_COUNTER, tempProduct)
//     } else {
//       tempProduct.count = 1
//       context.commit(ADD_TO_CART, payload)
//     }
//   }
// }


// 将添加商品改为异步操作
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 对添加的商品进行判断
      let tempProduct = context.state.cartList.find(item => item.id == payload.id)
      if (tempProduct) {
        // 原来商品数量+1
        context.commit(ADD_COUNTER, tempProduct)
        resolve('当前商品数量+1')
      } else {
        // 添加新的商品
        tempProduct = {}
        tempProduct.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('成功添加该商品')
      }
    })
  }
}
