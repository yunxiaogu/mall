// Home.vue首页的所哟请求都封装到这里

import {
  requestMall,
  request
} from "./request.js"

// 获取轮播图、推荐信息、商品种类
// export function getHomeMultidata() {
//   return requestMall({
//     url: '/home/multidata'
//   })
// }

// 获取商品
// export function getHomeGoods() {

// }



// ---------------------由于老师的接口变更，我改成了聚合数据的图书接口-----------------


// 获取图书分类目录
/* 请求参数说明：
  名称 	 必填  	类型 	    说明
  key 	  是 	  string 	  在个人中心->我的数据,接口名称上方查看
  dtype 	否 	  string   	返回数据的格式,xml或json，默认json
 */
// export function getBooksCatalog() {
//   return request({
//     url: '/catalog',
//     params: {
//       key: "d5ae4ffe9ac5916b233a07e3ae710303"
//     }
//   })
// }

// 获取图书内容
/* 请求参数说明
  名称 	      必填 	类型 	     说明
  key 	       是 	string 	   在个人中心->我的数据,接口名称上方查看
  catalog_id 	 是 	int 	     目录编号
  pn 	         是 	int 	     数据返回起始
  rn 	         是 	int 	     数据返回条数，最大30
  dtype 	     否 	string 	   返回数据的格式,xml或json，默认json
 */
// export function getBooksContent() {
//   return request({
//     url: '/query'
//   })
// }



// ---------------------突然之间想到以前在B站上看的黑马程序员-微信小程序教程，改成了黑马优购项目的接口-----------------
// 轮播图
export function getSwiperData() {
  return request({
    url: '/home/swiperdata'
  })
}
// 导航类型
export function getCateData() {
  return request({
    url: '/home/catitems'
  })
}

// 楼层
export function getFloorData() {
  return request({
    url: '/home/floordata'
  })
}

// 商品分类
export function getCategoryData() {
  return request({
    url: '/categories'
  })
}