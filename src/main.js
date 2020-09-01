import Vue from 'vue'
import App from './App.vue'

// 导入路由
import router from './router/index.js'

// 导入Element-UI
import element from './element/index.js'
// import Element from 'element-ui'
// 样式文件必须引入
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(element)

// 事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
