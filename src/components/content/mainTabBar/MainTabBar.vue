<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="black">
      <span slot="item-icon" class="iconfont icon-home"></span>
      <span slot="item-icon-active" class="iconfont icon-homefill"></span>
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="black">
      <span slot="item-icon" class="iconfont icon-comment"></span>
      <span slot="item-icon-active" class="iconfont icon-commentfill"></span>
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="black">
      <span slot="item-icon" class="iconfont icon-cart"></span>
      <span slot="item-icon-active" class="iconfont icon-cartfill"></span>
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="black">
      <span slot="item-icon" class="iconfont icon-people"></span>
      <span slot="item-icon-active" class="iconfont icon-peoplefill"></span>
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar.vue"
  import TabBarItem from "components/common/tabbar/TabBarItem.vue"

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
