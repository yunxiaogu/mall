<!-- 滚动组件 -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // 引入better-scroll库
  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    // 如果写在created生命周期函数中，此时模板还没挂载，获取不到.wrapper元素
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        scrollbar: false,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      // 监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // 将位置传出去
        this.$emit('scroll', position)
      })

      // 监听上拉事件
      this.scroll.on('pullingUp', () => {
        // 将上拉加载数据事件发出去
        this.$emit('pullUpLoad')
      })
    },
    methods: {
      // 将scroolTo方法暴露出去
      scrollTo(x, y, time) {
        this.scroll.scrollTo(x, y, time)
      },
      // 结束上拉操作
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      // 刷新
      refresh() {
        this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
