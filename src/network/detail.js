// 详情页网络请求

import {request} from './request.js'

export function getDetail(goods_id) {
  return request({
    url: '/goods/detail',
    params: {
      goods_id
    }
  })
}
