import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

// 安装插件
Vue.use(Vuex)

// 创建Store对象
const state = {
  cartList: [{
    id: 6,
    imgUrl: 'https://s1.ax1x.com/2020/09/05/wE87nO.th.jpg',
    title: '卡奇莱德(katald)车载空气净化器除甲醛汽车内用负离子氧吧PM2.5除味器消除异味过滤灰尘吸收TVOC气体-灰色',
    price: 123,
    count: 1,
    checked: true
  }, {
    id: 7,
    imgUrl: 'https://s1.ax1x.com/2020/09/08/wluCFS.jpg',
    title: '纯亚麻床单 法国进口亚麻纱线 纯亚麻 抑菌亚麻纯色床单 奢华水洗',
    price: 234,
    count: 1,
    checked: true
  }, {
    id: 8,
    imgUrl: 'https://s1.ax1x.com/2020/09/08/wlupo8.jpg',
    title: '床上用品单件套纯白色全棉床裙纯棉荷叶边床罩美容床床单被单夹棉',
    price: 134,
    count: 1,
    checked: true
  }, {
    id: 9,
    imgUrl: 'https://s1.ax1x.com/2020/09/08/wluSdf.jpg',
    title: '现代简约北欧客厅卧室飘窗阳台纱帘纯色白纱成品落地窗帘布料轻奢',
    price: 413,
    count: 1,
    checked: true
  }]
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// 导出实例
export default store




















/*
 cartList: [{
   id: "6",
   image: "http://image5.suning.cn/uimg/b2c/newcatentries/0070152112-000000000859300818_1_800x800.jpg",
   price: 286,
   title: "啊沙发上大苏打大苏打OC气体-灰色",
   count: 1
 }, {
   id: "7",
   image: "http://image5.suning.cn/uimg/b2c/newcatentries/0070152112-000000000859300818_1_800x800.jpg",
   price: 123,
   title: "卡奇啊实打实大苏打实打实大苏打灰尘吸收TVOC气体-灰色",
   count: 1
 }, {
   id: "8",
   image: "http://image5.suning.cn/uimg/b2c/newcatentries/0070152112-000000000859300818_1_800x800.jpg",
   price: 444,
   title: "卡奇莱德(katald)车载空史蒂夫噶法国除异味过滤灰尘吸收TVOC气体-灰色",
   count: 1
 }, {
   id: "9",
   image: "http://image5.suning.cn/uimg/b2c/newcatentries/0070152112-000000000859300818_1_800x800.jpg",
   price: 111,
   title: "serge私人会所人头好-灰色",
   count: 1
 }]

 */
