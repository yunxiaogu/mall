// 导入element ui组件
// 全部引入
// import Element from 'element-ui'
// 按需引入
import {
  Carousel,
  CarouselItem,
  Button,
  Image,
  Avatar,
  Row,
  Col
} from 'element-ui'

const element = {
  install(Vue) {
    Vue.use(Carousel),
    Vue.use(Button),
    Vue.use(CarouselItem),
    Vue.use(Image),
    Vue.use(Avatar),
    Vue.use(Row),
    Vue.use(Col)
  }
}

export default element
