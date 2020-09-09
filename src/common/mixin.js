// 混入
import {
  debounce
} from "./util.js"

import BackTop from "components/content/backTop/BackTop.vue"

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 150)
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
  }
}

// 回到顶部-混入对象
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    listenShowBackTop(position) {
      // 决定 返回顶部图标 是否显示
      this.isShowBackTop = position < -1200
    }
  }
}
