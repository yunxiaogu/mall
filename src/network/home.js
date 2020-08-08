// Home.vue首页的所哟请求都封装到这里

import {request} from "./request.js"

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
