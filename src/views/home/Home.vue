<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    </el-carousel>
    <!-- 轮播图 -->
    <HomeSwiper :banners="banners"></HomeSwiper>
    <!-- 推荐信息 -->
    <HomeRecommend :recommends="recommends"></HomeRecommend>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue"
  import HomeSwiper from "./childComps/HomeSwiper.vue"
  import HomeRecommend from "./childComps/HomeRecommend.vue"

  import {getHomeMultidata} from "network/home.js"

  export default {
    name: 'Home',
    data() {
      return {
        // 轮播图数据
        banners: [],
        // 推荐信息
        recommends: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend
    },
    created() {
      // 1 请求多个数据
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

</style>
