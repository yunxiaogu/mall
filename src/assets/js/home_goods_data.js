// 首页-轮播图数据
const swiperData = [{
  "image_src": "https://api-hmugo-web.itheima.net/pyg/banner1.png",
  "open_type": "navigate",
  "goods_id": 129,
  "navigator_url": "/pages/goods_detail/main?goods_id=129"
}, {
  "image_src": "https://api-hmugo-web.itheima.net/pyg/banner2.png",
  "open_type": "navigate",
  "goods_id": 395,
  "navigator_url": "/pages/goods_detail/main?goods_id=395"
}, {
  "image_src": "https://api-hmugo-web.itheima.net/pyg/banner3.png",
  "open_type": "navigate",
  "goods_id": 38,
  "navigator_url": "/pages/goods_detail/main?goods_id=38"
}]

// 首页-导航数据
const cateData = [{
  "name": "分类",
  "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_4@2x.png",
  "open_type": "switchTab",
  "navigator_url": "/pages/category/main"
}, {
  "name": "秒杀拍",
  "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_3@2x.png"
}, {
  "name": "超市购",
  "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_2@2x.png"
}, {
  "name": "母婴品",
  "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_1@2x.png"
}]

// 首页-商品种类
const catalogData = [{
  "name": "时尚女装",
  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_title.png"
}, {
  "name": "户外活动",
  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_title.png"
}, {
  "name": "箱包配饰",
  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_title.png"
}]

// 首页-楼层数据
const floorData = [
  [{
    "name": "优质服饰",
    "cat_id": 5,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_1@2x.png",
    "image_width": "232",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=服饰"
  }, {
    "name": "春季热门",
    "cat_id": 6,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_2@2x.png",
    "image_width": "233",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=热"
  }, {
    "name": "爆款清仓",
    "cat_id": 8,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_3@2x.png",
    "image_width": "233",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=爆款"
  }, {
    "name": "倒春寒",
    "cat_id": 9,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_4@2x.png",
    "image_width": "233",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=春季"
  }, {
    "name": "怦然心动",
    "cat_id": 10,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_5@2x.png",
    "image_width": "233",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=心动"
  }],
  [{
    "name": "勇往直前",
    "cat_id": 11,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_1@2x.png",
    "image_width": "232",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=户外"
  }, {
    "name": "户外登山包",
    "cat_id": 12,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_2@2x.png",
    "image_width": "273",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=登山包"
  }, {
    "name": "超强手套",
    "cat_id": 13,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_3@2x.png",
    "image_width": "193",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=手套"
  }, {
    "name": "户外运动鞋",
    "cat_id": 14,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_4@2x.png",
    "image_width": "193",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=运动鞋"
  }, {
    "name": "冲锋衣系列",
    "cat_id": 15,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_5@2x.png",
    "image_width": "273",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=冲锋衣"
  }],
  [{
    "name": "清新气质",
    "cat_id": 16,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_1@2x.png",
    "image_width": "232",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=饰品"
  }, {
    "name": "复古胸针",
    "cat_id": 17,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_2@2x.png",
    "image_width": "263",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=胸针"
  }, {
    "name": "韩版手链",
    "cat_id": 18,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_3@2x.png",
    "image_width": "203",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=手链"
  }, {
    "name": "水晶项链",
    "cat_id": 19,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_4@2x.png",
    "image_width": "193",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=水晶项链"
  }, {
    "name": "情侣表",
    "cat_id": 20,
    "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_5@2x.png",
    "image_width": "273",
    "open_type": "navigate",
    "navigator_url": "/pages/goods_list?query=情侣表"
  }]
]



export {
  swiperData,
  cateData,
  catalogData,
  floorData
}
