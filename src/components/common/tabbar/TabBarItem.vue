<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 需要动态的传入icon、title，所以使用插槽 -->
    <!--    <span class="iconfont icon-home icon"></span>
    <div>首页</div> -->

    <!--
      如果需要设置属性进行一些样式的变化、控制，不建议将属性直接写在slot插槽上，应该是将slot包裹在一层标签中，
      对外层标签进行控制。
     -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!--    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div> -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'black'
      }
    },
    data() {
      return {
        // isActive: false
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    color: #777777;
  }

  .tab-bar-item span {
    font-size: 24px;
  }

  .active {
    color: #000000;
  }
</style>
